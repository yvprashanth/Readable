// READ
export const SET_POST = 'SET_POST'
// CREATE
export const ADD_POST = "ADD_POST";
// UPDATE
export const UPDATE_POST = "UPDATE_POST";
// VOTE
export const VOTE_POST = "VOTE_POST";
// DELETE
export const DELETE_POST = "DELETE_POST";

// READ
export const GET_POSTS_ALL = "GET_POSTS_ALL";
export const GET_POSTS_BY_CAT = "GET_POSTS_BY_CAT";

// READ
export const GET_POSTS_ALL = "GET_POSTS_ALL";
export const GET_POSTS_BY_CAT = "GET_POSTS_BY_CAT";

// FILTER / SHOW
export const SHOW_ALL_POSTS = "SHOW_ALL_POSTS";
export const FILTER_POSTS_BY_CAT = "FILTER_POSTS_BY_CAT";

// SORT BY
export const SET_SORT_METHOD = "SET_SORT_METHOD";
export const SORT_BY_VOTE_SCORE_ASC = "SORT_VOTE_SCORE_ASC";
export const SORT_BY_VOTE_SCORE_DESC = "SORT_VOTE_SCORE_DESC";
export const SORT_BY_PUBDATE_ASC = "SORT_BY_PUBDATE_ASC";
export const SORT_BY_PUBDATE_DESC = "SORT_BY_PUBDATE_DESC";

// CREATE
export function addPost(post) {
    return {
        type: ADD_POST,
        post
    };
};
