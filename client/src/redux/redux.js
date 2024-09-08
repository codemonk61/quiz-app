import {createStore} from 'redux'
import { calculateResults } from '../utils/resultCalculator'

// we can make seperate folder and file for action, reducer,

export const setQuestions = (data) => {
    return {
        type: "SET_ALL_QUESTIONS",
        payload: data
    }
}

export const setAnswersInStore = (data) => {
   return {
    type: "SET_ANSWERS",
    payload: data
   }
}

export const getResult = (data) => {
    return {
     type: "GET_RESULT",
    }
 }



const initialValue = {
    allQuestion: [],
    answers: {},
    result: {}
}

const reducer = (state = initialValue, action) => {
  switch(action.type){
    case 'SET_ALL_QUESTIONS':
        return {...state, allQuestion: action.payload};

    case 'SET_ANSWERS':
        return {...state, answers: action.payload};
    
    case 'GET_RESULT':
        return {...state, result: calculateResults(state.allQuestion, state.answers)};

    default:
        return state;

  }
}

export const store = createStore(reducer)