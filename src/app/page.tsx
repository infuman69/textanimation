"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { cardData } from "../utils/animationroutes";
import { useAuth } from "@/context/AuthContext";
import signInWithGoogle from "@/utils/GoogleSignIn";
import Card from "@/components/Card/Card";

export default function Home() {
  const [word, setWord] = useState("");

  const { currentUser } = useAuth();

  const router = useRouter();

  // const [animationType, setAnimationType] = useState("swipe");

  const handleAnimate = (animationType: string) => {
    router.push(`/${animationType}`);
  };

  return (
    // <div className="flex flex-col items-center justify-center min-h-screen">
    //   <div className="mb-4">
    //     <h1>Animation Menu</h1>
    //   </div>
    //   <div className="mb-4">
    //     <span className="block text-gray-700 font-bold mb-2">
    //       Animation Type:
    //     </span>
    //     <div className="flex items-center gap-6">
    //       {animationRoutes.map((route, index) => {
    //         return (
    //           <button
    //             key={index}
    //             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    //             onClick={() => handleAnimate(route)}
    //           >
    //             {route}
    //           </button>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </div>
    <div className="bg-black pb-10">
      <div className="w-full h-screen flex flex-col h-full items-center justify-center text-white text-7xl">
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
          <h1 className="text-5xl mt-4">{"Explore"}</h1>
          <h1 className="text-5xl mt-4">{"Animation"}</h1>
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
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
