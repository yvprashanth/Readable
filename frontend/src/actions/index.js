import * as actionTypes from './actionTypes'
import * as api from '../utils'

export const loadCategories = () => dispatch => {
    return api.getAllCategories().then(categories => dispatch(loadCategories(categories)))
}

export const test = () => {
    return api.getAllCategories().then(
        data => {
            console.log(data)
        }
    )
}