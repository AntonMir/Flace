import React from 'react';

import Posts from './posts/Posts.jsx'
import AddPostForm from './addPostForm/AddPostForm.jsx'
import Registration from './registration/Registration.jsx'
import Sidebar from './sidebar/Sidebar.jsx'

import './content.css';

const Content = (props) => (
    <section className="content">
        <Posts />
        <AddPostForm />
        <Registration />
        <Sidebar />
    </section>
);

export default Content;