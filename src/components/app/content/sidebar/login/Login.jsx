import React, { Component } from 'react';
// redux
import { connect } from 'react-redux'
import { store } from '../../../../../store/store'
import { showRegistration } from '../../../../../store/actions'
// styles
import './login.scss'

class Login extends Component {
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
            <>
                <div className="login">
                    <form action="" className="login-form">
                        
                        <h2 className="login-title">Авторизация</h2>

                        {/*  Вход по Email, класс, имя(чтоб сервер понял, что за данные), минимальная длинна,обязательно для заполнения  */}
                        <input 
                            type="email" 
                            className="login-input login-email" 
                            name="email"     
                            minLength="3"              
                            required
                            placeholder="Введите email"
                        /> 
                        
                        {/*  Пароль для входа  */}
                        <input 
                            type="password" 
                            className="login-input login-password"
                            name="password"     
                            minLength="3"              
                            required
                            placeholder="Введите пароль"
                        />

                        <a href="/" className="login-forget">Забыли пароль?</a>

                        <button className="login-signin" type="submit">Войти</button>

                    </form>
                    {/* ./login-form */}

                    <div className="login-signup" onClick={this.showRegistration}>Регистрация</div>

                </div>
                {/* ./login */}
            </>
        )
    }
}

function statusWrapper(state) {
    return {
        registration: state.registration
    }
}

export default connect(statusWrapper)(Login)
