/* eslint-disable @typescript-eslint/no-unused-vars */
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    try {
        const {userId} = await auth();
        if (!userId){
            return NextResponse.json({error: "Unauthorized"},{status:401})
        }

        //find user in db
        const user = await prisma.user.findUnique({
            where : {clerkId: userId},
        })
        if (!user){
            return NextResponse.json({error: "User not found"},{status:404})
        }
        return NextResponse.json(user);
    } catch (error) {
        console.log("Error starting quiz:", error);
        return NextResponse.json({error: "Error getting user"},{status:500})
    }
}