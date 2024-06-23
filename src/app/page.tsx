"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { cardData } from "../utils/animationroutes";
import { useAuth } from "@/context/AuthContext";
import signInWithGoogle from "@/utils/GoogleSignIn";
import Card from "@/components/Card/Card";

export default function Home() {
  const [word, setWord] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const { currentUser } = useAuth();

  const router = useRouter();

  // const [animationType, setAnimationType] = useState("swipe");

  const handleAnimate = (animationType: string) => {
    router.push(`/${animationType}`);
  };

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 100000); // Reset after animation ends
  };

  return (
  
    <div className="bg-black pb-10">
      <div className=" font-climate_crisis w-full h-screen flex flex-col h-full items-center justify-center text-white text-7xl">
        <h1>Animate </h1>
        <h1>Your</h1>
        <h1>Text</h1>
        <button
          className="border-4 border-white rounded-full text-lg p-4 mt-5 px-14
          hover:bg-white hover:text-black transition-all duration-500 
          "
          onClick={() => {
            if (currentUser) {
              router.push("/dashboard");
            } else {
              signInWithGoogle();
              router.push("/dashboard");
            }
          }}
        >
          get started
        </button>
      </div>
      <div className="h-screen w-9/12 mx-auto flex flex-col justify-center">
        <div>
          <button className="bg-[#D298FF] text-black rounded-full text-lg p-4 mt-5 px-20 font-epilogue tracking-wider font-bold">
            websites
          </button>
        </div>
        <div className="w-full flex justify-end">
          <button className="bg-[#B2FFB0] block text-black rounded-full text-lg p-4 mt-5 px-20 font-epilogue tracking-wider font-semibold">
            videos & visualisations
          </button>
        </div>
        <div className="w-full flex justify-between mt-6 items-end">
          <h1 className="whitespace-break-spaces text-white text-5xl">
            {"Why\nuse\nAnimations?"}
          </h1>
          <button className="bg-[#B0FFFF] block text-black rounded-full text-lg h-14  mt-5 px-14 font-epilogue tracking-wider font-semibold">
            art
          </button>
        </div>
        <div>
          <button className="bg-[#F9FFB0] text-black rounded-full text-lg p-4  px-20 font-epilogue tracking-wider mt-10 font-semibold">
            advertisements
          </button>
        </div>
      </div>
      <div className="h-fit w-[70%] mx-auto bg-white rounded-3xl px-16 py-10 h-11/12 ">
        <div className="w-full">
          <h1 className="text-5xl mt-4 text-center">{"Try it out yourself"}</h1>
          {/* <h1 className="text-5xl mt-4">{"Animation"}</h1> */}
        </div>
        <div className="w-full flex justify-center mt-10">
          <input
          type="text"
          // value={inputValue}
          // onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter text here..."
          className="w-full max-w-md px-4 py-2 text-lg border-2 border-gray-300 rounded-full focus:outline-none focus:border-blue-500 transition-colors duration-300"
        />
        </div>
        <div className="grid grid-cols-2 gap-16 mt-8 px-10">
          {cardData.map((card, index) => {
            return (
              <Card
                key={index}
                title={card.title}
                bgColor={card.bgColor}
                description={card.description}
                path={card.path}
                setIsAnimating={setIsAnimating}
                isAnimating={isAnimating}
              />
            );
          })}
          <button onClick={handleClick}>
            <h1 className="text-5xl mt-4">{"Animate"}</h1>
          </button>
        </div>
      </div>
    </div>
  );
}
