import React from 'react';
import Icons from '../../../../../assets/img/icons.svg'
import EditBtn from '../../../../../assets/img/edit.png'
import Avatar from '../../../../../assets/img/avatar.jpeg'

import { Link } from "react-router-dom"

import EditUser from './editUser/EditUser.jsx'

import './user.scss'

export default function User(props) {
    return (
        <>
            {/*  ВЕРХНЯЯ ЧАСТЬ САЙДБАРА  */}
            <div className="user">
                <div className="user-container">
                    
                    <div className="user-info">
                        <Link to="/" className="author-link user-link">
                            <img src={`${Avatar}`} alt="avatar" className="user-avatar author-avatar"/>
                        </Link>
                        <a href="/" className="user-name"> </a>
                    </div>

                    {/*  РЕДАКТИРОВАНИЕ ЮЗЕРА  */}
                    <Link className="edit" to="/">
                        <img src={`${EditBtn}`} className="icon icon-edit" alt="edit"/>
                    </Link>

                    {/*  ВЫКЛЮЧИТЬ ЮЗЕР  */}
                    <Link className="exit" to="/">
                        <svg width="20" height="20" className="icon icon-exit">
                            <use xlinkHref={`${Icons}#exit`}/>
                        </svg>
                    </Link>

                </div>
                {/* ./user-container */}

                {/* Редактирование Пользователя */}
                <EditUser />

            </div>
            {/* ./user */}
        </>
    )
}