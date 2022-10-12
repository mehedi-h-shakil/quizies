import React from "react";
import { toast } from "react-toastify";
import OptionDetails from "../OptionDetails/OptionDetails";
import { EyeIcon } from "@heroicons/react/24/solid";

const AllQuiz = ({ qs }) => {
  const { question, options, correctAnswer } = qs;
  //   console.log(question);
  const answerMatch = (option) => {
    if (option === correctAnswer) {
      toast.success("Correct Answer", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      toast.error("Wrong Answer", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div className="border-2 drop-shadow-lg mb-10 lg:w-3/6 sm:w-full  h-full mx-auto">
      <div className="flex justify-between">
        <h2 className="p-5 text-2xl ">{question.slice(3, -4)}</h2>
        <div className="p-5">
          <EyeIcon
            onClick={() => toast.success(correctAnswer)}
            className="h-6 w-6 text-primary"
          ></EyeIcon>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1">
        {options.map((option) => (
          <OptionDetails
            option={option}
            question={question}
            answerMatch={answerMatch}
          ></OptionDetails>
        ))}
      </div>
    </div>
  );
};

export default AllQuiz;
