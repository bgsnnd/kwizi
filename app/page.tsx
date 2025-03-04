"use client"
import {useGlobalContext} from "@/context/globalContext";
import HomeCard from "@/components/quiz/HomeCard";
import { ICategory } from "@/types/types";


export default function Home(){
  const { categories } = useGlobalContext();
  return (
    <div className="">
      <h1 className="">Quiz Catelog</h1>
      <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(300px, 1fr))] gap-6">
        {categories.map((category:ICategory) => (
          <HomeCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  )
}