import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";

const Topics = () => {
  const quizTopics = useLoaderData();
  return (
    <div className="flex gap-5 justify-center mt-40">
      {quizTopics.data.map((quiz) => (
        <Topic key={quiz.id} quiz={quiz}></Topic>
      ))}
    </div>
  );
};

export default Topics;
