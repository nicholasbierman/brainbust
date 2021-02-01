const SET_QUIZZES = 'quiz/setQuizzes'
const ADD_QUIZ = 'quiz/addQuiz'
const DELETE_QUIZ = 'quiz/deleteQuiz'
const CLEAR_QUIZZES = 'quiz/clearQuizzes'
const SEARCH_QUIZZES_BY_TITLE = 'quiz/searchQuizzesByTitle'

const setSearchQuizzes = (quizzes) => ({
    type: SEARCH_QUIZZES_BY_TITLE,
    payload: quizzes
})

const addQuiz = (quiz) => ({
    type: ADD_QUIZ,
    payload: quiz
})

const setQuizzes = (quizzes) => ({
    type: SET_QUIZZES,
    payload: quizzes
})

const deleteQuiz = (id) => ({
    type: DELETE_QUIZ,
    payload: id
})
const clearQuizzes = () => ({
    type: CLEAR_QUIZZES
})

export const searchQuizByTitle = (searchTerm) => async (dispatch) => {
    const response = await fetch(`/api/search/${searchTerm}`)
    const data = await response.json()
    dispatch(setSearchQuizzes(data))
}

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

export const deleteSingleQuiz = (quizToDelete) => async (dispatch) => {
    const response = await fetch(`/api/quizzes/${quizToDelete.id}/delete`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
        const data = await response.json()
        dispatch(deleteQuiz(quizToDelete.id))
}

const initialState = { quizList: [] };

function reducer (state = initialState, action) {
    let newState;
    switch (action.type) {
        case SET_QUIZZES:
            newState = Object.assign({}, state, { quizList: action.payload });
            return newState;
        case ADD_QUIZ:
            newState = Object.assign({}, state );
            newState.quizList = [...newState.quizList, action.payload]
            return newState;
        case DELETE_QUIZ:
            newState = Object.assign({}, state);
            newState.quizList = newState.quizList.filter(quiz => {
                return quiz.id !== action.payload
            })
            return newState;
        case SEARCH_QUIZZES_BY_TITLE:
            newState = { ...state } 
        default:
            return state;
    }
}

export default reducer
