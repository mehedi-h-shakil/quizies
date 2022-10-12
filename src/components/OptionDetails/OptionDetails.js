import React from "react";

const OptionDetails = ({ option, answerMatch }) => {
  return (
    <div>
      <label>
        <input
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
