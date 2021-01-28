// кладем в переменную тип нашего action
export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR"

// Функция, которая содержит в себе тип и статус нашего Sidebar
export function toggleSidebar(status) {
	return {
		type: TOGGLE_SIDEBAR,
		status: status
	}
}
 
