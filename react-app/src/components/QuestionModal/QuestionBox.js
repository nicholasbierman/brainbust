import React, { useState, useEffect  } from "react";
import * as questionActions from "../../store/question";
import { useDispatch, useSelector } from "react-redux";
import "./QuestionBox.css";

function QuestionBox(quiz) {
    const quizId = quiz
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);



    const handleSubmit = (e) => {
      e.preventDefault();
      setErrors([]);
      dispatch(questionActions.addQuestion({question_body, answer_1, answer_2, answer_3, correct_answer}))
    }

    return (
      <div className="question-container">
        <h1>Log In</h1>
        <form className="question-form" onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
            <input
              placeholder="QuestionHere"
              type="text"
              value={question_body}
              onChange={(e) => setBody(e.target.value)}
              required
            />
            <input
              placeholder="Answer1"
              type="text"
              value={answer_1}
              onChange={(e) => setAnswer_1(e.target.value)}
              required
            />
            <input
              placeholder="Answer2"
              type="text"
              value={answer_2}
              onChange={(e) => setAnswer_2(e.target.value)}
              required
            />
            <input
              placeholder="Answer3"
              type="text"
              value={answer_3}
              onChange={(e) => setAnswer_3(e.target.value)}
              required
            />
            <input
              placeholder="CorrectAnswer"
              type="text"
              value={correct_answer}
              onChange={(e) => setAnswer_3(e.target.value)}
              required
            />
          <button type="submit">Add Question</button>
        </form>
      </div>
    );
  }

  export default QuestionBox;
