import { combineReducers } from "redux";
import todos from './todos'
import * as actionTypes from '../actions/actionTypes'

const initial_state = null

export function categories(state = initial_state, action){
    switch(action.type){
        case actionTypes.LOAD_CATEGORIES:
            return action.payload
        default:
            return state
    }
}

export function posts(state = initial_state, action){
    switch(action.type){
        case actionTypes.LOAD_POSTS:
            return action.posts
        default:
            return state
    }
}

export default combineReducers({
    categories,
    posts
})