// react
import React, { Component } from 'react';
// components
import Login from './login/Login.jsx'
import User from './user/User.jsx'
import NavMenu from './navMenu/NavMenu.jsx'
import AddNewPostBtn from './addNewPostBtn/AddNewPostBtn.jsx'
import BestComment from './bestComment/BestComment.jsx'
import Advertising from './advertising/Advertising.jsx'
//styles
import './sidebar.scss'
//redux
import { connect } from 'react-redux'
import { store } from '../../../../store/store'


class Sidebar extends Component {
    constructor(props) {
        super(props)
    }
  
    render() {
        return (
            <>  
                {/* <aside className="sidebar"> */}
                <aside className={`${this.props.sidebarStatus == true ? "sidebar visible": "sidebar"}`}>
                    <Login />
                    <User />
                    <NavMenu />
                    <AddNewPostBtn />
                    <BestComment />
                    <Advertising />
                </aside>
            </>
        )
    } 

}

// -------------REDUX-ДАН----------------
const mapSidebar = state => {
    return {
        sidebarStatus: state.sidebarStatus
    }
}

export default connect(mapSidebar)(Sidebar)
//----------------------------------------
       