const SET_QUESTIONS = "/questions/setQuizQUESTIONS";

const setQuestions = (questions) => ({
  type: SET_QUESTIONS,
  payload: questions,
});

export const getQuestions = (id) => async (dispatch) => {
  const res = await fetch(`/api/question/${id}`);
  const data = await res.json();
  dispatch(setQuestions(data.questions));
};

export const addQuestion = (id) => async (dispatch) => {
  const res = await fetch('/api/question/new', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newQuestion)
  });
}

const initialState = { ques: [] };

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_QUESTIONS:
      newState = Object.assign({}, state, { ques: action.payload });
      return newState;
    default:
      return state;
  }
}

export default reducer;
