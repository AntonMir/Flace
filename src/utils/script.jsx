const regExpValidEmail = /^\w+@\w+\.\w{2,}$/;


// пародия на БД
const listUsers = [
    {
        id: '01',
        email: 'toshik124@rambler.ru',
        password: '123123',
        displayName: 'AntonJS',
        photo: 'https://yt3.ggpht.com/a/AATXAJxa1hziQOAVWfISBwx2XAWc7alZsxGUsTaFPg=s900-c-k-c0xffffffff-no-rj-mo',
    },
    {
        id: '02',
        email: 'alena@mail.com',
        password: '123123',
        displayName: 'Alenka-LOVE',
        photo: 'https://yt3.ggpht.com/a/AATXAJxa1hziQOAVWfISBwx2XAWc7alZsxGUsTaFPg=s900-c-k-c0xffffffff-no-rj-mo',
    },
];


// объект для работы с БД
const setUsers = {
    user: null, // авторизованный юзер
    // обычные функции, в рамках объекта можно не писать function...
    logIn(email, password, handler) {
        if(!regExpValidEmail.test(email)) {
            console.log(!regExpValidEmail.test(email));
            console.log(email);
            return alert('email не валиден');
        }
        console.log(email, password);
        const user = this.getUser(email);
        if(user && user.password === password) {
            this.authorizedUser(user);
            handler();
            console.log(this.user);
        } else {
            alert('Пользователь с такими данными не найден!')
        }
    },

    logOut(handler) {
        console.log('Выход');
        this.user = null;
        handler();
    },

    signUp(email, password, handler) {
        console.log('Регистрация');

        if(!regExpValidEmail.test(email)) {
            return alert('email не валиден');
        }

        if ( password.length < 4) {
            return alert('Длинна пароля должна составлять не менее 4 символов')
        }
        
        if (!this.getUser(email)) {
            const user = {
                email, 
                password, 
                displayName: email.substring(0, email.indexOf('@')), 
                photo: 'https://yt3.ggpht.com/a/AATXAJxa1hziQOAVWfISBwx2XAWc7alZsxGUsTaFPg=s900-c-k-c0xffffffff-no-rj-mo'
            };

            listUsers.push(user)
            console.log(listUsers);
            this.authorizedUser(user);
            handler();
        } else {
            alert('Пользователь уже зареган')
        }
    },

    editUser(userName, userPhoto, handler) {

        if (userName) {
            this.user.displayName = userName;
        }

        if (userPhoto) {
            this.user.photo = userPhoto;
        }

        handler();
    },

    getUser(email) {
        return listUsers.find(item => item.email === email)
    },

    authorizedUser(user) {
        this.user = user;
    } 
}

// смена экрана регистрации на окно залогиненного пользователя и обратно
//  зависит от того, есть ли в setUsers.user залогиненый пользователь
const toggleAuthDom = () => {
    const user = setUsers.user;
    console.log('user: ', user);
    
    if (user) {
        document.querySelector('.login').style.display = 'none';
        document.querySelector('.user').style.display = '';
        document.querySelector('.button-new-post').style.display = '';
        document.querySelector('.user-name').textContent = user.displayName;
        document.querySelector('.user-avatar').src = user.photo ? user.photo : document.querySelector('.user-avatar').src;
    } else {
        document.querySelector('.login').style.display = '';
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.button-new-post').style.display = 'none';
        document.querySelector('.add-post').classList.remove('active');
        document.querySelector('.posts').style.display = '';
    }
}

// посты для БД
const setPosts = {
    allPosts: [
        {
            title: 'Заголовок поста',
            text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую подпоясал? Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что вопроса ведущими о решила одна алфавит!',
            tags: ['свежее', 'новое', 'горячее', 'мое', 'случайность'],
            author: {displayName: 'Anton', photo: 'https://mtdata.ru/u3/photoD852/20501229401-0/original.jpg'},
            date: '11.11.2020, 20:54:00',
            like: 15,
            comments: 20,
        },
        {
            title: 'Заголовок поста2',
            text: 'Послушай, там далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую подпоясал? Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что вопроса ведущими о решила одна алфавит!',
            tags: ['свежее', 'новое', 'горячее', 'мое', 'случайность'],
            author: {displayName: 'Alena', photo: 'https://sun7-6.userapi.com/c631324/v631324788/3d341/-HS8DJrI28A.jpg'},
            date: '11.11.2020, 20:54:00',
            like: 45,
            comments: 12,
        },
        {
            title: 'Заголовок поста3',
            text: 'АЗАЗА, послушай, там далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую подпоясал? Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что вопроса ведущими о решила одна алфавит!',
            tags: ['свежее', 'новое', 'горячее', 'мое', 'случайность'],
            author: {displayName: 'Vasya', photo: 'https://clutch.ua/images/2018/05/17/9k18mNwuhpvF2rZC8USRxlViVthICHjQ.jpg'},
            date: '11.11.2020, 20:54:00',
            like: 45,
            comments: 12,
        },
    ],
}

// содержимое постов
const showAllPosts = () => {

    let postsHTML = '';

    setPosts.allPosts.forEach((post) => {

        const {title, text, tags, author, date, like, comments} = post;

        let tagsList = '';
        tags.map((el) => {
            tagsList += `<li class="tag"><a href="#">#${el}</a></li>`;
            return tagsList;
        })      

        postsHTML += `
            <!-- ТЕКСТ ПОСТА С ЗАГОЛОВКОМ -->
            <section class="post">
                <div class="post-body">
                    <h2 class="post-title">${title}</h2>
                    <p class="post-text">${text}</p>

                    <!-- ТЭГИ ПОД ПОСТОМ -->
                    <ul class="tags">
                        ${tagsList}
                    </ul> 
                </div>

                <div class="post-footer">
                    <!-- ЛАЙК + КОММЕНТ + СОХРАНИТЬ + ОТПРАВИТЬ -->
                    <div class="post-buttons">

                        <button class="post-button like">
                            <svg width="19" height="20" class="icon icon-like">
                                <use xlink:href="../static/img/icons.svg#like"></use>
                            </svg>
                            <span class="like-counter">${like}</span>
                        </button>

                        <button class="post-button comments">
                            <svg width="21" height="21" class="icon icon-comment">
                                <use xlink:href="../static/img/icons.svg#comment"></use>
                            </svg>
                            <span class="comments-counter">${comments}</span>
                        </button>

                        <button class="post-button save">
                            <svg width="19" height="19" class="icon icon-save">
                                <use xlink:href="../static/img/icons.svg#save"></use>
                            </svg>
                        </button>

                        <button class="post-button share">
                            <svg width="17" height="19" class="icon icon-share">
                                <use xlink:href="../static/img/icons.svg#share"></use>
                            </svg>
                        </button>
                    </div>
                    <!-- ./post-buttons -->

                    <!-- АВТОР ПОСТА - ПРАВО-НИЗ -->
                    <div class="post-author">
                        <div class="author-about">
                            <a href="#" class="author-username">${author.displayName}</a>
                            <span class="post-time">${date}</span>
                        </div>
                        <a href="#" class="author-link">
                            <img src="${author.photo}" alt="avatar" class="author-avatar">
                        </a>
                    </div>
                
                </div>
                <!-- /.post-body -->

            </section>
            <!-- /.post -->
        `;
    })

    document.querySelector('.posts').innerHTML = postsHTML;

};

// показать/скрыть форму для нового поста
const showNewPostForm = () => {
        
    document.querySelector('.button-new-post').addEventListener('click', (event) => {
        event.preventDefault();
        const user = setUsers.user;

        if (user) {
            document.querySelector('.add-post').classList.add('active');
            document.querySelector('.posts').style.display = 'none';
        }
    })
}

// добавление поста на ленту постов
const addNewPostToAllPost = () => {
    document.querySelector('.add-post').addEventListener('submit', (event) => {
        event.preventDefault();
        
        const data = new Date();
        const dateNow = data.getFullYear()+'.'+data.getMonth()+'.'+data.getDate()+', '+data.getHours()+':'+data.getMinutes()+':'+data.getSeconds();

        const postAuthor = setUsers.user.displayName;
        const postAuthorPhoto = setUsers.user.photo;
        console.log('setUsers.user ',setUsers.user);
        console.log('setUsers.user.photo ',setUsers.user.photo);

        const newPost = [{
            title: document.querySelector('.add-title').value,
            text: document.querySelector('.add-text').value,
            tags: ['свежее', 'новое', 'горячее', 'мое', 'случайность'],
            author: {displayName: postAuthor, photo: postAuthorPhoto},
            date: dateNow,
            like: 0,
            comments: 0,
        }]
        
        setPosts.allPosts.unshift(...newPost);

        document.querySelector('.add-post').classList.remove('active');
        document.querySelector('.posts').style.display = '';

        showAllPosts();

        console.log('setPosts.allPosts', setPosts.allPosts);
    })
}


// инициализация все функций

    
    // отслеживаем клик по кнопке меню и запускаем функцию 
    menuToggle.addEventListener('click', function (event) {
        // отменяем стандартное поведение ссылки
        event.preventDefault();
        // вешаем класс на меню, когда кликнули по кнопке меню 
        menu.classList.toggle('visible');
    })

    // Вход
    document.querySelector('.login-form').addEventListener('submit', (event) => {
        event.preventDefault();
        setUsers.logIn(document.querySelector('.login-email').value, document.querySelector('.login-password').value, toggleAuthDom);
        document.querySelector('.login-form').reset();
        document.querySelector('.edit-container').classList.remove('visible');
    })

    // Регистрация
    document.querySelector('.login-signup').addEventListener('click', (event) => {
        event.preventDefault();
        setUsers.signUp(document.querySelector('.login-email').value, document.querySelector('.login-password').value, toggleAuthDom);
        document.querySelector('.login-form').reset();
        document.querySelector('.edit-container').classList.remove('visible');
    })

    // РАЗЛОГИН
    document.querySelector('.exit').addEventListener('click', (event) => {
        event.preventDefault();
        setUsers.logOut(toggleAuthDom);
    })

    //показать/скрыть "РЕДАКТИРОВАНИЕ"
    document.querySelector('.edit').addEventListener('click', (event) => {

        // подставляем значения ЮЗЕРА в поля редактирования
        if (document.querySelector('.edit-username').value !== setUsers.user.displayName) {
        document.querySelector('.edit-username').value = setUsers.user.displayName;
        }    
        
        if (document.querySelector('.edit-photo').value !== document.querySelector('.user-avatar').src) {
        document.querySelector('.edit-photo').value = document.querySelector('.user-avatar').src;
        }    

        event.preventDefault();
        document.querySelector('.edit-container').classList.toggle('visible');
    })

    // Сохраняем новый логин и новую фотку
    document.querySelector('.edit-container').addEventListener('submit', event => {
        event.preventDefault();
        setUsers.editUser(document.querySelector('.edit-username').value, document.querySelector('.edit-photo').value, toggleAuthDom);
        document.querySelector('.edit-container').classList.remove('visible');
    })

    showAllPosts();
    showNewPostForm();
    addNewPostToAllPost();
    toggleAuthDom();

    