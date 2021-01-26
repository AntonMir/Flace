import React from 'react';

import './editUser.scss'

export default function EditUser(props) {
    return (
        <> 
            <form className="edit-container">
                <h2 className="edit-title">Редактировать профиль</h2>
                
                <label className="edit-label" htmlFor="">
                    <input 
                        className="edit-input edit-username" 
                        type="text" 
                        name="username"
                        minLength="3"
                        placeholder="Введите новое имя пользователя"
                    /> 
                </label>

                <label className="edit-label" htmlFor="">
                    <input 
                        className="edit-input edit-photo" 
                        type="text" 
                        name="photo"
                        placeholder="URL-photo"
                    />
                </label>

                <label className="edit-label" htmlFor="">
                    <input 
                        className="edit-input edit-email" 
                        type="email" 
                        name="email"
                        minLength="3"
                        placeholder="Введите новый email"
                    /> 
                </label>

                <label className="edit-label" htmlFor="">
                    <input 
                        className="edit-input edit-password" 
                        type="password" 
                        name="password"
                        minLength="3"
                        placeholder="Задайте новый пароль"
                    /> 
                </label>

                <label className="edit-label" htmlFor="">
                    <input 
                        className="edit-input edit-password" 
                        type="password" 
                        name="password"
                        minLength="3"
                        placeholder="Повторите пароль"
                    /> 
                </label>

                


                <button className="edit-btn">Сохранить</button>

            </form>
            {/* ./edit-container */}
        </>
    )
}