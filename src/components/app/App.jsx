//react
// import React, { Component } from 'react'
import React from 'react'
//components
// import Main from '../main/main.jsx'
import Header from './header/Header.jsx';
import Content from './content/Content.jsx';

//styles
import './app.scss'


import { BrowserRouter as Router, Route } from "react-router-dom"


function H111(props) {
	return (
		<h1>Big Dick</h1>		
	)
}


export default function App() {
	return (
		<>
    		<Router>
				<Header /> 
				<div>
					<Route exact path='/' component={Content}/>
					<Route exact path='/test' component={H111}/>
				</div>
			</Router>
		</>
	)
}
