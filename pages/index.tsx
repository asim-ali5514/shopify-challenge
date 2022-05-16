import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
const Home: NextPage = () => {
  return (
    <>
      <div className="font-Space-Mono h-screen dark:bg-slate-800 bg-slate-300 transition duration-300 p-10 flex flex-col items-center ">
        <Navbar />
        <div className="flex gap-4 flex-col pt-16 w-full max-w-[900px] items-center">
          <h3 className="text-3xl dark:text-white text-black">Enter Prompt</h3>
          <textarea className="w-full max-w-[900px] dark:bg-slate-400 dark:text-white p-3 outline-none dark:border-transparent border-black border-2 rounded-lg bg-slate-200"></textarea>
          <button className="h-16  w-40 dark:text-white text-black dark:bg-slate-400 rounded-lg dark:hover:bg-slate-500 transition duration-300 hover:bg-slate-400">
            Submit
          </button>
        </div>
        <div>
          <h1 className="text-4xl pt-14 dark:text-white text-black">
            Responses
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
