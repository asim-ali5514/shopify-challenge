import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Configuration, OpenAIApi } from "openai";
import { json } from "stream/consumers";
import React, { useState, useEffect } from "react";
import { Response } from "../components/Response";
const Home = () => {
  const key = "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";
  const link = "https://api.openai.com/v1/engines/text-curie-001/completions";

  const configuration = new Configuration({
    apiKey: "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",
  });
  const [prompt, setprompt] = useState("");
  const [answers, setanswers] = useState<
    { question: string; answer: string }[]
  >([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await openai.createCompletion("text-curie-001", {
  //         prompt: "Say this is a test",
  //         max_tokens: 5,
  //         temperature: 1,
  //         top_p: 1,
  //         n: 1,
  //         stream: false,
  //         logprobs: null,
  //         stop: "\n",
  //       });
  //       console.log(response);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //     fetchData();
  //   }
  // }, []);
  const openai = new OpenAIApi(configuration);

  return (
    <>
      <div className="font-Space-Mono justify-center h-screen dark:bg-slate-800 bg-slate-300 transition duration-300 p-10 flex flex-col items-center ">
        <Navbar />
        <div className="flex gap-4 flex-col pt-16 w-full max-w-[900px] items-center">
          <h3 className="text-3xl dark:text-white text-black">Enter Prompt</h3>
          <textarea
            className="w-full resize-none h-72   max-w-[900px] dark:bg-slate-400 dark:text-white p-3 outline-none dark:border-transparent border-black border-2 rounded-lg bg-slate-200"
            onChange={({ target: { value } }) => {
              setprompt(value);
            }}
          />
          <button
            className="h-16  w-40 dark:text-white text-black dark:bg-slate-400 rounded-lg dark:hover:bg-slate-500 transition duration-300 hover:bg-slate-400"
            onClick={async () => {
              const response = await openai.createCompletion("text-curie-001", {
                prompt: prompt,
                temperature: 0.5,
                max_tokens: 64,
                top_p: 1.0,
                frequency_penalty: 0.0,
                presence_penalty: 0.0,
              });

              setanswers([
                //@ts-ignore
                ...answers,

                {
                  question: prompt,
                  //@ts-ignore
                  answer: response.data.choices[0].text ?? "No Answer provided",
                },
              ]);
            }}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="">
        <h1 className="text-4xl   m-auto flex justify-center w-full dark:bg-slate-800 bg-slate-300 dark:text-white text-black">
          Responses:
        </h1>

        <div className="flex flex-col pb-20 gap-5 pt-5 justify-center items-center dark:bg-slate-800 bg-slate-300  ">
          {answers.map(({ answer, question }) => (
            <Response key={1} answer={answer} question={question}></Response>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
