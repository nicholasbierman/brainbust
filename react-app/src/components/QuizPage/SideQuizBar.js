import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SideQuizBar = () => {
  const currentQuiz = useSelector((state) => state.quizzes.currentQuiz);
  const [average, setAverage] = useState(null);

  useEffect(() => {
    setAverage((currentQuiz.score / currentQuiz.totalQuestions) * 100);
  }, [currentQuiz]);

  const style = {
    height: `${average}%`
  }

  return (
    <div className="score-container">
      <h1>Your Score:</h1>
        <h2>{currentQuiz.score}</h2>
      <div className="score-meter-outter">
        <div className={average <= 40 ? "score-meter low" : average === 100 ? "score-meter full" : "score-meter"} style={style}>
        </div>
      </div>
    </div>
  )
};

export default SideQuizBar;