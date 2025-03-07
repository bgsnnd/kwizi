"use client";

import { Button } from "@/components/ui/button";
import { useGlobalContext } from "@/context/globalContext";
import { play } from "@/utils/Icons";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function Page() {
    const router = useRouter();
    const { quizResponses, selectedQuiz } = useGlobalContext();

    useEffect(() => {
        if (!quizResponses || quizResponses.length === 0) {
            router.push("/");
        }
    }, [quizResponses]);

    if (!quizResponses || quizResponses.length === 0) {
        return <p className="text-center">Redirecting...</p>;
    }

    // Menghitung skor
    const correctAnswer = quizResponses.filter(
        (res: { isCorrect: boolean }) => res.isCorrect
    ).length;

    const totalQuestions = quizResponses.length;
    const scorePercentage = (correctAnswer / totalQuestions) * 100;

    // Menampilkan pesan sesuai skor
    let message: string = "";
    if (scorePercentage < 25) {
        message = "You need to try harder!";
    } else if (scorePercentage >= 25 && scorePercentage < 50) {
        message = "You are getting there! Keep practicing.";
    } else if (scorePercentage >= 50 && scorePercentage < 75) {
        message = "Good effort! You're above average.";
    } else if (scorePercentage >= 75 && scorePercentage < 100) {
        message = "Great job! Almost perfect!";
    } else if (scorePercentage === 100) {
        message = "Outstanding! You got everything right!";
    }

    return (
        <div className="py-20 flex flex-col gap-4">
            <h1 className="text-4xl font-bold text-center">Quiz Results</h1>
            <p className="text-2xl text-center mt-4">
                You scored <span className="font-bold">{correctAnswer}</span> out of{" "}
                <span className="font-bold text-3xl">{totalQuestions}</span>
            </p>
            <span className="text-blue-400 font-bold text-xl text-center">
                {scorePercentage.toFixed()}%
            </span>
            <p className="text-2xl text-center mt-2 font-semibold">{message}</p>
            <div className="flex justify-center mt-8">
                <Button
                    className="bg-green-500 hover:bg-green-600 px-10 py-6 font-bold text-white text-xl rounded-xl"
                    onClick={() => router.push(`/quiz/setup/${selectedQuiz.id}`)}
                >
                    {play} Play Again
                </Button>
            </div>
        </div>
    );
}

export default Page;
