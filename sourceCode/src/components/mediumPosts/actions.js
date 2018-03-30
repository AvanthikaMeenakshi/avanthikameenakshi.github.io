export const LOAD_POSTS = 'LOAD_POSTS';

export const loadPosts = function () {
    return function (dispatch) {
        dispatch({
            type: LOAD_POSTS,
            posts: []
        });
    };
};