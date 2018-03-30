import {
    LOAD_POSTS
} from './actions';

const initialState = {
    posts: []
};

const mediumPosts = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_POSTS:
            return { ...state, posts: action.posts };
        default:
            return state;
    }
};

export default mediumPosts;