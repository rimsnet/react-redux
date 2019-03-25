const postReducer = (state = [], action) => {

    switch (action.type) {
        case 'ADD_POST': return state.concat([action.data]); break;
        case 'DELETE_POST': return state.filter((post) => post.id !== action.id); break;
        case 'EDIT_POST': return state.map((post) => post.id === action.id ? { ...post, editing: !post.editing } : post); break;
        case 'UPDATE_POST': return state.map((post) => {
            if (post.id === action.id) {
                return {
                    ...post,
                    title: action.data.title,
                    body: action.data.body,
                    editing: !post.editing
                }
            } else return post
        })
        default: return state
    }
}

export default postReducer