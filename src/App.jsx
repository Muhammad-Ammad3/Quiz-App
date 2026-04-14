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
    if(currentQuestion + 1 < questions.length) {
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col p-4 items-center justify-center">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-purple-600 mb-2">Quiz App</h1>
        <p className="text-gray-400">Test Your Knowledge</p>
      </div>
      <p>Score: {score}</p>
      <QuestionCard showFeedback={showFeedback} onAnswer={handleAnswer} data={questions[currentQuestion]} />
    </div>
  );
};

export default App;

// import React, { useState } from "react";
// import QuestionCard from "./component/QuestionCard";
// import { questions } from "./data/questions";

// const App = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [score, setScore] = useState(0);
//   const [isFinished, setIsFinished] = useState(false);
//   const [showFeedback, setShowFeedback] = useState(false);

//   const handleAnswer = (option) => {
//     if (showFeedback) return;

//     setSelectedAnswer(option);
//     setShowFeedback(true);

//     if (option === questions[currentQuestion].answer) {
//       setScore((prev) => prev + 1);
//     }
//   };

//   const handleNext = () => {
//     setSelectedAnswer(null);
//     setShowFeedback(false);

//     if (currentQuestion + 1 < questions.length) {
//       setCurrentQuestion((prev) => prev + 1);
//     } else {
//       setIsFinished(true);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex flex-col p-4 items-center justify-center">
//       <div className="text-center mb-8">
//         <h1 className="text-4xl font-bold text-purple-600 mb-2">
//           Quiz App
//         </h1>
//         <p className="text-gray-400">Test Your Knowledge</p>
//       </div>

//       {isFinished ? (
//         <div className="text-center">
//           <h2 className="text-2xl font-bold mb-4">Quiz Finished 🎉</h2>
//           <p className="text-xl">
//             Your Score: {score} / {questions.length}
//           </p>
//         </div>
//       ) : (
//         <>
//           <p className="mb-4">
//             Score: {score} | Question {currentQuestion + 1} / {questions.length}
//           </p>

//           <QuestionCard
//             data={questions[currentQuestion]}
//             onAnswer={handleAnswer}
//             selectedAnswer={selectedAnswer}
//             showFeedback={showFeedback}
//           />

//           {showFeedback && (
//             <button
//               onClick={handleNext}
//               className="mt-6 px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-700"
//             >
//               Next Question
//             </button>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default App;