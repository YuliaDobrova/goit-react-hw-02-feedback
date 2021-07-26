import React from "react";
import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, leaveFeedback }) => {
  return (
    <div>
      {options.map((option) => (
        <button
          className={styles.feedbackButton}
          key={option}
          type="button"
          name={option}
          onClick={leaveFeedback}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
