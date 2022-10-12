import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

// const quizContext = createContext([]);

const Main = () => {
  // console.log(quizData.data);

  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
