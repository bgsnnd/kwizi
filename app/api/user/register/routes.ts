/* eslint-disable @typescript-eslint/no-unused-vars */
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    try{
        const {userId} = await auth();
        if (!userId) {
            return NextResponse.json({error:"Unauthorized"}, {status: 401});
        }
        //check if the user exit in the db
        let user = await prisma.user.findUnique({
            where : {clerkId:userId},
        })
        //if do not exit, create new user
        if(!user){
            user= await prisma.user.create({
                data: {
                    clerkId: userId,
                }
            })
        }else{
            console.log("User already exists");
        }

        return NextResponse.json(user);

    }catch (error){
        console.log("Error starting quiz:",error);
        return NextResponse.json({error:"Error starting user"}, {status: 500});
        
    }
}