/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { auth } from "@clerk/nextjs/server";
import React from "react";
import prisma from "@/utils/connect";
import { IQuiz } from "@/types/types";
import QuizCard from "@/components/quiz/QuizCard";
import { aj } from "@/lib/arcjet";
import { request } from "@arcjet/next";
import Countdown from "@/components/Countdown";

async function Page({ params }: any) {
  const { categoryId } = params;
  
  const { userId } = await auth();

  const req = await request();
  const decision = await aj.protect(req,{userId : userId ?? "", requested:5});

  console.log(decision);

  if(decision.isDenied()){
    if(decision.reason.isRateLimit()){
      const resetTime = decision.reason.resetTime;
  
      if(!resetTime){
        return (
          <div className="">
            <h1>Rate limit exceeded</h1>
          </div>
        )
      }
  
      //calculate the time left on the server
  
      const currentTime = Date.now();
      const resetTimestamp = new Date(resetTime).getTime();
      const timeleft = Math.max(Math.ceil((resetTimestamp - currentTime) / 1000), 0);//convert ke detik
      return (
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-4xl font-bold text-center text-red-400">Too many requests :(</h1>
          <p>You have exceeded the rate limit for this requests.</p>
  
          <Countdown intitialTimeLeft ={timeleft}/>
        </div>
      )
    }
  }

  if (!categoryId) {
    return null;
  }

  const quizzes = await prisma.quiz.findMany({
    where: { categoryId },
    include: {
      questions: {
        select: {
          id: true,
          text: true,
          difficulty: true,
          options: {
            select: {
              id: true,
              text: true,
              isCorrect: true,
            },
          },
        },
      },
    },
    orderBy: {
      id: "asc",
    },
  });

  return (
    <div>
      <h1 className="mb-6 text-4xl font-bold">All Quizzes</h1>
      {quizzes.length > 0 ? (
        <div className="mb-8 grid [grid-template-columns:repeat(auto-fit,minmax(400px,1fr))] gap-6">
          {quizzes.map((quiz: IQuiz) => (
            <QuizCard key={quiz.id} quiz={quiz} />
          ))}
        </div>
      ) : (
        <h1 className="text-2xl text-center mt-4">
          No quizzes found for this category
        </h1>
      )}
    </div>
  );
}

export default Page;
