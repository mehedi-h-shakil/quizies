import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../../Quiz/Quiz";
import Topic from "../Topic/Topic";

const Home = () => {
  const quizTopic = useLoaderData();

  // const [quizData, setQuizData] = useState([]);

  // const handleQuiz = async (id) => {
  //   const res = await fetch(
  //     `https://openapi.programming-hero.com/api/quiz/${id}`
  //   );
  //   const data = await res.json();
  //   console.log(data.data);
  //   setQuizData(data);
  // };

  return (
    <div>
      <div className="hero min-h-96 bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            className="max-w-sm rounded-lg shadow-2xl"
            src="https://img.freepik.com/premium-vector/quiz-comic-pop-art-style-quiz-brainy-game-word-vector-illustration-design_180786-81.jpg?w=2000"
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold">Quizies Here!</h1>
            <p className="py-6">
              Try out our quiz to know to knowledge about the web development.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-5 w-9/12 mx-auto mt-10">
        {quizTopic.data.map((quiz) => (
          <Topic key={quiz.id} quiz={quiz}></Topic>
        ))}
        ;
      </div>
    </div>
  );
};

export default Home;
