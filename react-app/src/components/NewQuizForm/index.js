import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addSingleQuiz } from '../../store/quiz';



const NewQuizForm = () => {
    const [ name, setName ] = useState('')
    const [ isPrivate, setIsPrivate ] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState()
    const dispatch = useDispatch();

    // const user = useSelector(state => state.session.user)
    const categories = useSelector(state => state.categories.categories)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
          addSingleQuiz({
            name,
            is_private: isPrivate,
            category_id: parseInt(selectedCategory),
          })
        );
        // dispatch(addSingleQuiz({ name, is_private: isPrivate, user_id: user.id, category_id: parseInt(selectedCategory) }))
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Create New Quiz</h1>
                <h2>A Quiz is a set of Questions</h2>
                <input name="name" type="text" placeholder="e.g. Biology 101, Constitutional Law" onChange={ (e) => setName(e.target.value)} value={name}></input>
                <br></br>
                <label for="category">Category</label>
                <select onChange={ (e) => setSelectedCategory(e.target.value) } name="category">
                {
                    categories.map((category) => {
                        return <option value={ category.id }>{ category.name }</option>
                    }) })
                </select>
                <br></br>
                <label for="is_private">Private?</label>
                <input value={ isPrivate } onChange={ (e) => setIsPrivate(true) } name="is_private" type="checkbox"></input>
                <br></br>
                <br></br>
                <button type="submit">Continue</button>
            </form>
        </>
    )
}

export default NewQuizForm;
