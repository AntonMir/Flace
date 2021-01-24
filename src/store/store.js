import { createStore } from 'redux'
import { reducer } from './reducer'

// Начальное состояние
export const initialState = {
	sidebar: false,
	registration: false
}



export const store = createStore(reducer, initialState)