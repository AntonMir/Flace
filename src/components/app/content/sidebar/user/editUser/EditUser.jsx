import React from 'react';

import './editUser.scss'

export default function EditUser(props) {
    return (
        <> 
            <form className="edit-container">
                <h2 className="edit-title">Редактировать</h2>
                
                <label className="edit-label" htmlFor="">Ваш логин
                    <input 
                        className="edit-input edit-username" 
                        type="text" 
                        name="username"
                        minLength="3"
                        placeholder="логин"
                        defaultValue="ЕМАИЛ"
                        required 
                    /> 
                </label>

                
                <label className="edit-label" htmlFor="">Ваше фото
                    <input 
                        className="edit-input edit-photo" 
                        type="text" 
                        name="photo"
                        placeholder="URL-photo"
                        defaultValue="ссылкаааа"
                    />
                </label>

                <button className="edit-btn">Сохранить</button>

            </form>
            {/* ./edit-container */}
        </>
    )
}