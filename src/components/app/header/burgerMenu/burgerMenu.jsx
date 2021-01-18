import React, { Component } from 'react';
import { connect } from 'react-redux'
import { store } from '../../../../store/store'
// import Sidebar from '../../content/sidebar/Sidebar.jsx'

import './burgerMenu.scss'
import { toggleSidebar } from '../../../../store/actions'


class BurgerMenu extends Component {
    constructor(props) {
        super(props)
    }

    showSidebar = () => {
        store.dispatch(toggleSidebar(!this.props.sidebarStatus))
    }

    render() {
        return (
            <div
                onClick={this.showSidebar}
                className="menu-toggle"
                id="menu-toggle"
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        )
    }
}


const mapBurgerMenu = state => {
    return {
        sidebarStatus: state.sidebarStatus
    }
}

export default connect(mapBurgerMenu)(BurgerMenu)