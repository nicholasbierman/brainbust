import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./MainPage.css";
import { getCategoryQuizzes, getQuizzes } from "../../store/quiz";

const MainPage = () => {
  const directUserToQuiz = (quizId) => {
    console.log("hello", quizId);
    //use redirect to go to quiz
    //dispatch to set single (current) quiz in global state??
  };
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState();
  const categories = useSelector((state) => state.categories.categories);
  const quizzes = useSelector((state) => state.quizzes.quizList);
  useEffect(() => {
    if (!selectedCategory) {
      dispatch(getQuizzes);
    } else {
      dispatch(getCategoryQuizzes(selectedCategory));
    }
  }, [dispatch, selectedCategory]);
  const handleChange = (e) => {
    const value = e.target.value;
    console.log("VALUE", value);
    !value ? dispatch(getQuizzes()) : setSelectedCategory(value);
  };
  const quizCategories = categories.map((category) => {
    return (
      <option value={category.id} key={category.id}>
        {category.name}
      </option>
    );
  });
  const quizLoad = quizzes.map((quiz) => {
    return (
      <div key={quiz.id} className="quiz-block">
        <div>{quiz.name}</div>
        <div>{quiz.category_name}</div>
        <button
          className="take-quiz-button"
          onClick={() => directUserToQuiz(quiz.id)}>
          Take Quiz
        </button>
      </div>
    );
  });
  return (
    <>
      <h1>BrainBust Main Page</h1>
      <form>
        <select onChange={(e) => handleChange(e)} name="category">
          <option selected disabled hidden>Filter By Category</option>
          {quizCategories}
        </select>
      </form>
      {quizLoad}
    </>
  );
};
export default MainPage;
