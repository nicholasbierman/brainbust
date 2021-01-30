import React from "react";
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { getQuestions } from "../../store/question";
//Redirect user to quiz
// import { Redirect } from "react-router-dom"
//css
import "./ProfilePage.css"

const UserpageBody = () => {
  const quizzes = useSelector(state => state.quizzes.quizList);
  const history = useHistory();
  const dispatch = useDispatch()

  // console.log("hello", quizId)
  //   dispatch(getQuestions(id))
  //   return history.push(`/quiz/${quizId}`
  const directUserToQuiz = (quizId) => {
    dispatch(getQuestions(quizId))
    history.push(`/quiz/${quizId}`)
  }

  return (
    <div className="body-container">
      <nav className="button-container">
        <button className="top-button">About</button>
        <button className="top-button">Quizzes({quizzes.length})</button>
        <button className="top-button">LeaderBoard</button>
      </nav>
      <div className="quiz-container">
      {quizzes.map(quiz => {
        return (
          <div key={quiz.id} className="quiz-block">
            <div>{quiz.name}</div>
            <div>{quiz.category}</div>
            <button className="take-quiz-button"
            onClick={() => directUserToQuiz(quiz.id)}>Take Quiz</button>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default UserpageBody;
