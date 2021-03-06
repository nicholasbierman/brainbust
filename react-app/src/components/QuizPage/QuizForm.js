import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom"
import { getQuestions } from "../../store/question";
import { updateScore } from "../../store/quiz";
import "./QuizPage.css"

const QuizForm = ({ amountOfQuestions }) => {
    const history = useHistory();
    const { id } = useParams();
    const dispatch = useDispatch();
    const questions = useSelector((state) => state.questions.ques);
    const currentQuiz = useSelector(state => state.quizzes.currentQuiz)
    const [index, setIndex] = useState(0)
    const [question, setQuestion] = useState({});

    useEffect(() => {
      dispatch(getQuestions(id));
    }, [id, dispatch]);

    useEffect(() => {
      setQuestion(questions[0]);
    }, [questions]);

    useEffect(()=> {
        setQuestion(questions[index])
    },[index, dispatch, questions])

    let answers = {};
    if (question) {
        answers = {
          answer_1: question["answer_1"],
          answer_2: question["answer_2"],
          answer_3: question["answer_3"],
          correct_answer: question["correct_answer"],
        };
    }

    let randomAnswerObj = { 1: null, 2: null, 3: null, 4: null };
    const randomize = (answerObj, answer) => {
      let randomChoice = Math.floor(Math.random() * 4) + 1;
      if (!answerObj[randomChoice]) {
        answerObj[randomChoice] = answer;
      } else {
        randomize(answerObj, answer);
      }
    };

    for (let answer in answers) {
      randomize(randomAnswerObj, { [answer]: answers[answer] });
    }

    const handleClick = (choice) => {
        if (randomAnswerObj[choice]["correct_answer"]) {
          dispatch(updateScore(currentQuiz.score + 1, questions.length))
        }
        if(questions.length) {
            setIndex(index + 1)
        } else {
            setQuestion(null)
        }
    }

  return (
    <div className="quiz-form-container">
      <p>{question ? `${question.question_number} / ${amountOfQuestions}` : ""}</p>
      <div className="quiz-form__question">
        <h1>{question ? question.question_body : `Your Score Is: ${currentQuiz.score}`}</h1>
      </div>
      {!question && <button onClick={() => history.push("/profile")}>Back To Some Quizzes</button>}
      {question && (
      <div className="quiz-button-container">
          <button className="quiz-button__quizform" onClick={() => {
            handleClick(1)
          }}>
          {Object.values(randomAnswerObj[1])[0]}
        </button>
        <button className="quiz-button__quizform" onClick={() => {
            handleClick(2)
          }}>
          {Object.values(randomAnswerObj[2])[0]}
        </button>
        <button className="quiz-button__quizform" onClick={() => {
            handleClick(3)
          }}>
          {Object.values(randomAnswerObj[3])[0]}
        </button>
        <button className="quiz-button__quizform" onClick={() => {
            handleClick(4)
          }}>
          {Object.values(randomAnswerObj[4])[0]}
        </button>
      </div>
      )}
    </div>
  );
};

export default QuizForm;
