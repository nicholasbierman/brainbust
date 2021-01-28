import React from "react";
import { useSelector } from "react-redux"
//Redirect user to quiz
import { Redirect } from "react-router-dom"
//css
import "./ProfilePage.css"

const UserpageBody = () => {
  const quizzes = useSelector(state => state.quizzes.quizList)

  const directUserToQuiz = (quizId) => {
    console.log("hello", quizId)
    //use redirect to go to quiz
    //dispatch to set single (current) quiz in global state??
  }

  return (
    <div className="body-container">
      <nav className="button-container">
        <button className="top-button">About</button>
        <button className="top-button">Decks({quizzes.length})</button>
        <button className="top-button">LeaderBoard</button>
      </nav>
      <div className="quiz-container">
      {quizzes.map(quiz => {
        return (
          <div key={quiz.id} className="quiz-block">
            <div>{quiz.name}</div>
            <div>{quiz.category}</div>
            <button className="take-quiz-button"
            onClick={()=> directUserToQuiz(quiz.id)}>Take Quiz</button>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default UserpageBody;
