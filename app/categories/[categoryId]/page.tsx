/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { auth } from "@clerk/nextjs/server";
import React from "react";
import prisma from "@/utils/connect";
import { IQuiz } from "@/types/types";
import QuizCard from "@/components/quiz/QuizCard";

async function Page({ params }: any) {
  const { categoryId } = params;
  
  const { userId } = await auth();

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
          option: {
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
          {quizzes.map((quiz) => (
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
