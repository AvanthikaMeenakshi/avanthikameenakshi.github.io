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
        let hostNameCheck = window.location.hostname === 'avanthikameenakshi.github.io';
        let url;
        if(hostNameCheck) {
            url = `https://medium.com/feed/@avanthikameenakshi`
        } else {
            url = `/feed/@avanthikameenakshi`;
        }
        return axios.get('/feed/@avanthikameenakshi').then(response => response.data
        ).then((json) => {
            console.log(json);
            // const dataJson = json.replace('])}while(1);</x>', '');
            // const mediumPostData = JSON.parse(dataJson);
            // console.log(mediumPostData.payload.references.SocialStats)
            // console.log(mediumPostData.payload.references.Post)
        }).catch((error) => {
            dispatch({
                type: LOAD_POSTS_FAILURE,
                receivedAt: Date.now(),
                payload: error.toString()
            });
        });
    };
};