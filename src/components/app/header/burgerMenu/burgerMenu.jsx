import React, { Component } from 'react';

// import Sidebar from '../../content/sidebar/Sidebar.jsx'

import './burgerMenu.scss'

export default class BurgerMenu extends Component {
    constructor(props) {
        super(props)
        this.callback = null
    }

    addCallback(showSidebar) {
        this.callback = showSidebar
    }

    show() {
        try {
        this.callback()
        } catch {

        }
    }

    render() {
        return (
            <div onClick={this.show()} className="menu-toggle" id="menu-toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
        )
    }
}