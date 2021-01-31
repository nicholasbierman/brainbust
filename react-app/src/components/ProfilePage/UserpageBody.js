import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import QuizzesAll from "./QuizzesAll"
import QuizzesUser from "./QuizzesUser"
//Redirect user to quiz
// import { Redirect } from "react-router-dom"
//css
import "./ProfilePage.css"

const UserpageBody = () => {
  const quizzes = useSelector(state => state.quizzes.quizList);
  // const history = useHistory();
  // const dispatch = useDispatch()
  const [displayQuizzes, setDisplayQuizzes] = useState("All")

  let display;
  if(displayQuizzes === "All") {
    console.log(typeof displayQuizzes)
    display = <QuizzesAll />
  } else if(displayQuizzes === "User") {
    console.log(displayQuizzes)
    display = <QuizzesUser />;
  }

  return (
    <div className="body-container">
      <nav className="button-container">
        <button className="top-button"
        onClick={()=> setDisplayQuizzes("User")}>My Quizzes</button>
        <button className="top-button"
        onClick={()=> setDisplayQuizzes("All")}>Quizzes({quizzes.length})</button>
        <button className="top-button">LeaderBoard</button>
      </nav>
      <div className="quiz-container">
        {display && display}
      </div>
    </div>
  );
};

export default UserpageBody;
