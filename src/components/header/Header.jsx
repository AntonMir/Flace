import React from 'react';
import search from '../../assets/img/search.svg'
import './header.css'
import Logo from '../mainLogo/logo.jsx'
import Search from '../search/search.jsx'
import BurgerMenu from '../burgerMenu/burgerMenu.jsx'


export default function Header(props) {
	return (
		<header className="header">
			<div className="header-wrapper">
	    		<Logo />
	    		<Search />
	    		<BurgerMenu />
    		</div>
    	</header>
	)
}
