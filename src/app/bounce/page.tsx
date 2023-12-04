// Import necessary packages and modules
"use client"
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const BouncyText: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [isBouncing, setIsBouncing] = useState<boolean>(false);

  const springProps = useSpring({
    to: { transform: isBouncing ? "translateY(0)" : "translateY(-20px)" },
    config: { tension: 300, friction: 5 },
    onRest: () => {
      setIsBouncing(false);
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsBouncing(true);
  };

  return (
    <div className="w-full h-screen">
      <h1 className="text-4xl text-center">Bouncy Text</h1>
      <div className="flex w-full h-full">
        <div className="w-1/2 flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center mt-8 w-1/2"
          >
            <label htmlFor="bouncyText" className="mb-2">
              Enter a text
            </label>
            <input
              type="text"
              id="bouncyText"
              value={text}
              onChange={(event) => setText(event.target.value)}
              className="border border-gray-400 rounded-md px-2 py-1 mb-4"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Animate Text
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center w-1/2">
          <animated.div style={springProps}>{text}</animated.div>
        </div>
      </div>
    </div>
  );
};

export default BouncyText;
