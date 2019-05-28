import { createStore, applyMiddleware } from 'redux'
import rootReducers from './redux/Reducers'
import thunk from 'redux-thunk'

const initialState = {
  runArray : [],
  loaded : false,
  testNumber: 1
}

const store = createStore(
  rootReducers,
  initialState,
  applyMiddleware(thunk)
)