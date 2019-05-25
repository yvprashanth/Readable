import * from "./actionTypes";
import * as api from '../utils'

export const load_categories = () => dispatch => {
    return api.getCategories().then(categories => dispatch(getAllCategories(categories)))
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