import React from "react";
import { toast } from "react-toastify";
import OptionDetails from "../OptionDetails/OptionDetails";

const AllQuiz = ({ qs }) => {
  const { id, question, options, correctAnswer } = qs;
  //   console.log(id);
  const answerMatch = (option) => {
    if (option === correctAnswer) {
      toast.success("Correct Answer");
    } else {
      toast.error("Wrong Answer");
    }
  };

  return (
    <div className="border-2 border-indigo-600 mb-10 lg:w-3/6 sm:w-full  h-full mx-auto bg-slate-200">
      <h2 className="p-5 text-2xl">{question.slice(3, -4)}</h2>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1">
        {options.map((option) => (
          <OptionDetails
            option={option}
            answerMatch={answerMatch}
          ></OptionDetails>
        ))}
      </div>
    </div>
  );
};

export default AllQuiz;
