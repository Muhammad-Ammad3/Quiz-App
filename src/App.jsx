import React, { useState } from "react";
import QuestionCard from "./component/QuestionCard";
import { questions } from "./data/questions";
import Confetti from "react-confetti";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
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
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setIsFinished(false);
    setShowFeedback(false);
  };

  const calculateProgress = () => {
    if (isFinished) return 100;
    const basedProgress = (currentQuestion / questions.length) * 100;
    const questionProgress = selectedAnswer ? (1 / questions.length) * 100 : 0;
    return basedProgress + questionProgress;
  };

  const percentage = (score / questions.length) * 100;
  const showConfetti = isFinished && percentage > 50;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col p-4 items-center justify-center">
      {showConfetti && <Confetti />}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-purple-600 mb-2">Quiz App</h1>
        <p className="text-gray-400">Test Your Knowledge</p>
      </div>

      <div className="w-full max-w-xl mb-6">
        <div className="bg-gray-700 h-3 rounded-full overflow-hidden">
          <div
            className="h-full bg-linear-to-r from-indigo-600 to-purple-600 duration-500 ease-out tarnsition-all"
            style={{ width: `${calculateProgress()}%` }}
          ></div>
        </div>
      </div>

      {!isFinished ? (
        <>
          <QuestionCard
            showFeedback={showFeedback}
            onAnswer={handleAnswer}
            data={questions[currentQuestion]}
            selected={selectedAnswer}
            current={currentQuestion}
            total={questions.length}
          />
          <div className="mt-6 min-h-15">
            {showFeedback && (
              <button
                className="bg-linear-to-r from-indigo-600 to-purple-600 py-3 px-6 rounded-lg font-medium shadow-lg cursor-pointer"
                onClick={goToNext}
              >
                {currentQuestion + 1 < questions.length
                  ? "Next Question"
                  : "See Results"}
              </button>
            )}
          </div>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Quiz Completed!</h2>
          <p className="text-xl mb-6">
            Your score <span>{score}</span> out of{" "}
            <span className="font-bold">{questions.length}</span> and it is{" "}
            {Math.round((score / questions.length) * 100)}%
          </p>
          <button
            className="bg-linear-to-r from-indigo-600 to-purple-600 py-3 px-6 rounded-lg font-medium shadow-lg cursor-pointer"
            onClick={restartQuiz}
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
