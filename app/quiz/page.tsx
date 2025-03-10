"use client";
import { Button } from '@/components/ui/button';
import { useGlobalContext } from '@/context/globalContext';
import { IOption, IQuestion, IResponse } from '@/types/types';
import { flag, next } from '@/utils/Icons';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useEffect } from 'react';
import toast from 'react-hot-toast';

function Page() {
    const {selectedQuiz, quizSetup, setQuizSetup, setQuizResponses} = useGlobalContext();
    const router = useRouter();
    const [currentIndex, setCurrentIndex ] = React.useState(0);
    const [activeQuestion, setActiveQuestion] = React.useState<IOption | null>(null);
    const [responses, setResponses] = React.useState<IResponse[]>([]);
    const [shuffledOptions, setShuffledOptions] = React.useState<IOption[]>([]);
    const [shuffledQuestions, setShuffledQuestions] = React.useState<IQuestion[]>(
        []
    );

    if(!selectedQuiz) {
      router.push("/");
      return null;
    }
    //shuffle questions when the quiz is started
    useEffect(() => {
      // Jika selectedQuiz tidak ada, atur default kosong
      if (!selectedQuiz?.questions?.length) {
        console.warn("selectedQuiz atau pertanyaan tidak ditemukan!");
        setShuffledQuestions([]); // ✅ Tetap update state agar urutan hook tidak berubah
        return;
      }
    
      const filteredQuestions = selectedQuiz.questions
        .filter((q) => {
          return (
            !quizSetup?.difficulty ||
            quizSetup?.difficulty === "unspecified" ||
            quizSetup?.difficulty === q.difficulty
          );
        })
        .slice(0, quizSetup?.questionCount)
        .map((q) => ({
          ...q,
          options: q.options ?? [], // ✅ Pastikan `options` tidak undefined
        }));
    
      setShuffledQuestions(shuffleArray([...filteredQuestions]));
    }, [selectedQuiz, quizSetup]);
    
    
    
    

    //shuffle options when the active question changes
    useEffect(() => {
      console.log("Current Question:", shuffledQuestions[currentIndex]?.text ?? "No question");
      console.log("Options:", shuffledQuestions[currentIndex]?.options ?? "No options");
    
      if (shuffledQuestions.length === 0) {
        setShuffledOptions([]); // ✅ Tetap update state agar tidak error
        return;
      }
    
      if (Array.isArray(shuffledQuestions[currentIndex]?.options)) {
        setShuffledOptions(shuffleArray([...shuffledQuestions[currentIndex].options]));
      } else {
        setShuffledOptions([]);
      }
    }, [shuffledQuestions, currentIndex]);
    
    
    

    //Fisher-Yates Shuffle Algorithm
    const shuffleArray = <T,>(array: T[]): T[] => {
      for(let i = array.length -1; i > 0; --i) {
        //generate a random index between 0 and i
        const j = Math.floor(Math.random() * (i + 1));
        //swap element array[i] and array[j]
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };
    
    const handleActiveQuestion = (option: IOption) => {

      if(!shuffledQuestions[currentIndex]) return

      const response = {
        questionId : shuffledQuestions[currentIndex].id,
        optionId: option.id,
        isCorrect: option.isCorrect,

      };

      setResponses((prev) => {
        //check if the response already exists
        const existingIndex = prev.findIndex((res) => {
          return res.questionId === response.questionId;
        });
        //update the response if it exists
        if(existingIndex !== -1){
          //update response
          const updatedResponses = [...prev];
          updatedResponses[existingIndex] = response;

          return updatedResponses;
        }else{
          return [...prev, response];
        }
      });


      //SET THE ACTIVE QUESTION
      setActiveQuestion(option);
    };

    const handleNextQuestion = () => {
      if (currentIndex < shuffledQuestions.length -1){
        setCurrentIndex((prev) => prev + 1);

        //reset the active question
        setActiveQuestion(null);
      }else{
        router.push("/quiz/results");
      }
    };

    const handleFinishQuiz = async () => {
      setQuizResponses(responses);
  
      const score = responses.filter((res) => res.isCorrect).length;
  
      try {
        const res = await axios.post("/api/user/quiz/finish", {
          categoryId: selectedQuiz.categoryId,
          quizId: selectedQuiz.id,
          score,
          responses,
        });
  
        console.log("Quiz finished:", res.data);
      } catch (error) {
        console.log("Error finishing quiz:", error);
      }
  
      setQuizSetup({
        questionCount: 1,
        category: null,
        difficulty: null,
      });
  
      router.push("/results");
    };


  return (

    <div className="py-[2.5rem]">
      {shuffledQuestions?.length > 0 && currentIndex < shuffledQuestions.length ? (
        <div className="space-y-6">
          <div className="flex flex-col gap-6">
          <p className="py-3 px-6 border-2 text-xl font-bold self-end rounded-lg shadow-[0_.3rem_0_0_rgba(0,0,0,0.1)]">
            Question: <span>{currentIndex + 1}</span> /
            <span className="text-3xl">{shuffledQuestions?.length ?? 0}</span>
          </p>

            <h1 className="mt-4 px-10 text-5xl font-bold text-center">{shuffledQuestions[currentIndex]?.text}</h1>
          </div>

          <div className="pt-14 space-y-4">
              {shuffledOptions.map((option, index) => (
                <button key={index}
                  className={`relative group py-3 w-full text-center border-2 text-lg font-semibold rounded-lg 
                    hover: bg-[rgba(0,0,0,0.03)] transition-all duration-200 ease-in-out
                    ${option.text === activeQuestion?.text ? "bg-green-100 border-green-500 shadow-[0_.3rem_0_0_#51bf22] hover:bg-green-200 hover:border-green-600"
                        : "shadow-[0_.3rem_0_0_rgba(0,0,0,0.1)] hover:bg-gray-200"
                    } 
                    `}
                    onClick={() => handleActiveQuestion(option as IOption)}
                >{option.text}</button>
              ))}
          </div>
        </div>
      ) : (
        <p className="text-lg"> No questions found for this quiz</p>
      )}

      <div className="w-full py-[4rem] flex items-center justify-center fixed bottom-0 left-0 bg-white border-t-2">
          <Button className="px-10 py-6 font-bold text-white text-xl rounded-xl" 
            variant={"green"}
            onClick={()=> {
              if(currentIndex < shuffledQuestions.length - 1) {
                if(activeQuestion?.id){
                  handleNextQuestion()
                }else{
                  const sound = new Audio("/sounds/error.mp3");
                  sound.play();
                  toast.error("Please select an option to continue");
                }
              }else{
                if(activeQuestion?.id){
                  handleFinishQuiz();
                }else{
                  const sound = new Audio("/sounds/error.mp3");
                  sound.play();
                  toast.error("Please select an option to continue");
                }
              }
            }}
            >
              {currentIndex < shuffledQuestions.length - 1 ? ( 
              <span className="flex items-center gap-2">{next} Next</span> 
            ) : (
              <span className="flex items-center gap-2">{flag}Finish</span>
            )}
          </Button>
      </div>
    </div>

  )
}

export default Page
