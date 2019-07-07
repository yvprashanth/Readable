import * as actionTypes from './actionTypes'
import * as api from '../utils'

export const loadCategories = () => dispatch => {
    return api.getAllCategories().then(categories => dispatch(loadCategories(categories)))
}

export const fetchUsers = () => {
    debugger
    return dispatch => {
     fetch('https://my-json-server.typicode.com/typicode/demo/posts')
       .then(response => response.json())
       .then(json => dispatch({ type: 'FETCH_ALL_USERS', json }))
    }
}