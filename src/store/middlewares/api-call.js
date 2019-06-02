import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:9000',
  timeout: 1000,
})

export default ({ dispatch, getState }) => {

  return next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState)
    }

    const { apiCall, types = [], ...rest } = action

    if (!apiCall) {
      return next(action)
    }

    const [REQUEST, SUCCESS, FAILURE] = types

    REQUEST && next({ ...rest, type: REQUEST })

    const actionPromise = apiCall(apiClient)

    actionPromise.then(
      result => SUCCESS && next({ ...rest, result: result.data, type: SUCCESS }),
      err => FAILURE && next({ ...rest, error: err.message, errorCode: err.code, type: FAILURE })
    )

    return actionPromise
  }
}
