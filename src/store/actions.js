

export const ACTION_TOGGLE_SIDE_BAR = 'ACTION_TOGGLE_SIDE_BAR'


export const toggleSidebar = (status) => {
	return {
		type: ACTION_TOGGLE_SIDE_BAR,
		payload: status
	}
}