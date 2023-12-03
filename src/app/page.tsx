"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import animationRoutes from "../../public/animationroutes/animationroutes";

export default function Home() {
  const [word, setWord] = useState("");

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
    <div className="h-screen bg-black">
      <div className="w-full flex flex-col h-full items-center justify-center text-white text-7xl">
        <h1>Animate </h1>
        <h1>Your</h1>
        <h1>Text</h1>
        <button className="border-4 border-white rounded-full text-lg p-4 mt-5 px-14">
          get started 
        </button>
      </div>
    </div>
  );
}
