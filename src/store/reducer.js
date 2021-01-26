import { TOGGLE_SIDEBAR } from './actions'
import { SEND_JSON } from './actions'

export const reducer = (state, action) => {

	switch (action.type) {
		
		case TOGGLE_SIDEBAR:
			return { 
				...state,
				sidebar: action.status
			}
		
		case SEND_JSON:
			return {
				...state,
				sendJson: action.data
			}
		
		default: return state
	}
}