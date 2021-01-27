

function NewQuizForm () {
    return (
        <>
            <form method="POST" action="/quizzes/new">
                <h1>Create New Quiz</h1>
                <h2>A Quiz is a set of Questions</h2>
                <input type="text" placeholder="e.g. Biology 101, Constitutional Law"></input>
                <br></br>
                <label for="private">Private?</label>
                <input name="private" type="checkbox"></input>
                <br></br>
                <button>Continue</button>
            </form>
        </>
    )
}

export default NewQuizForm;