import { ACTION_TOGGLE_SIDE_BAR } from './actions'

export const reducer = (state, action) => {

	switch (action.type) {
		
		case ACTION_TOGGLE_SIDE_BAR:
			return {
				...state,
				sidebarStatus: action.payload
			}

	}
	return state
}