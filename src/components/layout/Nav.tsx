"use client";
import NavList from "@/constants/NavList";
import { useAuth } from "@/context/AuthContext";
import signInWithGoogle from "@/utils/GoogleSignIn";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  const { currentUser, signOut } = useAuth();
  const handleSignIn = () => {
    signInWithGoogle();
  };

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <nav
        className="flex justify-between items-center h-20 bg-black shadow-sm px-5 md:px-12
      fixed top-0 w-full z-50"
      >
        <div className="relative w-32 md:w-44 h-10 flex justify-center items-center">
          <Image
            src={"/next.svg"}
            alt="logo"
            fill={true}
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <div className="flex justify-between items-center gap-6 md:gap-12">
          {NavList.map((item, index) => (
            <Link
              href={item.path}
              key={index}
              className="font-normal text-sm md:text-base text-white hover:text-gray-300 transition-all duration-500"
            >
              {item.name}
            </Link>
          ))}
          {currentUser ? (
            <button
              className="border-2 border-white rounded-full text-lg py-2 px-5 flex justify-center items-center gap-2"
              onClick={() => {
                signOut();
              }}
            >
              <Image
                src={`${currentUser?.photoURL}`}
                alt="logo"
                width={20}
                height={20}
                className="rounded-full"
              />
              <span className="font-normal text-sm md:text-base text-white font-epilogue hover:text-gray-300 transition-all duration-500 ">
                Sign Out
              </span>
            </button>
          ) : (
            <button
              className="border-2 border-white rounded-full text-lg py-2 px-5 flex justify-center items-center gap-2"
              onClick={() => {
                handleSignIn();
              }}
            >
              <Image src={"/google.svg"} alt="logo" width={20} height={20} />
              <span className="font-normal text-sm md:text-base text-white font-epilogue hover:text-gray-300 transition-all duration-500 ">
                Sign In
              </span>
            </button>
          )}

          <div
            className="md:hidden w-8 h-full flex flex-col justify-center items-center gap-[6px]
             cursor-pointer
            "
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`w-7 h-[2px] bg-black block transition-all duration-500
              ${isOpen ? "rotate-45 translate-y-2" : ""}
              `}
            ></span>
            <span
              className={`w-7 h-[2px] bg-black block transition-all duration-500
              ${isOpen ? "translate-x-44 " : "translate-x-0"}
              `}
            ></span>
            <span
              className={`w-7 h-[2px] bg-black block transition-all duration-500
              ${isOpen ? "-rotate-45 -translate-y-2" : ""}
              `}
            ></span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
