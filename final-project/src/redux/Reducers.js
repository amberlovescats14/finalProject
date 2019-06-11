import { combineReducers } from 'redux'


//HOME
const increaseCount = (state =1, action) => {
  switch(action.type) {
    case "INCREASE_COUNT":
    return {...state, testNumber: state.testNumber +1};
    default:
    return state
  }
}

// EVENTBRITE RUN
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
// TRAILS
const setTrails = (state=[], action) => {
  switch(action.type){
    case "SET_TRAILS":
    return state.concat(action.value);
    default: 
    return state
  }
}
const trailHeader = (state="", action) => {
  switch(action.type){
    default: return state
  }
}
export default combineReducers({
  testNumber: increaseCount,
  runDATA: setRuns,
  location,
  trailDATA: setTrails,
  trailHeader
})