import React from "react";

const QuestionCard = ({ data, onAnswer, showFeedback, selected }) => {
  const { question, options, answer } = data;
  const getButtonStyle = (option) => {
    if (!showFeedback){
        return "bg-indigo-700 hover:bg-indigo-600 hover:scale-[1.01]";
    } 
    if (option === answer) return "bg-emerald-600";
    if (option === selected) return "bg-rose-600";
    return "bg-gray-600";
  };

  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-xl border border-gray-700">
      <p className="text-gray-300">{question}</p>
      <div className="grid gap-3">
        {options.map((option, index) => (
          <button
            key={index}
            className={`${getButtonStyle(option)} text-left px-4 py-3 cursor-pointer rounded-lg text-white`}
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
