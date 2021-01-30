import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom"
import { getQuestions } from "../../store/question";

const QuizForm = ({ amountOfQuestions }) => {
    const history = useHistory();
    const { id } = useParams();
    const dispatch = useDispatch();
    const questions = useSelector((state) => state.questions.ques);
    // console.log("first length", questions.length)
    const [index, setIndex] = useState(0)
    // const [question, setQuestion] = useState([]);
    // const [question, setQuestion] = useState(questions[0]);

    // console.log("second length", questions.length);
    // console.log("QUESTIONS", questions)
    // console.log(question)
    const [question, setQuestion] = useState({});

    useEffect(() => {
      console.log(id)
      dispatch(getQuestions(id));
    //   setQuestion(questions[0])
    }, []);

    useEffect(() => {
      setQuestion(questions[0]);
    }, [questions]);

    useEffect(()=> {
        setQuestion(questions[index])
    },[index])

    let array;
    if(question) {
        array = [
        "answer_1", 
        "answer_2", 
        "answer_3", 
        "correct_answer"
    ].map((k) => question[k]);
    }

    const randomAnswer = () => {
        const randomNumber = Math.floor(Math.random() * array.length)
        return array.splice(randomNumber, 1)
    }
    // console.log(randomAnswer());
    // console.log(randomAnswer());
    // console.log(randomAnswer());
    // console.log(randomAnswer());

    
    const handleClick = (e) => {
        console.log(questions)
        if(questions.length) {
            setIndex(index + 1)
            // setQuestion(questions[index]);
        } else {
            setQuestion(null)
        }
    }

  return (
    <div className="quiz-form-container">
      <p>{question ? `${question.question_number} / ${amountOfQuestions}` : ""}</p>
      <div className="quiz-form__question">
        <h1>{question ? question.question_body : "Your Score Is"}</h1>
      </div>
      {!question && <button onClick={() => history.push("/profile")}>Back To Some Quizzes</button>}
      {question && (
      <div className="quiz-button-container">
        <button onClick={handleClick}>{randomAnswer()}</button>
        <button onClick={handleClick}>{randomAnswer()}</button>
        <button onClick={handleClick}>{randomAnswer()}</button>
        <button onClick={handleClick}>{randomAnswer()}</button>
      </div>
      )}
    </div>
  );
};

export default QuizForm;
