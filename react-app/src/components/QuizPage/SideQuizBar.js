import React, { useEffect } from "react";
import { useSelector } from "react-redux";


const SideQuizBar = () => {
  const currentQuiz = useSelector((state) => state.quizzes.currentQuiz);

  return (
    <div className="score-container">
      <h1>Your Score:</h1>
      <h1>{currentQuiz.score}</h1>
    </div>
  )
};

export default SideQuizBar;