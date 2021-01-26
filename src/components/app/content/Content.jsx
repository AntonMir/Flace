import React, { Component } from 'react';
// routing
import { BrowserRouter as Router, Route } from "react-router-dom"
// components
import Posts from './posts/Posts.jsx'
import AddPostForm from './addPostForm/AddPostForm.jsx'
import Registration from './registration/Registration.jsx'
import Sidebar from './sidebar/Sidebar.jsx'
// styles
import './content.css';

export default class Content extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <>
                <section className="content">
                    <Route exact path='/' component={Posts}/>
                    <Route exact path='/addNewPost' component={AddPostForm}/>
                    <Route exact path='/registration' component={Registration}/>
                    <Sidebar />
                </section>
            </>
        )
    }
}
