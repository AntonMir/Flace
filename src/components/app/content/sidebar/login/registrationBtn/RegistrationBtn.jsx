import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// styles
import './registrationBtn.scss'

export default class RegistrationBtn extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Link to="/registration" className="login-signup">Регистрация</Link>
        )
    }
}

