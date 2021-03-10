import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addSingleQuiz, emptyNewQuestions } from "../../store/quiz";
import QuestionBoxModal from '../QuestionModal/index'
import Search from "./Search"



const SideUserBar = ({ categories }) => {
    const user = useSelector(state => state.session.user);
    const [name, setName] = useState('');
    const [isPrivate, setIsPrivate] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const dispatch = useDispatch();
    const added_questions = useSelector(state => state.quizzes.newQuestions)

    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const data = dispatch(
                addSingleQuiz({
                    name,
                    is_private: isPrivate,
                    category_id: selectedCategory ? parseInt(selectedCategory) : parseInt(categories[0].id),
                    added_questions
                })
        );
        setErrors([]);
        if(data.errors) {
            return setErrors(data.errors)
        } else {
            setName('');
            setIsPrivate(false);
            dispatch(emptyNewQuestions());
        }
    };


    return (
      <div>
        <h1 className="sidebar">Welcome, {user.username}!</h1>
        <Search />
        <div className="new-quiz-form">
          <form onSubmit={handleSubmit}>
            <h1>Create A New Quiz</h1>
            <ul>
              {errors.map((error, i) => (
                <li key={i}>{error}</li>
              ))}
            </ul>
            <label className="new-quiz-form">Name:</label>
            <input
              className="new-quiz"
              name="name"
              type="text"
              placeholder="e.g. Biology 101, Constitutional Law"
              onChange={(e) => setName(e.target.value)}
              value={name}
            ></input>
            <label className="new-quiz-form" htmlFor="category">
              Category:
            </label>
            {categories && (
            <select
              onChange={(e) => setSelectedCategory(e.target.value)}
              name="category"
            >
                {categories.map((category, i) => {
                  return (
                    <option key={i} value={category.id}>
                      {category.name}
                    </option>
                  );
                })}
                </select>
              )}
            <label className="new-quiz-form" htmlFor="is_private">
              Private?
            </label>
            <input
              value={isPrivate}
              onChange={(e) => setIsPrivate(!isPrivate)}
              name="is_private"
              type="checkbox"
              checked={isPrivate}
            ></input>
            <br />
            {added_questions.map((question) => {
              return <div>{question.question_body}</div>;
            })}
            <br />
            <QuestionBoxModal />
            <br />
            <button type="submit">Continue</button>
          </form>
        </div>
      </div>
    );
}

export default SideUserBar;
