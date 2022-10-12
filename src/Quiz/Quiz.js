import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllQuiz from "../components/AllQuiz/AllQuiz";

const Quiz = () => {
  const quizData = useLoaderData();
  const { name, questions } = quizData.data;

  return (
    <div className="mb-10">
      <h2 className="text-4xl p-10">Quiz of {name}</h2>
      {questions.map((qs) => (
        <AllQuiz key={qs.id} qs={qs}></AllQuiz>
      ))}
    </div>
  );
};

export default Quiz;
