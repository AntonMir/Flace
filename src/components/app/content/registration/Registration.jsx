import React, { Component } from 'react';
// redux
import { connect } from 'react-redux'

// styles
import './registration.scss';

class Registration extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>    
                <form className={`${this.props.registration ? "registration visible" : "registration"}`} action="" method="post">

                    <h2 className="reg-title">Регистрация</h2>

                    {/* ИМЯ ПОЛЬЗОВАТЕЛЯ */}
                    <input 
                        type="text"
                        className="user-name-registration reg-input"
                        name="userName"     
                        minLength="1"              
                        required
                        placeholder="Введите имя пользователя"
                    />

                    {/* ПОЧТА */}
                    <input 
                        type="email"
                        className="email-registration reg-input"
                        name="email"     
                        minLength="1"              
                        required
                        placeholder="Введите email"
                    />

                    {/* ЗАДАТЬ ПАРОЛЬ */}
                    <input 
                        type="password" 
                        className="password-registration reg-input"
                        name="password"     
                        minLength="4"              
                        required
                        placeholder="Задайте пароль"
                    />

                    {/* ПОВТОРИТЬ ПАРОЛЬ */}
                    <input 
                        type="password" 
                        className="password-registration reg-input"
                        name="repit-password"     
                        minLength="4"              
                        required
                        placeholder="Повторите пароль"
                    />

                    <button className="reg-btn" type="submit">Подтвердить</button>

                </form>
            </>
        )
    }
}

function statusWrapper(state) {
    return {
        registration: state.registration
    }
}

export default connect(statusWrapper)(Registration)