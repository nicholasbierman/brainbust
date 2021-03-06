import React, { useState } from "react";
import * as quizActions from "../../store/quiz";
import { useDispatch } from "react-redux";
import "./QuestionBox.css";

function QuestionBox({onClose}) {
    const dispatch = useDispatch();
    const [question_body, setQuestionBody] = useState("");
    const [answer_1, setAnswer1] = useState("");
    const [answer_2, setAnswer2] = useState("");
    const [answer_3, setAnswer3] = useState("");
    const [correct_answer, setCorrectAnswer] = useState("");
    const [errors, setErrors] = useState([]);


    const handleSubmit = (e) => {
      e.preventDefault();
      setErrors([]);
      dispatch(quizActions.addQuestions({question_body, answer_1, answer_2, answer_3, correct_answer}));
      onClose();
    }

    return (
      <div className="question-container">
        <h1>Add Question Here</h1>
        <form className="question-form">
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
            <input
              placeholder="Type your Question here!"
              type="text"
              value={question_body}
              onChange={(e) => setQuestionBody(e.target.value)}
              required
            />
            <input
              placeholder="First incorrect answer"
              type="text"
              value={answer_1}
              onChange={(e) => setAnswer1(e.target.value)}
              required
            />
            <input
              placeholder="Second incorrect answer"
              type="text"
              value={answer_2}
              onChange={(e) => setAnswer2(e.target.value)}
              required
            />
            <input
              placeholder="Third incorrect answer"
              type="text"
              value={answer_3}
              onChange={(e) => setAnswer3(e.target.value)}
              required
            />
            <input
              placeholder="Put the correct answer here!"
              type="text"
              value={correct_answer}
              onChange={(e) => setCorrectAnswer(e.target.value)}
              required
            />
          <button onClick = {handleSubmit}>Add Question</button>
        </form>
      </div>
    );
  }

  export default QuestionBox;
