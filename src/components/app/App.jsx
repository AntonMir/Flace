// react
import React from 'react'

// route
import { BrowserRouter as Router, Route } from "react-router-dom"

// components
// import Main from '../main/main.jsx'
import Header from './header/Header.jsx';
import Content from './content/Content.jsx';

// styles
import './app.scss'

// redux
import { Provider } from 'react-redux'
import { store } from '../../store/store.js'




function H111(props) {
	return (
		<h1>Big Dick</h1>		
	)
}


export default function App() {
	return (
		<>
    		<Router>
  				<Provider store={store}>
					<Header /> 
					<div>
						<Route exact path='/' component={Content}/>
						<Route exact path='/test' component={H111}/>
					</div>
				</Provider>	
			</Router>
		</>
	)
}
