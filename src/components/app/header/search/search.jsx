import React from 'react';
import search from '../../../../assets/img/search.svg'
import './search.scss'


export default function Search(props) {
	return (
        <div className="input-group search">
            <input type="search" className="search-input" placeholder="Поиск по сайту"/>
            <button className="search-button">
                <img src={search} alt=""/>
            </button>
        </div>
	)
}
