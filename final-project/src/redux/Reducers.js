import { combineReducers } from 'redux'

const countA = (state = 1, action) => {
  switch(action.type) {
    case "ADD_A":
    return state;
    default:
    return state
  }
}

export default combineReducers({
  countA,
})