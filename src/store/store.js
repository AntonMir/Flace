import { createStore } from 'redux'
import { reducer } from './reducer'

// Начальное состояние
export const initialState = {
	sidebar: false,
	registrationSucces: false,
}



export const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



// _________________________________________________________________
// redux ПОДКЛЮЧЕНИЕ
// import { connect } from 'react-redux'
// import { store } from '../../../../../../store/store'
// import { someAction } from '../../../../../../store/actions'


// _________________________________________________________________
// Логика redux
// return {
// 	type: SHOW_REGISTRATION,
// 	status: status
// }

// store = createStore(reducer, initialState)
// registration: false

// createStore(reducer, initialState).dispatch( { type: SHOW_REGISTRATION, status:  false } )

// createStore( (state, { type: SHOW_REGISTRATION, status:  false }), initialState)
	


// _________________________________________________________________
// Обертка в state

// function reactReduxStoreConnectWrapper(state) {
//     return {
//         registration: state.registration
//     }
// }

// export default connect(reactReduxStoreConnectWrapper)(ClassName)



