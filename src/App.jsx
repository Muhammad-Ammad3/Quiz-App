import React, { useState } from "react";
import QuestionCard from "./component/QuestionCard";
import { questions } from "./data/questions";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [first, setFirst] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleAnswer = (option) => {
    if (showFeedback) return;

    setSelectedAnswer(option);
    setShowFeedback(true);

    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const goToNext = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setIsFinished(true);
    }
  }; 

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col p-4 items-center justify-center">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-purple-600 mb-2">Quiz App</h1>
        <p className="text-gray-400">Test Your Knowledge</p>
      </div>
      <QuestionCard showFeedback={showFeedback} onAnswer={handleAnswer} data={questions[currentQuestion]} selected={selectedAnswer} />
      <div>
        {showFeedback && (
          <button onClick={goToNext}>
            {currentQuestion + 1 < questions.length ? "Next Question" : "See Results"}
          </button>
        )}
      </div>
    </div>
  );
};

export default App;