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
const setRuns = (state=[], action) => {
  switch(action.type){
    case "SET_RUNS":
    return state.concat(action.value);
    default: 
    return state
  }
}
const location = (state=[], action) => {
  switch(action.type){
    default: return state
  }
}
export default combineReducers({
  testNumber: increaseCount,
  runDATA: setRuns,
  location
})