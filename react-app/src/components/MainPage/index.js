// import React, {useEffect} from "react";
// import { useSelector }from "react-redux"
// import { useHistory } from "react-router-dom"
import "./MainPage.css";
// import { Redirect } from "react-router-dom"


const MainPage = () => {
  const directUserToQuiz = (quizId) => {
    console.log("hello", quizId)
    //use redirect to go to quiz
    //dispatch to set single (current) quiz in global state??
  }
    const quizzes = useSelector(state => state.quizzes.quizList)
      //const sessionUser = useSelector((state) => state.session.user);

// useEffect(() => {
//     console.log("hello from LoginForm")
//       if (sessionUser) return <Redirect to="/profile" />;
//   }, [sessionUser])
    return (
        <>
        <h1>BrainBust Main Page</h1>
        {quizzes.map(quiz => {
        return (
          <div key={quiz.id} className="quiz-block">
            <div>{quiz.name}</div>
            <div>{quiz.category}</div>
            <button className="take-quiz-button"
            onClick={()=> directUserToQuiz(quiz.id)}>Take Quiz</button>
          </div>
        );})}
        </>
    )
}

export default MainPage;
