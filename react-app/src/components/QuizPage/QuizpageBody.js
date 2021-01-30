import React,  { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import QuizForm from "./QuizForm"

import { getQuestions } from "../../store/question"

const QuizpageBody = ({ id }) => {
    const dispatch = useDispatch();

    const quizzes = useSelector(state => state.quizzes.quizList);
    const [ quiz ] = quizzes.filter(theQuiz => {
        return theQuiz.id === parseInt(id)
    })
    

    useEffect(() => {
        dispatch(getQuestions(id))
    },[dispatch])
    
    if(!quiz) return null

    return (
      <>
        <h1>{quiz.name}</h1>
        <div clssName="category-question-container">
            <p>Category: {quiz.category}</p>
        </div>
        <QuizForm amountOfQuestions={quiz.questions}/>
      </>
    );

};

export default QuizpageBody;
