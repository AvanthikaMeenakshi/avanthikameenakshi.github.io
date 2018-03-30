import axios from 'axios';

export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

export const loadPosts = function () {
    return function (dispatch) {
        dispatch({
            type: LOAD_POSTS_REQUEST,
            posts: []
        });
        console.log(process);
        return axios.get("/@avanthikameenakshi/latest?format=json").then(response => response.data
        ).then((json) => {
            const dataJson = json.replace('])}while(1);</x>', '');
            const mediumPostData = JSON.parse(dataJson);
            console.log(mediumPostData.payload.references.SocialStats)
            console.log(mediumPostData.payload.references.Post)
        }).catch((error) => {
            dispatch({
                type: LOAD_POSTS_FAILURE,
                receivedAt: Date.now(),
                payload: error.toString()
            });
        });
    };
};