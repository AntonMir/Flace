import React, {Component} from 'react';
import './header.scss'
import Logo from './logo/logo.jsx'
import Search from './search/search.jsx'
import BurgerMenu from './burgerMenu/burgerMenu.jsx'
import NavMenu from './navMenu/NavMenu.jsx'


export default function Header(props) {
	return (
		<header className="header">
			<div className="header-wrapper">
	    		<Logo />
				<NavMenu />
	    		<Search />
	    		<BurgerMenu />
    		</div>
    	</header>
	)
}
