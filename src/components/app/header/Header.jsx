import React from 'react';
// styles
import './header.scss'
// components
import Logo from './logo/logo.jsx'
import NavMenu from './navMenu/NavMenu.jsx'
import Search from './search/search.jsx'
import BurgerMenu from './burgerMenu/burgerMenu.jsx'


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
