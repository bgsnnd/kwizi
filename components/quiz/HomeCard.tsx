import React from "react";
import Image from "next/image";
import { ICategory } from "@/types/types";
import { useRouter } from "next/navigation";

interface Props {
  category: ICategory;
}

const HomeCard = ({ category }: Props) => {

  const router = useRouter();

  return (
    <div className="border-2 rounded-xl p-1 cursor-pointer shadow-[0_.3rem_0_0_rgba(0,0,0,0.1)] 
      hover:-translate-y-1 transition-transform duration-300 ease-in-out"
        onClick={()=> router.push(`/categories/${category.id}`)}
      >
      <div className="rounded-xl h-[9rem] overflow-hidden">
        <Image
          src={category.image ? category.image : `/categories/image--${category.name.toLowerCase().replace(/\s+/g, "-")}.svg`}
          alt={category.name}
          width={300}
          height={200}
          className="h-full w-full rounded-xl"
        />
      </div>
      <div className="p-2 flex flex-col gap-2">
        <h2 className="text-xl font-bold">{category.name}</h2>
        <p className="text-gray-600 text-sm font-semibold">{category.description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
