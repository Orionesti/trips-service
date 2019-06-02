import t from '../constants/action-types'

export const loadTrips = () => ({
  types: t.apiTypes(t.LOAD_TRIPS),
  apiCall: api => api.get('trips')
})
