// ТУТ ПОЛУЧАЕМ JSON С СЕРВЕРА ДЛЯ ОТРИСОВИ ПОСТОВ

const setPosts = {
    allPosts: [
        {
            id: 0,
            title: 'Заголовок поста',
            text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую подпоясал? Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что вопроса ведущими о решила одна алфавит!',
            tags: ['свежее', 'новое', 'горячее', 'мое', 'случайность'],
            author: {displayName: 'Anton', photo: 'https://mtdata.ru/u3/photoD852/20501229401-0/original.jpg'},
            date: new Date().toLocaleString(),
            like: 15,
            comments: 20,
        },
        {
            id: 1,
            title: 'Заголовок поста2',
            text: 'Послушай, там далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую подпоясал? Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что вопроса ведущими о решила одна алфавит!',
            tags: ['свежее', 'новое', 'горячее', 'мое', 'случайность'],
            author: {displayName: 'Alena', photo: 'https://sun7-6.userapi.com/c631324/v631324788/3d341/-HS8DJrI28A.jpg'},
            date: new Date().toLocaleString(),
            like: 45,
            comments: 12,
        },
        {
            id: 2,
            title: 'Заголовок поста3',
            text: 'АЗАЗА, послушай, там далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую подпоясал? Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что вопроса ведущими о решила одна алфавит!',
            tags: ['свежее', 'новое', 'горячее', 'мое', 'случайность'],
            author: {displayName: 'Vasya', photo: 'https://clutch.ua/images/2018/05/17/9k18mNwuhpvF2rZC8USRxlViVthICHjQ.jpg'},
            date: new Date().toLocaleString(),
            like: 4,
            comments: 12,
        },
    ],
}

export default setPosts


