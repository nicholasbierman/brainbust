import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { getQuizzes } from "../../store/quiz"
import { getQuestions } from "../../store/question";
import { useHistory } from "react-router-dom";

const QuizzesAll = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const quizzes = useSelector(state => {
        return state.quizzes.quizList
    })

    useEffect(()=> {
        dispatch(getQuizzes())
    },[dispatch])

    const directUserToQuiz = (quizId) => {
      dispatch(getQuestions(quizId));
      history.push(`/quiz/${quizId}`);
    };

    return (
      <>
        {quizzes.map((quiz) => {
          return (
            <div key={quiz.id} className="quiz-block">
              <div>{quiz.name}</div>
              <div>{quiz.category}</div>
              <div className="profile-button-container">
                <button
                    className="take-quiz-button"
                    onClick={() => directUserToQuiz(quiz.id)}
                >
                    Take Quiz
                </button>
              </div>
            </div>
          );
        })}
      </>
    );
}

export default QuizzesAll;