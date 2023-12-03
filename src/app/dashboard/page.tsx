"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import React from "react";

const Dashboard = () => {

  return (
    <>
        <main
        className="py-20 px-10 bg-black min-h-screen text-white"
        >   
            <h1
            className="text-4xl font-bold mt-3"
            >
                Dashboard
            </h1>
        </main>
    </>
  );
};

export default Dashboard;
