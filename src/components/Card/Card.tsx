"use client";
import Image from "next/image";
import React from "react";
import arrow from "@/images/arrow.png";
import { useRouter } from "next/navigation";
import 'animate.css';
type CardProps = {
    title : string,
    description : string,
    bgColor : string,
    path? : string,
    textColor? : string
    setIsAnimating? : (value : boolean) => void
    handleClick? : () => void
    isAnimating? : boolean
};

const Card = ({ title, bgColor, description,textColor,path ,isAnimating}: CardProps) => {

  const router = useRouter();

  const animationClassName = `animate__${title}`;
  const className = isAnimating ? `animate__animated ${animationClassName}` : "";
  return (
    <div
      className={`bg-[${bgColor}] justify-between font-epilogue rounded-2xl p-10 flex flex-col text-[${textColor}] gap-5 w-96 h-full  `}
      style={{ backgroundColor: `${bgColor}` }}
    >
      
      <div className="flex justify-between items-center w-1/2">
        <h1 className={`text-5xl ${className} text-white`}>{title}</h1>
          
      </div>
    </div>
  );
};

export default Card;
