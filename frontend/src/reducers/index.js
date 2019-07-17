import * as actionTypes from '../actions/actionTypes'
import { combineReducers } from 'redux'

const initial_state = {
    sunday: {
      breakfast: null,
      lunch: null,
      dinner: null,
    },
    monday: {
      breakfast: null,
      lunch: null,
      dinner: null,
    },
    tuesday: {
      breakfast: null,
      lunch: null,
      dinner: null,
    },
    wednesday: {
      breakfast: null,
      lunch: null,
      dinner: null,
    },
    thursday: {
      breakfast: null,
      lunch: null,
      dinner: null,
    },
    friday: {
      breakfast: null,
      lunch: null,
      dinner: null,
    },
    saturday: {
      breakfast: null,
      lunch: null,
      dinner: null,
    },
  }

export function categories(state = initial_state, action){
    switch(action.type){
        case actionTypes.LOAD_CATEGORIES:
            return state
        default:
            return state
    }
}

export function posts(state = initial_state, action){
    switch(action.type){
        case actionTypes.LOAD_POSTS:
            return state
        default:
            return state
    }
}

const user = (state = { users: [] }, action) => {
  debugger
  switch (action.type) {
   case 'FETCH_ALL_USERS':
    return {
     ...state,
     users: action.json
    };
   default:
    return state;
  }
 };

export default combineReducers({
    categories,
    posts,
    user
})