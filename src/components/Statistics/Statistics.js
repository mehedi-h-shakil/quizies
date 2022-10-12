import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const [quizs, setQuizs] = useState([]);

  useEffect(() => {
    axios.get("https://openapi.programming-hero.com/api/quiz").then((data) => {
      const quizLoaded = data.data.data;
      // console.log(quizLoaded);
      const quizData = quizLoaded.map((quiz) => {
        //   console.log(quiz);
        const singleQuiz = {
          name: quiz.name,
          totalQuiz: quiz.total,
        };
        return singleQuiz;
      });
      // console.log(quizData);
      setQuizs(quizData);
    });
  }, []);

  return (
    <div className="mt-48 flex justify-center items-center">
      <ResponsiveContainer width="80%" height={500}>
        <LineChart width={400} height={400} data={quizs}>
          <Line type="monotone" dataKey="totalQuiz" stroke="#8884d8" />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
