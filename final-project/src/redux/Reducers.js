import { combineReducers } from 'redux'



const increaseCount = (state =1, action) => {
  console.log("countA switch:" + state.testNumber)
  switch(action.type) {
    case "INCREASE_COUNT":
    return {...state, testNumber: state.testNumber +1};
    default:
    return state
  }
}

export default combineReducers({
  testNumber: increaseCount
})