import { TOGGLE_SIDEBAR } from './actions'
import { REGISTRATION_SUCCES } from './actions'

export const reducer = (state, action) => {

	switch (action.type) {
		
		case TOGGLE_SIDEBAR:
			return { 
				...state,
				sidebar: action.status
			}
		
		case REGISTRATION_SUCCES:
			return {
				...state,
				registrationSucces: action.status
			}
		
		default: return state
	}
}