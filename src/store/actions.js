// кладем в переменную тип нашего action
export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR"
export const SEND_JSON = "SEND_JSON"

// Функция, которая содержит в себе тип и статус нашего Sidebar
export function toggleSidebar(status) {
	return {
		type: TOGGLE_SIDEBAR,
		status: status
	}
}

export function sendJson(data) {
	return {
		type: SEND_JSON,
		data: data
	}
} 
