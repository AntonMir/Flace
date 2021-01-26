import React, { Component } from 'react';
// redux
import { connect } from 'react-redux'
import { store } from '../../../../../../store/store'
import { showRegistration } from '../../../../../../store/actions'
// styles
import './registrationBtn.scss'

class RegistrationBtn extends Component {
    constructor(props) {
        super(props)
    }

    showRegistration = () => {
        store.dispatch(showRegistration(!this.props.registration))
        console.log(store.getState());

    }

    // return {
	// 	type: SHOW_REGISTRATION,
	// 	status: status
	// }

    // store = createStore(reducer, initialState)
    // registration: false

    // createStore(reducer, initialState).dispatch( { type: SHOW_REGISTRATION, status:  false } )

    // createStore( (state, { type: SHOW_REGISTRATION, status:  false }), initialState)

    render() {
        return (
            <div className="login-signup" onClick={this.showRegistration}>Регистрация</div>
        )
    }
}

function reactReduxStoreConnectWrapper(state) {
    return {
        registration: state.registration
    }
}

export default connect(reactReduxStoreConnectWrapper)(RegistrationBtn)
