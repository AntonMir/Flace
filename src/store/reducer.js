import { TOGGLE_SIDEBAR, SHOW_REGISTRATION } from './actions'

export const reducer = (state, action) => {

	switch (action.type) {
		
		case TOGGLE_SIDEBAR:
			return { 
				...state,
				sidebar: action.status
			}

		case SHOW_REGISTRATION: 
			return {
				...state,
				registration: action.status 
			}
	}

	return state

}