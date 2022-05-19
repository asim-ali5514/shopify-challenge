import React from "react";

interface Props {
  question: string;
  answer: string;
}
export const Response: React.FC<Props> = ({ question, answer }) => {
  return (
    <div className="flex flex-col w-auto max-w-[925px] h-auto p-5 bg-slate-400 dark:bg-slate-700 rounded-lg">
      <h3 className="dark:text-white text-black">
        {" "}
        <span className="text-2xl font-medium dark:text-white text-black">
          Prompt
        </span>{" "}
        : {question}
      </h3>
      <h3 className="dark:text-white text-black">
        <span>Reponse</span> : {answer}
      </h3>
    </div>
  );
};
