"use client"

import { Button } from '@/components/ui/button';
import { useGlobalContext } from '@/context/globalContext';
import { play } from '@/utils/Icons';
import { useRouter } from 'next/navigation';
import React from 'react'

function page() {
    const router = useRouter();
    const {quizResponses, selectedQuiz} = useGlobalContext();

    if(!quizResponses || quizResponses.length === 0 ) {
        return router.push("/");
    }

    //menghitung score
    const corretAnswer = quizResponses.filter(
        (res: {isCorrect : boolean}) => res.isCorrect
    ).length;

    const totalQuestions = quizResponses.length;
    const scorePrecentage = (corretAnswer / totalQuestions) * 100;

    //melihatkan score
    let message : "";
    if(scorePrecentage < 25){
        message = "You need to try harder !";
    }else if(scorePrecentage >= 25 && scorePrecentage < 50 ){
        message = "You are getting there ! Keep practicing.";
    }else if(scorePrecentage >= 50 && scorePrecentage < 75 ){
        message = "Good effort! You're above average.";
    }else if(scorePrecentage === 100 ){
        message = "Outstanding! You got everything right !";
    }

  return (
    <div className="py-20 flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-center"> Quiz Results</h1>
        <p className="text-2xl text-center mt-4">
            You scored <span className="font-bold">{corretAnswer}</span> out of {""}
            <span className="font-bold text-3xl">{totalQuestions}</span>
        </p>
        <span className="text-blue-400 font-bold text-xl text-center">
                {scorePrecentage.toFixed()}%
        </span>
        <p className="text-2xl text-center mt-2 font-semibold">{message}</p>
        <div className="flex justify-center mt-8">
            <Button 
            variant={"green"}
            className=" px-10 py-6 font-bold text-white text-xl rounded-xl"
            onClick={() => router.push("/quiz/setup/" + `${selectedQuiz.id}`)}
            >
                {play} Play Again
            </Button>
        </div>
    </div>
  )
}

export default page
