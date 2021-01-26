import { TOGGLE_SIDEBAR } from './actions'

export const reducer = (state, action) => {

	switch (action.type) {
		
		case TOGGLE_SIDEBAR:
			return { 
				...state,
				sidebar: action.status
			}
		
		default: return state
	}
}