import React from 'react';
// import Icons from '../../../../assets/img/icons.svg'

import Login from './login/Login.jsx'
import User from './user/User.jsx'
import NavMenu from './navMenu/NavMenu.jsx'
import AddNewPostBtn from './addNewPostBtn/AddNewPostBtn.jsx'
import BestComment from './bestComment/BestComment.jsx'
import Advertising from './advertising/Advertising.jsx'

import './sidebar.scss'

export default function Sidebar(props) {
    return (
        <>
            {/*  БОКОВАЯ ПАНЕЛЬ С КНОПКОЙ И РЕКЛАМОЙ  */}
            <aside className="sidebar">
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
       