import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import QuizzesAll from "./QuizzesAll"
import QuizzesUser from "./QuizzesUser"
import "./ProfilePage.css"
import { getQuizzes } from '../../store/quiz'

const UserpageBody = () => {
  const quizzes = useSelector(state => state.quizzes.quizList);
  const [displayQuizzes, setDisplayQuizzes] = useState("All")
  const dispatch = useDispatch()

  let display;
  if (displayQuizzes === "User") {
    display = <QuizzesUser />;
  } else {
    display = <QuizzesAll />
  }

  const handleClick = () => {
    dispatch(getQuizzes())
    setDisplayQuizzes("All")
  }
  
  return (
    <div className="body-container">
      <nav className="button-container">
        <button className="top-button"
        onClick={()=> setDisplayQuizzes("User")}>My Quizzes</button>
        <button className="top-button"
        onClick={handleClick}>Quizzes({quizzes.length})</button>
        <button className="top-button">LeaderBoard</button>
      </nav>
      <div className="quiz-container">
        {display && display}
      </div>
    </div>
  );
};

export default UserpageBody;
