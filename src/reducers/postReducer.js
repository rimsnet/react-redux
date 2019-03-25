const postReducer = (state = [], action) => {

    switch (action.type) {
        case 'ADD_POST': return state.concat([action.data]); break;
        case 'DELETE_POST': return state.filter((post) => post.id !== action.id); break;
        default: return state
    }
}

export default postReducer