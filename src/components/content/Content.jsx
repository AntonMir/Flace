import React from 'react';
import Icons from '../../assets/img/icons.svg'
import './content.css';

const Content = (props) => (
    <section className="content">

        <div className="posts">
            {/*  ТУТ ВЫВОДЯТСЯ ВСЕ ПОСТЫ  */}
        </div>


        {/*  ФОРМА ДЛЯ ДОБАВЛЕНИЯ ПОСТА  */}
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

        

        {/*  БОКОВАЯ ПАНЕЛЬ С КНОПКОЙ И РЕКЛАМОЙ  */}
        <aside className="sidebar">

            <div className="login">
                <form action="" className="login-form">
                    
                    <h2 className="login-title">Авторизация</h2>

                    {/*  Вход по Email, класс, имя(чтоб сервер понял, что за данные), минимальная длинна,обязательно для заполнения  */}
                    <input 
                        type="email" 
                        className="login-input login-email" 
                        name="email"     
                        minLength="3"              
                        required
                        placeholder="Введите email"
                    /> 
                    
                    {/*  Пароль для входа  */}
                    <input 
                        type="password" 
                        className="login-input login-password"
                        name="password"     
                        minLength="3"              
                        required
                        placeholder="Введите пароль"
                    />

                    <a href="/" className="login-forget">Забыли пароль?</a>

                    <button className="login-signin" type="submit">Войти</button>

                    <a href="/" className="login-signup">Регистрация</a>

                </form>
                {/* ./login-form */}

            </div>
            {/* ./login */}


            {/*  ВЕРХНЯЯ ЧАСТЬ САЙДБАРА  */}
            <div className="user">
                <div className="user-container">
                    
                    <div className="user-info">
                        <a href="/" className="author-link user-link">
                            <img src="../static/img/avatar.jpeg" alt="avatar" className="user-avatar author-avatar"/>
                        </a>
                        <a href="/" className="user-name"> </a>
                    </div>

                    {/*  РЕДАКТИРОВАНИЕ ЮЗЕРА  */}
                    <a href="/" className="edit">
                        <img className="icon icon-edit" src="../static/img/edit-button.svg" alt="edit"/>
                    </a>

                    {/*  ВЫКЛЮЧИТЬ ЮЗЕР  */}
                    <a href="/" className="exit">
                        <svg width="20" height="20" className="icon icon-exit">
                            <use xlinkHref={`${Icons}#exit`}/>
                        </svg>
                    </a>
                </div>
                {/* ./user-container */}

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

            </div>
            {/* ./user */}
                    
            {/*  БОКОВОЕ МЕНЮ  */}
            <div className="sidebar-nav">
                <ul className="sidebar-menu">
                    <li className="sidebar-menu-item">
                        <a href="/" className="sidebar-menu-link">Ответы</a>
                    </li>
                    <li className="sidebar-menu-item active">
                        <a href="/" className="sidebar-menu-link active">Комментарии</a>
                    </li>
                    <li className="sidebar-menu-item">
                        <a href="/" className="sidebar-menu-link">Оценки</a>
                    </li>
                    <li className="sidebar-menu-item">
                        <a href="/" className="sidebar-menu-link">Сохраненное</a>
                    </li>
                    <li className="sidebar-menu-item">
                        <a href="/" className="sidebar-menu-link">Подписки</a>
                    </li>
                    <li className="sidebar-menu-item">
                        <a href="/" className="sidebar-menu-link">Заметки</a>
                    </li>
                    <li className="sidebar-menu-item">
                        <a href="/" className="sidebar-menu-link">Игнор-лист</a>
                    </li>
                </ul>
            </div>
            {/* ./sidebar-nav */}

            {/*  ОПУБЛИКОВАТЬ ПОСТ  */}
            <a href="/" className="button button-new-post">
                <svg width="20" height="20" className="icon icon-fire">
                    <use xlinkHref={`${Icons}#fire`}/>
                </svg>
            Опубликовать пост
            </a>

            {/*  КОММЕНТАРИЙ ДНЯ  */}
            <div className="card">
                <div className="card-header">
                    <h2 className="card-title">Комментарий дня</h2>
                </div>
                <div className="card-body">
                    <a href="/" className="card-body-title">
                    Как обмануть банкомат, если вы хотите снять больше наличных
                    </a>
                    <p className="card-text">
                    Таким образом укрепление и развитие структуры требуют 
                    от нас анализа форм развития. Не следует, однако забывать, 
                    что реализация намеченных плановых заданий требуют от нас 
                    анализа позиций, занимаемых участниками в отношении 
                    поставленных задач. Задача организации, в особенности же 
                    консультация...
                    </p>
                </div>
            </div>
            {/* ./card */}

            {/*  РЕКЛАМА  */}
            <a href="/" className="ad"> </a>

        </aside>

    </section>
);

export default Content;