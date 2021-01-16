// import { Component } from 'react'
import './logo.scss'
import logo from '../../assets/img/logo.svg'

import { Link } from "react-router-dom"


export default function Logo(props) {
	return (
		<>
			<Link className="logo" to="/">
				<img src={logo} alt=""/> 
			</Link>
		</>	
	)
}
