"use client";
import { useGlobalContext } from '@/context/globalContext';
import { useRouter } from 'next/navigation';
import React from 'react'

const page = () => {
    const {selectedQuiz, quizSetup, setQuizSetup, setQuizResponses} = useGlobalContext();
    const router = useRouter();
    const {currentIndex, setCurrentIndex } = React.useState(0);
    const {activeQuestion, setActiveQuestion } = React.useState(null);
    const {responses, setResponses} = React.useState([]);
    const {shuffleOptions, setShuffleOptions} = React.useState([]);
    const {shuffleQuestions, setShuffleQuestions} = React.useState([]);


  return (
    <div>
      page
    </div>
  )
}

export default page
