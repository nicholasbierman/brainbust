import React from "react"
import { useParams } from "react-router-dom"
import QuizpageBody from "./QuizpageBody"
import SideQuizBar from "./SideQuizBar"
import "./QuizPage.css"

const QuizPage = () => {
    const { id } = useParams();

    return (
      <>
        <div className="page-container-quiz">
          <div className="page-container-quiz__side">
            <SideQuizBar />
          </div>
          <div className="page-container-quiz__body">
            <QuizpageBody id={id}/>
          </div>
        </div>
      </>
    );
}

export default QuizPage;