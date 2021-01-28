import { fetch } from './csrf.js';

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
    dispatch(setQuizzes(res.data.quizzes))
}

export const addSingleQuiz = (newQuiz) => async (dispatch) => {
    console.log(newQuiz);
    const response = await fetch('/api/quizzes/new', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newQuiz)
    })
    console.log("HELLO", response, "RESPONSE SHOULD BE HERE")
    dispatch(addQuiz(response.data))
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