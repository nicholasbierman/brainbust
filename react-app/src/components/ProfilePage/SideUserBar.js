import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addSingleQuiz } from '../../store/quiz';
import Search from "./Search"


const SideUserBar = () => {
    const user = useSelector(state => state.session.user);
    const [name, setName] = useState('');
    const [isPrivate, setIsPrivate] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState();
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories.categories);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            addSingleQuiz({
                name,
                is_private: isPrivate,
                category_id: parseInt(selectedCategory),
            })
        );
    };
    
    
    return (
        <div>
            <h1 className="sidebar">Welcome, {user.username}!</h1>
            <Search />
            <div className="new-quiz-form">
                <form onSubmit={handleSubmit}>
                    <h1>Create A New Quiz</h1>
                    <h2>A Quiz is a set of Questions</h2>
                    <label className="new-quiz-form">Name:</label>
                    <input className="new-quiz" name="name" type="text" placeholder="e.g. Biology 101, Constitutional Law" onChange={ (e) => setName(e.target.value)} value={name}></input>
                    <label className="new-quiz-form" htmlFor="category">Category:</label>
                    <select onChange={(e) => setSelectedCategory(e.target.value)} name="category">
                        {categories.map((category, i) => {
                            return <option key={ i } value={category.id}>{category.name}</option>
                        })})
                </select>
                    <label className="new-quiz-form" htmlFor="is_private">Private?</label>
                    <input value={isPrivate} onChange={(e) => setIsPrivate(true)} name="is_private" type="checkbox"></input>
                    <br />
                    <button type="submit">Continue</button>
                </form>
            </div>
        </div>
    )
}

export default SideUserBar;