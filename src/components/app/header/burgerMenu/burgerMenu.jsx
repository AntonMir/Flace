// react
import React, { Component } from 'react';
//styles
import './burgerMenu.scss'
//redux
// import { connect } from 'react-redux'
// import { store } from '../../../../store/store'
// import { toggleSidebar } from '../../../../store/actions'


export default class BurgerMenu extends Component {
    constructor(props) {
        super(props)
    }

    // ДАН_________________________________________________________
    // showSidebar = () => {
    //     store.dispatch(toggleSidebar(!this.props.sidebarStatus))
    // }
    // ____________________________________________________________

    render() {
        return (
            <div
                // onClick={this.showSidebar} //ДАН
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
// const mapBurgerMenu = state => {
//     return {
//         sidebarStatus: state.sidebarStatus
//     }
// }

// export default connect(mapBurgerMenu)(BurgerMenu)
// ______________________________________________________