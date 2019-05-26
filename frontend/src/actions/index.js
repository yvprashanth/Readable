import * from "./actionTypes";
import * as api from '../utils'

export const load_categories = () => dispatch => {
    return api.getCategories().then(categories => dispatch(getAllCategories(categories)))
}

export const load_posts = () => dispatch => {
    return api.getAllPosts().then(posts => dispatch(getAllPosts(posts)))
}

export const load_posts_by_category = (category) => dispatch => {
    return api.getPostsByCategory(category).then(posts => dispatch(getPostsByCategory(posts)))
}

const getPostsByCategory = (posts) => {
    return {
        type: actionTypes.LOAD_POSTS_BY_CATEGORY,
        posts: posts
    }
}

const getAllPosts = (posts) => {
    return {
        type: actionTypes.LOAD_POSTS,
        posts: posts
    }
}

const getAllCategories = (categories) => {
    return {
        type: actionTypes.LOAD_CATEGORIES,
        payload: categories
    }
}