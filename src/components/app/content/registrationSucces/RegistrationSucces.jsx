import React, { Component } from 'react';
// styles
import './registrationSucces.scss';


export default class RegistrationSucces extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='registration-succes-window'>
                <h1>Вы успешно зарегистрировались!</h1>
            </div>
        )
    }
}
