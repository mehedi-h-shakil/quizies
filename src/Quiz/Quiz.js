import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllQuiz from "../components/AllQuiz/AllQuiz";

const Quiz = () => {
  const quizData = useLoaderData();
  const { id, name, questions } = quizData.data;
  console.log(quizData.data);

  const [answer, setAnswer] = useState([]);

  const handleCorrectAns = (id, correctAnswer) => {
    setAnswer(correctAnswer);
  };

  console.log(answer);

  return (
    <div>
      <h2 className="text-4xl p-10">Quiz of {name}</h2>
      {questions.map((qs) => (
        <AllQuiz
          key={qs.id}
          qs={qs}
          handleCorrectAns={handleCorrectAns}
        ></AllQuiz>
      ))}
    </div>
  );
};

export default Quiz;
