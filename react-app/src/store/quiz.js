const SET_QUIZZES = 'quiz/setQuizzes'
const ADD_QUIZ = 'quiz/addQuiz'
const CLEAR_QUIZZES = 'quiz/clearQuizzes'

const addQuiz = (quiz) => ({
    type: ADD_QUIZ,
    payload: quiz
})

const setQuizzes = (quizzes) => ({
    type: SET_QUIZZES,
    payload: quizzes
})

const clearQuizzes = () => ({
    type: CLEAR_QUIZZES
})

export const clearQuizzesThunk = () => async (dispatch) => {
    dispatch(clearQuizzes())
}

export const getQuizzes = () => async (dispatch) => {
    const res = await fetch('/api/quizzes')
    const data = await res.json();
    dispatch(setQuizzes(data.quizzes))
}

export const getUserQuizzes = (id) => async (dispatch) => {
    const res = await fetch(`/api/quizzes/user/${id}`)
    const data = await res.json();
    dispatch(setQuizzes(data.quizzes))
}

export const getCategoryQuizzes = (id) => async (dispatch) => {
    const res = await fetch(`/api/quizzes/category/${id}`)
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
