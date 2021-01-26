import { fetch } from './csrf.js';

const SET_QUIZZES = 'quiz/setQuizzes'

const setQuizzes = (quizzes) => ({
    type: SET_QUIZZES,
    payload: quizzes
})

export const getQuizzes = () => async (dispatch) => {
    const res = await fetch('/api/quizzes')
    dispatch(setQuizzes(res.data.quizzes))
}

const initialState = { quizList: [] };

function reducer (state = initialState, action) {
    let newState;
    switch (action.type) {
        case SET_QUIZZES:
            newState = Object.assign({}, state, { quizList: action.payload });
            return newState;
        default:
            return state;
    }
}
    
export default reducer