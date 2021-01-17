import React from 'react';

import './navMenu.scss'

export default function NavMenu(props) {
	return (
        <>
            <nav className="header-nav">
                <ul className="header-menu">
                    <li className="nav-item"><a href="/">Свежее</a></li>
                    <li className="nav-item"><a href="/">Лучшее</a></li>
                    <li className="nav-item"><a href="/">Горячее</a></li>
                    <li className="nav-item"><a href="/">Подписки</a></li>
                </ul>
            </nav>
        </>
	)
}