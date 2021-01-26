import React, { Component } from 'react'
// img
import Icons from '../../../../assets/img/icons.svg'
// styles
import './posts.scss'
// JSON to posts from server
import  SetPosts  from './PostsJSON'

export default class Posts extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="posts" dangerouslySetInnerHTML={showAllPosts()}></div>
        )
    }
}


// шаблон для формирования поста
const showAllPosts = () => {

    let postsHTML = '';

    SetPosts.allPosts.forEach((post) => {

        const {title, text, tags, author, date, like, comments} = post;

        let tagsList = '';
        tags.map((el) => {
            tagsList += `<li class="tag"><a href="/">#${el}</a></li>`;
            return tagsList;
        })      

        postsHTML += `

        <section class="post">
            <div class="post-body">
                <h2 class="post-title">${title}</h2>
                <p class="post-text">${text}</p>

                <ul class="tags">
                    ${tagsList}
                </ul> 
            </div>

            <div class="post-footer">
                <div class="post-buttons">

                    <button class="post-button like">
                        <svg width="19" height="20" class="icon icon-like">
                            <use xlink:href=${Icons}#like />
                        </svg>
                        <span class="like-counter">${like}</span>
                    </button>

                    <button class="post-button comments">
                        <svg width="21" height="21" class="icon icon-comment">
                            <use xlink:href=${Icons}#comment />
                        </svg>
                        <span class="comments-counter">${comments}</span>
                    </button>

                    <button class="post-button save">
                        <svg width="19" height="19" class="icon icon-save">
                            <use xlink:href=${Icons}#save />
                        </svg>
                    </button>

                    <button class="post-button share">
                        <svg width="17" height="19" class="icon icon-share">
                            <use xlink:href=${Icons}#share />
                        </svg>
                    </button>
                </div>

                <div class="post-author">
                    <div class="author-about">
                        <a href="/" class="author-username">${author.displayName}</a>
                        <span class="post-time">${date}</span>
                    </div>
                    <a href="/" class="author-link">
                        <img src=${author.photo} alt="avatar" class="author-avatar"/>
                    </a>
                </div>

            </div>

        </section>
        `;
    })
    
    return { __html : postsHTML }
};




