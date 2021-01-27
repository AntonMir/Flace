// кладем в переменную тип нашего action
export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR"
export const REGISTRATION_SUCCES = "REGISTRATION_SUCCES"

// Функция, которая содержит в себе тип и статус нашего Sidebar
export function toggleSidebar(status) {
	return {
		type: TOGGLE_SIDEBAR,
		status: status
	}
}

export function registrationSucces(status) {
	return {
		type: REGISTRATION_SUCCES,
		status: status
	}
} 
