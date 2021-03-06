import React from 'react';
import { Link } from 'react-router-dom';
import Icons from '../../../../../assets/img/icons.svg'

import './addNewPostBtn.scss'

export default function AddNewPostBtn(props) {
    return (
        <>
            {/*  ОПУБЛИКОВАТЬ ПОСТ  */}
            <Link to="/addNewPost" className="button button-new-post">
                <svg width="20" height="20" className="icon icon-fire">
                    <use xlinkHref={`${Icons}#fire`}/>
                </svg>
            Опубликовать пост
            </Link>
        </>
    )
}