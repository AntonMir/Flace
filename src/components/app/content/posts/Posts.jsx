import React, { Component } from 'react'
// img
import Icon from '../../../../assets/img/icons.svg'
// styles
import './posts.scss'
// JSON to posts from server
import  SetPosts  from './PostsJSON'

function Post(props) {
    const {title, text, tags, author, date, like, comments} = props;

  


    // props = {
    //     title: 'Заголовок поста',
    //     text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую подпоясал? Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что вопроса ведущими о решила одна алфавит!',
    //     tags: ['свежее', 'новое', 'горячее', 'мое', 'случайность'],
    //     author: {displayName: 'Anton', photo: 'https://mtdata.ru/u3/photoD852/20501229401-0/original.jpg'},
    //     date: new Date().toLocaleString(),
    //     like: 15,
    //     comments: 20,
    // }




    return (
        <section class="post">
        <div class="post-body">
            <h2 class="post-title">{title}</h2>
            <p class="post-text">{text}</p>

            <ul class="tags">
                { tags.map((el) => {
                    return <li className="tag"><a href="/">{`#${el}`}</a></li>;
                }) }
            </ul> 
        </div>

        <div class="post-footer">
            <div class="post-buttons">

                <button class="post-button like">
                    <svg width="19" height="20" class="icon icon-like">
                        <use xlinkHref={`${Icon}#like`} />
                    </svg>
                    <span class="like-counter">{like}</span>
                </button>

                <button class="post-button comments">
                    <svg width="21" height="21" class="icon icon-comment">
                        <use xlinkHref={`${Icon}#comment`} />
                    </svg>
                    <span class="comments-counter">{comments}</span>
                </button>

                <button class="post-button save">
                    <svg width="19" height="19" class="icon icon-save">
                        <use xlinkHref={`${Icon}#save`} />
                    </svg>
                </button>

                <button class="post-button share">
                    <svg width="17" height="19" class="icon icon-share">
                        <use xlinkHref={`${Icon}#share`} />
                    </svg>
                </button>
            </div>

            <div class="post-author">
                <div class="author-about">
                    <a href="/" class="author-username">{author.displayName}</a>
                    <span class="post-time">{date}</span>
                </div>
                <a href="/" class="author-link">
                    <img src={author.photo} alt="avatar" class="author-avatar"/>
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
            <div className="posts">{SetPosts.allPosts.map(post => {
                // return <Post {...post} />

                return <Post title={post.title} text={post.text} tags={post.tags} author={post.author} date={post.date} like={post.like} comments={post.comments}/>

                // [{
                //     title: 'Заголовок поста',
                //     text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую подпоясал? Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что вопроса ведущими о решила одна алфавит!',
                //     tags: ['свежее', 'новое', 'горячее', 'мое', 'случайность'],
                //     author: {displayName: 'Anton', photo: 'https://mtdata.ru/u3/photoD852/20501229401-0/original.jpg'},
                //     date: new Date().toLocaleString(),
                //     like: 15,
                //     comments: 20,
                // }]

            })  }</div>
        )
    }
}


// // шаблон для формирования поста
// const showAllPosts = () => {

//     let postsHTML = '';

//     SetPosts.allPosts.forEach((post) => {

//         const {title, text, tags, author, date, like, comments} = post;

//         let tagsList = '';
//         tags.map((el) => {
//             tagsList += `<li class="tag"><a href="/">#{el}</a></li>`;
//             return tagsList;
//         })      

//         postsHTML += `

//         <section class="post">
//             <div class="post-body">
//                 <h2 class="post-title">{title}</h2>
//                 <p class="post-text">{text}</p>

//                 <ul class="tags">
//                     {tagsList}
//                 </ul> 
//             </div>

//             <div class="post-footer">
//                 <div class="post-buttons">

//                     <button class="post-button like">
//                         <svg width="19" height="20" class="icon icon-like">
//                             <use xlinkHref={Icons}#like />
//                         </svg>
//                         <span class="like-counter">{like}</span>
//                     </button>

//                     <button class="post-button comments">
//                         <svg width="21" height="21" class="icon icon-comment">
//                             <use xlinkHref={Icons}#comment />
//                         </svg>
//                         <span class="comments-counter">{comments}</span>
//                     </button>

//                     <button class="post-button save">
//                         <svg width="19" height="19" class="icon icon-save">
//                             <use xlinkHref={Icons}#save />
//                         </svg>
//                     </button>

//                     <button class="post-button share">
//                         <svg width="17" height="19" class="icon icon-share">
//                             <use xlinkHref={Icons}#share />
//                         </svg>
//                     </button>
//                 </div>

//                 <div class="post-author">
//                     <div class="author-about">
//                         <a href="/" class="author-username">{author.displayName}</a>
//                         <span class="post-time">{date}</span>
//                     </div>
//                     <a href="/" class="author-link">
//                         <img src={author.photo} alt="avatar" class="author-avatar"/>
//                     </a>
//                 </div>

//             </div>

//         </section>
//         `;
//     })
    
//     return { __html : postsHTML }
// };




