import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { addSingleQuiz } from '../../store/quiz';
import { getQuestions } from '../../store/question';
import QuestionBoxModal from '../QuestionModal/index'
import Search from "./Search"


const SideUserBar = () => {
    const user = useSelector(state => state.session.user);
    const quiz = useSelector(state => state.session.quiz);
    const [name, setName] = useState('');
    const [isPrivate, setIsPrivate] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories.categories);
    const added_questions = useSelector(state => state.quizzes.newQuestions)

    const [errors, setErrors] = useState([]);

    // useEffect(()=> {
    //     dispatch(getQuestions(quiz.id))
    // }, [quiz.id])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(selectedCategory)
        const data = await dispatch(
                addSingleQuiz({
                    name,
                    is_private: isPrivate,
                    category_id: parseInt(selectedCategory),
                    added_questions
                })
        );
        setErrors([]);
        if(data.errors) {
            return setErrors(data.errors)
        } else {
            setName('')
        }
    };


    return (
            <div>
            <h1 className="sidebar">Welcome, { user.username }!</h1>
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
                        <input className="new-quiz" name="name" type="text" placeholder="e.g. Biology 101, Constitutional Law" onChange={ (e) => setName(e.target.value)} value={name}></input>
                        <label className="new-quiz-form" for="category">Category:</label>
                        <select onChange={(e) => setSelectedCategory(e.target.value)} name="category">
                            {categories.map((category) => {
                                return <option value={category.id}>{category.name}</option>
                            })})
                    </select>
                        <label className="new-quiz-form" for="is_private">Private?</label>
                        <input value={isPrivate} onChange={(e) => setIsPrivate(true)} name="is_private" type="checkbox"></input>
                        <br />
                        {added_questions.map((question) => {
                            return <div>{question.question_body}</div>
                        })}
                        <br />
                        <QuestionBoxModal/>
                        <br />
                        <button type="submit">Continue</button>
                    </form>
                </div>
            </div>
    )
}

export default SideUserBar;
