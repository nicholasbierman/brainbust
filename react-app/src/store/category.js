const SET_CATEGORIES = '/category/setCategories'

const setCategories = (categories) => ({
    type: SET_CATEGORIES,
    payload: categories
})

export const getCategories = () => async (dispatch) => {
    const res = await fetch('/api/categories')
    const data = await res.json();
    dispatch(setCategories(data.categories))
}

const initialState = { categories: [] }

function reducer (state = initialState, action) {
    let newState;
    switch (action.type) {
        case SET_CATEGORIES:
            newState = Object.assign({}, state, { categories: action.payload })
            return newState;
        default:
            return state;
    }
}

export default reducer