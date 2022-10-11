import React from "react";

const Topic = ({ quiz, handleQuiz }) => {
  const { id, name, logo, total } = quiz;

  return (
    <div>
      <div className="card w-full bg-gray-300 shadow-xl">
        <figure>
          <img src={logo} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="flex">Questions: {total}</p>
          <div className="card-actions justify-end">
            <button onClick={() => handleQuiz(id)} className="btn btn-primary">
              Start Practice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;
