const SET_QUIZZES = 'quiz/setQuizzes'
const ADD_QUIZ = 'quiz/addQuiz'
const DELETE_QUIZ = 'quiz/deleteQuiz'
const CLEAR_QUIZZES = 'quiz/clearQuizzes'
const ADD_QUESTIONS = 'quiz/addQuestions'
const UPDATE_SCORE = 'quiz/updateScore'
const CLEAR_SCORE = 'quiz/clearScore'
const CLEAR_QUESTIONS = 'quiz/clearQuestions'

const addQuiz = (quiz) => ({
    type: ADD_QUIZ,
    payload: quiz
});

const setQuizzes = (quizzes) => ({
    type: SET_QUIZZES,
    payload: quizzes
});

const deleteQuiz = (id) => ({
    type: DELETE_QUIZ,
    payload: id
});

const clearQuizzes = () => ({
    type: CLEAR_QUIZZES
});

export const updateScore = (score, totalQuestions) => ({
    type: UPDATE_SCORE,
    payload: {score, totalQuestions}
});

export const clearScore = () => ({
    type: CLEAR_SCORE
});

export const searchQuizByTitle = (searchTerm) => async (dispatch) => {
    const response = await fetch(`/api/search/${searchTerm}`)
    const data = await response.json()
    dispatch(setQuizzes(data.quizzes))
}

export const addQuestions = (question) => ({
    type: ADD_QUESTIONS,
    payload: question
})

export const emptyNewQuestions = () => ({
    type: CLEAR_QUESTIONS,
    payload: []
})

export const clearQuizzesThunk = () => async (dispatch) => {
    dispatch(clearQuizzes())
};

export const getQuizzes = () => async (dispatch) => {
    const res = await fetch('/api/quizzes/')
    const data = await res.json();
    dispatch(setQuizzes(data.quizzes))
};

export const getUserQuizzes = (id) => async (dispatch) => {
    const res = await fetch(`/api/quizzes/user/${id}`)
    const data = await res.json();
    dispatch(setQuizzes(data.quizzes))
};

export const getCategoryQuizzes = (id) => async (dispatch) => {
    const res = await fetch(`/api/quizzes/category/${id}`)
    const data = await res.json();
    dispatch(setQuizzes(data.quizzes))
};

export const addSingleQuiz = (newQuiz) => async (dispatch) => {
    const response = await fetch('/api/quizzes/new', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newQuiz)
    })
    const data = await response.json();
    if (!data.errors) {
        dispatch(addQuiz(data))
    }
    return data;
}

export const deleteSingleQuiz = (quizToDelete) => async (dispatch) => {
    await fetch(`/api/quizzes/${quizToDelete.id}/delete`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    dispatch(deleteQuiz(quizToDelete.id))
}

const initialState = { quizList: [], newQuestions: [], currentQuiz: {score: 0, totalQuestions: 0} };


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
        case ADD_QUESTIONS:
            newState = Object.assign({}, state );
            newState.newQuestions = [...newState.newQuestions, action.payload]
            return newState;
        case CLEAR_QUESTIONS:
            newState = Object.assign({}, state);
            newState.newQuestions = action.payload;
            return newState;
        case DELETE_QUIZ:
            newState = Object.assign({}, state);
            newState.quizList = newState.quizList.filter(quiz => {
                return quiz.id !== action.payload
            })
            return newState;
        case UPDATE_SCORE:
            newState = Object.assign({}, state);
            newState.currentQuiz = {...action.payload}
            return newState;
        case CLEAR_SCORE:
            newState = Object.assign({}, state);
            newState.currentQuiz.score = 0;
            newState.currentQuiz.totalQuestions = 0;
            return newState;
        default:
            return state;
    }
}

export default reducer
