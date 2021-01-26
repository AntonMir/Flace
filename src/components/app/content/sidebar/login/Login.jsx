import React, { Component } from 'react';
// redux
import RegistrationBtn from './registrationBtn/RegistrationBtn';
// styles
import './login.scss'

class Login extends Component {
    constructor(props) {
        super(props)
    }

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

                    <RegistrationBtn />

                </div>
                {/* ./login */}
            </>
        )
    }
}


export default Login
