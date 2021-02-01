import React,  { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import QuizForm from "./QuizForm"

import { getQuestions } from "../../store/question"


const QuizpageBody = ({ id }) => {
    const dispatch = useDispatch();
    const questions = useSelector((state) => state.questions.ques);
    const quizzes = useSelector(state => state.quizzes.quizList);
    const [ quiz ] = quizzes.filter(theQuiz => {
        return theQuiz.id === parseInt(id)
    })
    

    useEffect(() => {
      dispatch(getQuestions(id))
    },[dispatch, id])
    
    if(!quiz) return null

    return (
      <>
        <h1>{quiz.name}</h1>
        <div className="category-question-container">
            <p>Category: {quiz.category}</p>
        </div>
        {questions && <QuizForm amountOfQuestions={quiz.questions} id={id} />}
      </>
    );

};

export default QuizpageBody;
