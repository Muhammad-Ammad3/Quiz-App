import React from "react";

const QuestionCard = ({ data, onAnswer, showFeedback }) => {
  const { question, options, answer } = data;

  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-xl border border-gray-700">
      <p className="text-gray-300">{question}</p>
      <div className="grid gap-3">
        {options.map((option, index) => (
          <button
            key={index}
            className="text-left px-4 py-3 cursor-pointer bg-blue-800 rounded-lg text-white"
            onClick={() => onAnswer(option)}
            disabled={showFeedback}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
