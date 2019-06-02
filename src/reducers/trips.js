import t from '../constants/action-types'

const initialState = {
	list: []
}

export default function tripsReducer(state = initialState, action) {
	const [REQUEST, SUCCESS, FAILURE] = t.apiTypes(t.LOAD_TRIPS)

	switch (action.type) {
		case REQUEST:
			return {
				...state,
				loaded: false,
				loading: true,
				error: null
			}
		case FAILURE:
			return {
				...state,
				loaded: true,
				loading: false,
				error: action.error
			}
		case SUCCESS:
			return {
				...state,
				list: action.result,
				loaded: true,
				loading: false,
				error: action.error
			}
		default:
			return state
	}
}
