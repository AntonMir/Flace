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


class Sidebar extends Component {
    constructor(props) {
        super(props)
    }
     
    render() {

        return (
            <>  
                {/* <aside className="sidebar"> */}
                <aside className={`${this.props.sidebar ? "sidebar visible": "sidebar"}`}>
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

// -------------REDUX-обертка----------------
const mapSidebar = state => {
    return {
        sidebar: state.sidebar
    }
}

export default connect(mapSidebar)(Sidebar)
//----------------------------------------
       