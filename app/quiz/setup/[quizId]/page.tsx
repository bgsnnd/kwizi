"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useGlobalContext } from '@/context/globalContext'
import { play } from '@/utils/Icons'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

function page(){
    const router = useRouter();
    const {quizSetup, setQuizSetup, selectedQuiz} = useGlobalContext;
    useEffect(()=> {
        if(!selectedQuiz){
            router.push("/");
        }
    }, [selectedQuiz,router])

    return(
        <div>
            <div className="py-[6rem] w-[50%] fixed left-1/2 top-[45%] translate-x-[-50%] translate-y-[-50%] p-6 border-2 rounded-xl shadow-[0_.5rem_0_0_ rgba(0,0,0,0.1)] mx-auto ">
                <h1 className="text-4xl font-bold mb-4">Quiz Setup</h1>
                <div className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="questionCount">Number of Questions</Label>
                        <Input type="number" min={1} id="questionCount" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="category" className="text-lg" >Category</Label>
                        <Select disabled>
                            <SelectTrigger id="category">
                                <SelectValue placeholder="Select a category"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="general">General Knowledge</SelectItem>
                                <SelectItem value="science">Science</SelectItem>
                                <SelectItem value="history">History</SelectItem>
                                <SelectItem value="geography">Geography</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="difficulty" className="text-lg" >
                            Difficulty
                        </Label>
                        <Select defaultValue="unspecified">
                            <SelectTrigger id="difficulty">
                                <SelectValue placeholder="Select a difficulty"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="unspecified">Unspecified</SelectItem>
                                <SelectItem value="easy">Easy</SelectItem>
                                <SelectItem value="medium">Medium</SelectItem>
                                <SelectItem value="hard">Hard</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>

            <div className=" w-full py-[4rem] flex items-center justify-center fixed bottom-0 left-0 bg-white border-t-2">
                <Button variant={"blue"} className="px-10 py-6 font-bold text-white text-xl rounded-xl">
                    <span className="flex items-center gap-2">{play} Start</span>
                </Button>
            </div>
        </div>
    )
}

export default page