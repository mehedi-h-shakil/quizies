import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";

const Home = () => {
  const quizTopic = useLoaderData();

  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="mb-40">
          <h1>nothing</h1>
        </div>
        <div>
          <h1>nothing</h1>
        </div>
      </div>
      <div className="flex gap-10 justify-center">
        {quizTopic.data.map((quiz) => (
          <Topic key={quiz.id} quiz={quiz}></Topic>
        ))}
        ;
      </div>
    </div>
  );
};

export default Home;
