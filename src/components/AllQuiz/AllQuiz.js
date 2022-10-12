import React from "react";
import Option from "../Option/Option";

const AllQuiz = ({ qs, handleCorrectAns }) => {
  const { question, options, id, correctAnswer } = qs;
  console.log(qs);
  return (
    <div className="border-2 border-indigo-600 mb-10 w-3/6 h-64 mx-auto">
      <h2 className="p-5 text-2xl">{question.slice(3, -4)}</h2>
      <div className="grid grid-cols-2">
        {options.map((option) => (
          <li
            onClick={() => {
              handleCorrectAns(id, correctAnswer);
            }}
            className="border-2 border-indigo-400 p-2 m-4"
          >
            {option}
          </li>
        ))}
      </div>
    </div>
  );
};

export default AllQuiz;
