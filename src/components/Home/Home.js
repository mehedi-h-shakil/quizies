import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";

const Home = () => {
  const quizTopic = useLoaderData();

  const handleQuiz = (id) => {
    console.log(id);
  };

  return (
    <div>
      <div className="grid lg:grid-cols-2 mb-20 sm:grid-cols-1 ">
        <div>
          <img
            className="w-3/6 mx-auto"
            src="https://img.freepik.com/premium-vector/quiz-comic-pop-art-style-quiz-brainy-game-word-vector-illustration-design_180786-81.jpg?w=2000"
            alt=""
          />
        </div>
        <div className="flex items-center">
          <h1 className="text-4xl w-96 mx-auto font-semibold text-purple-500">
            You try your know about web development to solve this quizies.
          </h1>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-5 w-9/12 mx-auto">
        {quizTopic.data.map((quiz) => (
          <Topic key={quiz.id} quiz={quiz} handleQuiz={handleQuiz}></Topic>
        ))}
        ;
      </div>
    </div>
  );
};

export default Home;
