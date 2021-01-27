import React, { Component } from 'react';
// styles
import './registration.scss';
// redux
import { registrationSucces } from '../../../../store/actions'
import { store } from '../../../../store/store'


export default class Registration extends Component {
    constructor(props) {
        super(props)
        this.state = {};
        this.registrationForm = this.registrationForm.bind(this)
    }

    registrationForm(event) {
        event.preventDefault();
        event.stopPropagation(); //остановить всплытие события 

        if( this.state.pass !== this.state.repitPass) {
            alert('Несовпадение паролей');
        } else {
            console.log('Пароли совпадают');

            store.dispatch(registrationSucces(!!this.state))

            console.log('this.state', this.state);
            console.log('store:', store.getState());
            
            //если выполняется условие в else, то отправляем на сервер даныне и переходим по ссылке
            this.props.history.push("/registrationSucces"); 

             

            const userRegistrationData = this.state.map((el) => ({
                userName: el.userName, 
                email: el.email, 
                pass: el.pass
            }))

            console.log('userRegistrationData', userRegistrationData);
        }
    }


    render() {
        return (
            <>    
                <form className="registration" onSubmit={this.registrationForm}>

                    <h2 className="reg-title">Регистрация</h2>

                    {/* ИМЯ ПОЛЬЗОВАТЕЛЯ */}
                    <input 
                        type="text"
                        className="user-name-registration reg-input"
                        name="userName"     
                        minLength="3"              
                        required
                        placeholder="Введите имя пользователя"
                        onChange={event => {this.setState({userName: event.target.value})}}
                    />

                    {/* ПОЧТА */}
                    <input 
                        type="email"
                        className="email-registration reg-input"
                        name="email"     
                        minLength="1"              
                        required
                        placeholder="Введите email"
                        onChange={event => {this.setState({email: event.target.value})}}
                    />

                    {/* ЗАДАТЬ ПАРОЛЬ */}
                    <input 
                        type="password" 
                        className="password-registration reg-input"
                        name="password"     
                        minLength="4"              
                        required
                        placeholder="Задайте пароль"
                        onChange={event => {this.setState({pass: event.target.value})}}
                    />

                    {/* ПОВТОРИТЬ ПАРОЛЬ */}
                    <input 
                        type="password" 
                        className="password-registration reg-input"
                        name="repit-password"     
                        minLength="4"              
                        required
                        placeholder="Повторите пароль"
                        onChange={event => {this.setState({repitPass: event.target.value})}}
                    />

                    <button className="reg-btn" type="submit">Подтвердить</button>

                </form>
            </>
        )
    }
}
