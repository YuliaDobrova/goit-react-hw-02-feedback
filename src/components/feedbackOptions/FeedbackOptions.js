import React from "react";

const FeedbackOptions = ({ options, leaveFeedback }) => {
  return (
    <div>
      {options.map((option) => (
        <button type="button" name={option} onClick={leaveFeedback}>
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
