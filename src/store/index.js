import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import apiCall from './middlewares/api-call'
import rootReducer from '../reducers'

const INITIAL_STATE = {}

const store = createStore(
  rootReducer,
  INITIAL_STATE,
  applyMiddleware(apiCall, createLogger({
    duration : true,
    collapsed: true,
  }))
)

export default store
