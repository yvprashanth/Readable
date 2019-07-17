import * as api from '../utils'

export const fetchCategories = () => {
    return dispatch => {
        fetch('http://localhost:5000/categories')
            .then(response => response.json())
            .then(json => dispatch({type: 'FETCH_ALL_CATEGORIES', json }))
    }
}

export const fetchUsers = () => {
    debugger
    return dispatch => {
     fetch('https://my-json-server.typicode.com/typicode/demo/posts')
       .then(response => response.json())
       .then(json => dispatch({ type: 'FETCH_ALL_USERS', json }))
    }
}