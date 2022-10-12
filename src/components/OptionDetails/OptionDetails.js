import React from "react";

const OptionDetails = ({ option, answerMatch }) => {
  return (
    <div className="border-2 border-indigo-400 m-4 p-2 text-left">
      <label>
        <input
          className="mx-2"
          onClick={() => answerMatch(option)}
          type="radio"
          name="answer"
          value={option}
        />
        {option}
      </label>
    </div>
  );
};

export default OptionDetails;
