const SET_QUIZZES = 'quiz/setQuizzes'
const ADD_QUIZ = 'quiz/addQuiz'

const addQuiz = (quiz) => ({
    type: ADD_QUIZ,
    payload: quiz
})

const setQuizzes = (quizzes) => ({
    type: SET_QUIZZES,
    payload: quizzes
})

export const getQuizzes = () => async (dispatch) => {
    const res = await fetch('/api/quizzes')
    const data = await res.json();
    dispatch(setQuizzes(data.quizzes))
}

export const addSingleQuiz = (newQuiz) => async (dispatch) => {
    const response = await fetch('/api/quizzes/new', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newQuiz)
    })
    if (response.ok) {
        const data = await response.json()
        dispatch(addQuiz(data))
    }
}

const initialState = { quizList: [] };

function reducer (state = initialState, action) {
    let newState;
    switch (action.type) {
        case SET_QUIZZES:
            newState = Object.assign({}, state, { quizList: action.payload });
            return newState;
        case ADD_QUIZ:
            newState = Object.assign({}, state, { quizList: action.payload });
            return newState;
        default:
            return state;
    }
}
    
export default reducer