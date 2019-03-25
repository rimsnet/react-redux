const commentReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COMMENT': return state.concat(action.data)
        default: return state;
    }
}

export default commentReducer