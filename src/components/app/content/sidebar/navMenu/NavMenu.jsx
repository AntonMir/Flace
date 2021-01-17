import React from 'react';

import './navMenu.scss'

export default function NavMenu(props) {
    return (
        <>
            {/*  БОКОВОЕ МЕНЮ  */}
            <div className="sidebar-nav">
                <ul className="sidebar-menu">
                    <li className="sidebar-menu-item">
                        <a href="/" className="sidebar-menu-link">Ответы</a>
                    </li>
                    <li className="sidebar-menu-item active">
                        <a href="/" className="sidebar-menu-link active">Комментарии</a>
                    </li>
                    <li className="sidebar-menu-item">
                        <a href="/" className="sidebar-menu-link">Оценки</a>
                    </li>
                    <li className="sidebar-menu-item">
                        <a href="/" className="sidebar-menu-link">Сохраненное</a>
                    </li>
                    <li className="sidebar-menu-item">
                        <a href="/" className="sidebar-menu-link">Подписки</a>
                    </li>
                    <li className="sidebar-menu-item">
                        <a href="/" className="sidebar-menu-link">Заметки</a>
                    </li>
                    <li className="sidebar-menu-item">
                        <a href="/" className="sidebar-menu-link">Игнор-лист</a>
                    </li>
                </ul>
            </div>
            {/* ./sidebar-nav */}
        </>
    )
} 