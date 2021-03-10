import React, { useEffect } from "react";
import { useDispatch } from "react-redux"
import { getQuizzes, clearScore } from "../../store/quiz"
import { getQuestions } from "../../store/question";
import { useHistory } from "react-router-dom";

const QuizzesAll = ({ quizzes }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    // const quizzes = useSelector(state => {
    //     return state.quizzes.quizList
    // })

    useEffect(()=> {
        dispatch(getQuizzes())
    },[dispatch])

  const directUserToQuiz = (quizId) => {
    dispatch(clearScore());
    dispatch(getQuestions(quizId));
    history.push(`/quiz/${quizId}`);
    };

    return (
      <>
        {quizzes.length > 0 && quizzes.map((quiz) => {
          return (
            <div key={quiz.id} className="quiz-block">
              <div>{quiz.name}</div>
              <div className="quiz-block-category-display"><h4>Category:</h4>{quiz.category_name}</div>
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
