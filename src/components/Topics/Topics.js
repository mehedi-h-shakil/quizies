import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";

const Topics = () => {
  const quizTopics = useLoaderData();
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-5 w-9/12 mx-auto mt-40">
      {quizTopics.data.map((quiz) => (
        <Topic key={quiz.id} quiz={quiz}></Topic>
      ))}
    </div>
  );
};

export default Topics;
