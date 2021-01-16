import React from 'react';
import logo from '../../assets/img/logo.svg'
import search from '../../assets/img/search.svg'
import './header.css'

const Header = (props) => (

    <header>
        <div className="header-wrapper">

            {/*  Логотип  */}
            <a href="/" className="logo">
                <img src={logo} alt=""/>   
            </a>

            {/*  меню навигации  */}
            <nav className="header-nav">
                <ul className="header-menu">
                <li className="nav-item"><a href="/">Свежее</a></li>
                <li className="nav-item"><a href="/">Лучшее</a></li>
                <li className="nav-item"><a href="/">Горячее</a></li>
                <li className="nav-item"><a href="/">Подписки</a></li>
                </ul>
            </nav>

            {/*  поиск по сайту  */}
            <div className="input-group search">
                <input type="search" className="search-input" placeholder="Поиск по сайту"/>

                <button className="search-button">
                    <img src={search} alt=""/>
                </button>

            </div>

            {/*  BURGER MENU  */}
            <a href="/" className="menu-toggle" id="menu-toggle">
                <span></span>
                <span></span>
                <span></span>
            </a>

        </div>
        {/*  /.header-wrapper  */}

    </header>
);

export default Header;

