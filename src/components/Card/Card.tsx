"use client";
import Image from "next/image";
import React from "react";
import arrow from "@/images/arrow.png";
import { useRouter } from "next/navigation";
type CardProps = {
    title : string,
    description : string,
    bgColor : string,
    path? : string,
    textColor? : string
};

const Card = ({ title, bgColor, description,textColor,path }: CardProps) => {

    const router = useRouter();

  return (
    <div
      className={`bg-[${bgColor}] justify-between font-epilogue rounded-2xl p-10 flex flex-col text-[${textColor}] gap-5 w-96 h-full  `}
      style={{ backgroundColor: `${bgColor}` }}
    >
      <p className="text-white w-1/2">{description}</p>
      <div className="flex justify-between items-center w-1/2">
        <h1 className="text-5xl">{title}</h1>
          <button
            className={`bg-[${bgColor} w-16 h-16 block outline-none border-none]`}
            onClick={() => {
                router.push(path || "");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 209 214"
              fill="none"
            >
              <path
                d="M143.062 143.062C123.122 163.003 90.878 163.003 70.9376 143.062C50.9972 123.122 50.9972 90.878 70.9376 70.9376C90.878 50.9971 123.122 50.9971 143.062 70.9376C163.003 90.878 163.003 123.122 143.062 143.062ZM75.1802 75.1802C57.5732 92.7872 57.5732 121.213 75.1802 138.82C92.7872 156.427 121.213 156.427 138.82 138.82C156.427 121.213 156.427 92.7872 138.82 75.1802C121.213 57.5732 92.7872 57.5732 75.1802 75.1802Z"
                fill="white"
              />
              <path
                d="M126.94 126.94L85.7868 126.94L85.7868 121.001L121.001 121.001L121.001 85.7868H126.94L126.94 126.94Z"
                fill="white"
              />
              <path
                d="M85.7868 90.0294L90.0294 85.7868L126.092 121.849L121.849 126.092L85.7868 90.0294Z"
                fill="white"
              />
            </svg>
          </button>
      </div>
    </div>
  );
};

export default Card;
