// 1. Создание объекта с описанием
const myInfo = {
    name: 'Олег',
    age: 22,
    profession: 'Frontend Developer',

    // 2. Метод, который принимает имя и возвращает приветствие
    sayHello: function (userName) {
        return `Hello "${userName}"`;
    }
};

console.log(myInfo.sayHello('Олег')); // Пример использования метода

// 3. Массив объектов с описанием пользователей
const users = [
    { name: 'Иван', age: 30, isAdmin: false },
    { name: 'Мария', age: 25, isAdmin: false },
    { name: 'Олег', age: 22, isAdmin: true },
    { name: 'Светлана', age: 27, isAdmin: false },
    { name: 'Админ', age: 40, isAdmin: true }
];

// 4. Переменная для хранения количества обычных пользователей
let regularUserCount = 0;

// 5. Обход массива и подсчет обычных пользователей
for (let i = 0; i < users.length; i++) {
    if (!users[i].isAdmin) {
        regularUserCount += 1;
    }
}

// 6. Вывод результата в консоль
console.log('Количество обычных пользователей:', regularUserCount);
