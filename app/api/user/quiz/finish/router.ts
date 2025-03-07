import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    try {
        const {userId:clerkId} = await auth();

        if(!clerkId){
            return NextResponse.json({error:"Unauthorized"}, {status:401});   
        }
        //validate the fields
        const {categoryId, quizId, score, responses } = await req.json();
        if(!categoryId || !quizId || !score || !Array.isArray(responses)) {
            return NextResponse.json({error: "Invalid request"}, {status:400})
        }

        const user = await prisma.user.findUnique({where: {clerkId}});

        if(!user){
            return NextResponse.json({error: "User not found"}, {status:404})
        }

        //fetch or create a categoryStat entry
        let stat = await prisma.categoryStat.findUnique({
            where: {
                userId_categoryId: {
                    userId: user.id,
                    categoryId,
                },
            },
        });

        //if stat does not exist, create a new one
        if(!stat){
            //calculate the average score
            const totalScore = (stat.averageScore || 0 ) * stat.completed + score
            const newAverageScore = totalScore / (stat.completed + 1)

            //update the categorystat entry

            stat = await prisma.categoryStat.update({
                where : {id:stat.id},
                data: {
                    completed: stat.completed + 1,
                    averageScore: newAverageScore,
                    lastAttempt : new Date(),
                },
            });
        }else{
            //create new Categorystat entry

            stat = await prisma.categoryStat.create({
                data: {
                    userId: user.id,
                    categoryId,
                    attempts: 1,
                    completed: 1,
                    averageScore: score,
                    lastAttempt: new Date(),
                },
            });
        }

        return NextResponse.json(stat);

    } catch (error) {
        console.log("Error starting quiz :", error);
        return NextResponse.json({error: "Error finishing quiz"}, {status:500})
    }
}