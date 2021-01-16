//react
// import React, { Component } from 'react'
import React from 'react'
//components
// import Main from '../main/main.jsx'
import Header from '../Header/Header.jsx';
import Content from '../Content/Content.jsx';

//styles
import './app.scss'


export default function App() {
	return (
		<>
			<Header />   {/* это наш импортированный Header из Header.js */}
			<Content />
		</>
	)}
