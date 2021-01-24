// кладем в переменную тип нашего action
export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR"
export const SHOW_REGISTRATION = "SHOW_REGISTRATION"

// Функция, которая содержит в себе тип и статус нашего Sidebar
export function toggleSidebar(status) {
	return {
		type: TOGGLE_SIDEBAR,
		status: status
	}
}

export function showRegistration(status) {
	return {
		type: SHOW_REGISTRATION,
		status: status
	}
}