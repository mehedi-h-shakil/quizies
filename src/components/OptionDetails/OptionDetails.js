import React from "react";

const OptionDetails = ({ name, option, answerMatch }) => {
  return (
    <div className="border-2 border-green-500 rounded-lg m-4 p-5 text-left hover:bg-slate-200">
      <label>
        <input
          className="mx-2"
          onClick={() => answerMatch(option)}
          type="radio"
          name={name}
          value={option}
        />
        {option}
      </label>
    </div>
  );
};

export default OptionDetails;
