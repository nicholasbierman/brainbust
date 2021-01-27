import { useState } from "react";


const NewQuizForm = () => {
    const [ value, setValue ] = useState('');
    const handleValueChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <>
            <form method="POST" action="/api/quizzes/new">
                <h1>Create New Quiz</h1>
                <h2>A Quiz is a set of Questions</h2>
                <input name="name"type="text" placeholder="e.g. Biology 101, Constitutional Law" onChange={handleValueChange}></input>
                <br></br>
                <label for="is_private">Private?</label>
                <input onchange={ handleValueChange }name="is_private" type="checkbox"></input>
                <br></br>
                <button>Continue</button>
            </form>
        </>
    )
}

export default NewQuizForm;