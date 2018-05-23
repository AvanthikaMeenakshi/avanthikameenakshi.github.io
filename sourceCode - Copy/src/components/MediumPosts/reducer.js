import {
    LOAD_POSTS_SUCCESS,    
    LOAD_POSTS_REQUEST,
    LOAD_POSTS_FAILURE
} from './actions';

const initialState = {
    receivedAt: Date.now(),
    posts: []
};

const mediumPosts = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_POSTS_REQUEST:
            return { ...state, receivedAt: action.receivedAt };
        case LOAD_POSTS_SUCCESS:
            return { ...state, receivedAt: action.receivedAt, posts: action.posts };
        case LOAD_POSTS_FAILURE:
            return { ...state, receivedAt: action.receivedAt };
        default:
            return state;
    }
};

export default mediumPosts;