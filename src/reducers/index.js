import { combineReducers } from 'redux'
import trips from './trips'

export default combineReducers({
  trips
})

export const getTrips = state => state.trips
