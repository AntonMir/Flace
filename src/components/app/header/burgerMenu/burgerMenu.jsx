// react
import React, { Component } from 'react';
//styles
import './burgerMenu.scss'
//redux
import { connect } from 'react-redux'
import { store } from '../../../../store/store'
import { toggleSidebar } from '../../../../store/actions'


class BurgerMenu extends Component {
    constructor(props) {
        super(props)
    }

    // ДАН_________________________________________________________
    showSidebar = () => {
        // меняем наш state меняя его значение на true
        store.dispatch(toggleSidebar(!this.props.sidebar))        
    }
    // ____________________________________________________________

    render() {
        return (
            <div
                onClick={this.showSidebar} //ДАН
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

// ДАН__________________________________________________
function mapBurgerMenu(state) {
    return {
        sidebar: state.sidebar
    }
}

export default connect(mapBurgerMenu)(BurgerMenu)
// ______________________________________________________