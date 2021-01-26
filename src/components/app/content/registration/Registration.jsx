import React, { Component, PureComponent } from 'react';
// styles
import './registration.scss';
// redux
import { sendJson } from '../../../../store/actions'
import { store } from '../../../../store/store'
// import { data } from 



export default class Registration extends Component {
    constructor(props) {
        super(props)
        this.state = {};
        this.registrationForm = this.registrationForm.bind(this)
    }

    // getAny() {
    //     сделать запрос
    //     получить ответ
    //     положить в this.state через this.setState

    // }

    registrationForm(event) {
        event.preventDefault();
        event.stopPropagation(); //остановить всплытие события 

        console.log('e.target', event.target);
        console.log('e.target.value', event.target.value);
        console.log('this.state', this.state);

        // fetch('127.0.0.1:3000/registr',
        // {
        //     method: 'POST',
        //     body: JSON.stringify(this.state),
        //     headers: {
        //         'Content-Type': "application/json"
        //     }
        // }).then(response => response.json())
        //   .then(data => store.dispatch(sendJson(data)) )

        store.dispatch(sendJson(this.state))
    }


    // componentDidMount() {
    //     this.getAny()
    // }
    // onclick, onChange, onSubmit, onKeydown, onKeypress, onKeyapp, onBlure

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
                        maxLength="1"              
                        required
                        placeholder="Введите имя пользователя"
                        onBlur={event => {console.log("onBlur");}} 
                        onKeyUp={event => {console.log("onKeyUp");}} 
                        onKeyDown={event => {console.log("onKeydown");}} 
                        onKeyPress={event => {console.log("onKeypress");}} 
                        onFocus={event => {console.log("onFocus");}} 
                        onCut={event => {console.log("onCut");}} 
                        onChange={event => {
                            console.log("onChange");
                            this.setState({userName: event.target.value})}}
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
