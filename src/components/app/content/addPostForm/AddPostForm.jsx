import React from 'react';
import Icons from '../../../../assets/img/icons.svg'

import './addPostForm.scss'


export default function AddPostForm(props) {
	return (
        <>
            <form action="#" className="add-post">

                <input 
                    type="text" 
                    name="post-title" 
                    className="add-title" 
                    placeholder="Заголовок поста"
                />

                <textarea 
                    name="post-text" 
                    id="text" 
                    className="add-text" 
                    placeholder="Текст вашего поста">
                </textarea>

                <div className="add-buttons">

                <button type="submit" className="button add-button">
                    <svg className="icon icon-fire">
                        <use xlinkHref={`${Icons}#fire`}/>
                    </svg>
                    Опубликовать пост
                </button>

                <button className="button button-outline">
                    <svg className="icon icon-video">
                        <use xlinkHref={`${Icons}#video`}/>
                    </svg>
                    Видео
                </button>

                <button className="button button-outline">
                    <svg className="icon icon-photo">
                        <use xlinkHref={`${Icons}#photo`}/>
                    </svg>
                    Фото
                </button>
                
                </div>
            </form>
        </>
	)
}