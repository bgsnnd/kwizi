"use client";
import { useGlobalContext } from '@/context/globalContext';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useEffect } from 'react';

const page = () => {
    const {selectedQuiz, quizSetup, setQuizSetup, setQuizResponses} = useGlobalContext();
    const router = useRouter();
    const {currentIndex, setCurrentIndex } = React.useState(0);
    const {activeQuestion, setActiveQuestion } = React.useState(null);
    const {responses, setResponses} = React.useState([]);
    const {shuffleOptions, setShuffleOptions} = React.useState([]);
    const {shuffleQuestions, setShuffleQuestions} = React.useState([]);

    if(!selectedQuiz) {
      router.push("/");
      return null;
    }
    //shuffle questions when the quiz is started
    useEffect(()=> {
        const filteredQuestions = selectedQuiz.questions.filter((q:{difficulty:string})=>{
          return (!quizSetup?.difficulty || quizSetup?.difficulty === "usspecified" || quizSetup?.difficulty === q.difficulty

          );
        }
      )
      .slice(0, quizSetup?.questionCount);

      setShuffleQuestions(suffleArray([filteredQuestions]));
    }, [selectedQuiz, quizSetup]);


    //Fisher-Yates Shuffle Algorithm
    const suffleArray = (array: any[]) => {
      for(let i = array.length -1; i>0;--i){
        //generate a random index between 0 and i
        const j = Math.floor(Math.random()* (i+1));
        //swap element array[i] and array[j]
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };
    console.log("Selected Quiz:", selectedQuiz);

  return (
    <div>
      page
    </div>
  )
}

export default page
