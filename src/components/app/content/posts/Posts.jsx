import React, { Component } from 'react'
// img
import icon from '../../../../assets/img/icons.svg'
// styles
import './posts.scss'
// JSON to posts from server
import  SetPosts  from './PostsJSON'

function Post(props) {
    const {title, text, tags, author, date, like, comments, id} = props;

    return (
        
        <section className="post" key={id}>

            <div className="post-body">
                <h2 className="post-title">{title}</h2>
                <p className="post-text">{text}</p>

                <ul className="tags">
                    { tags.map((el) => {
                        return <li className="tag"><a href="/">{`#${el}`}</a></li>;
                    }) }
                </ul> 
            </div>

            <div className="post-footer">
                <div className="post-buttons">

                    <button className="post-button like">
                        <svg width="19" height="20" className="icon icon-like">
                            <use xlinkHref={`${icon}#like`} />
                        </svg>
                        <span className="like-counter">{like}</span>
                    </button>

                    <button className="post-button comments">
                        <svg width="21" height="21" className="icon icon-comment">
                            <use xlinkHref={`${icon}#comment`} />
                        </svg>
                        <span className="comments-counter">{comments}</span>
                    </button>

                    <button className="post-button save">
                        <svg width="19" height="19" className="icon icon-save">
                            <use xlinkHref={`${icon}#save`} />
                        </svg>
                    </button>

                    <button className="post-button share">
                        <svg width="17" height="19" className="icon icon-share">
                            <use xlinkHref={`${icon}#share`} />
                        </svg>
                    </button>
                </div>

                <div className="post-author">
                    <div className="author-about">
                        <a href="/" className="author-username">{author.displayName}</a>
                        <span className="post-time">{date}</span>
                    </div>
                    <a href="/" className="author-link">
                        <img src={author.photo} alt="avatar" className="author-avatar"/>
                    </a>
                </div>
            </div>

        </section>
    )
}

export default class Posts extends Component {
    constructor(props) {
        super(props)
    } 

    render() {
        return (
            <div className="posts">
                { SetPosts.allPosts.map( (post) => { return <Post {...post} key={post.id} /> }) }
            </div>
                
            // Ниже более длинная запись
            // return <Post title={post.title} text={post.text} tags={post.tags} author={post.author} date={post.date} like={post.like} comments={post.comments}/> 
        )
    }
}





