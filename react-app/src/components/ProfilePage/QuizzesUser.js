import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserQuizzes } from "../../store/quiz";
import { getQuestions } from "../../store/question";
import { useHistory } from "react-router-dom";

const QuizzesUser = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector(state => {
        return state.session.user
    })
    const quizzes = useSelector(state => {
        return state.quizzes.quizList
    })

    useEffect(()=> {
        dispatch(getUserQuizzes(user.id))
    }, [dispatch])

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
                    onClick={()=> {}}
                  >
                    Edit
                  </button>
                  <button
                    className="take-quiz-button"
                    onClick={() => {}}
                  >
                    Delete
                  </button>
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

export default QuizzesUser;