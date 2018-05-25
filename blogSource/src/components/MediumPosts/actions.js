import axios from 'axios';
import postsData from './posts';
import { map } from 'lodash';

export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

export const loadPostsLocalSetup = function () {
    return function (dispatch) {
        dispatch({
            type: LOAD_POSTS_REQUEST,
            posts: []
        });
        return axios.get(`/@avanthikameenakshi/latest?format=json`).then(response => response.data
        ).then((json) => {
            const dataJson = json.replace('])}while(1);</x>', '');
            const mediumPostData = JSON.parse(dataJson);
            console.log(mediumPostData);
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

export const loadPosts = function () {
    return function (dispatch) {
        const posts = postsData.payload;
        posts.references.Post = map(posts.references.Post, post => (post));
        dispatch({
            type: LOAD_POSTS_SUCCESS,
            posts
        });
    };
}