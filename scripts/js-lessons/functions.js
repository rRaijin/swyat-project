// Функції

function sum(a = 0, b = 0) {
    return a + b;
}

function sumEvenOnly(a = 0, b = 0) {
    // Суммує тільки четніе числа
    if (a%2 === 0) {
        return a + b;
    } else {
        return b;
    }
}

function printEqual(x, y) {
    // 1 спосіб
    let text = 'не дорівнює';
    if (x === y) {
        text = 'дорівнює';
    }

    // 2 спосіб
    // const text = (x === y) ? 'дорівнює' : 'не дорівнює';

    // 3 спосіб
    // let text = 'не дорівнює';
    // if (x === y) text = 'дорівнює';

    // console.log('Змінна ', x, text, 'змінній ', y, '!');
}

// Example 1
printEqual(15, 20);
const x = sum(4, 10);
// console.log('result X: ', x);
const y = sum(6, x);


const arr1 = [2, 3, 4, 5, 6, 7, 8, 9, 10]; // => 5, 7, 9
let res = 0;
for (let index = 0; index < arr1.length; index++) {
    const el = arr1[index];
    res = sumEvenOnly(el, res);
}
// console.log('res: ', res);

// Звідки починаємо ; Як довго ; Шаг
// for (let index = 3; index < arr1.length; index=index+2) {}


// Завдання №1. Записати функцію, яка приймає 2 будь-яких числа, перемножує їх та повертає результат.
// Відповідь записати тут
function mnojennya (z, y, x) {
    // x = 3
    // y = 2
    // z = 0
    const result = x * 5 + z; // 15
    return result + y;
}

const q = mnojennya(0, 2, 3) * 2;
console.log('results: ', q); // 34

// Ключове слово, позначає, що це є функція - "function", після цього пишемо ім'я функції, 
// круглі дужки, в них вказуємо параметри, що приймаються, а потім фігурні дужки - саме тіло функції.
function func1 (name) {
    // console.log('Привіт, ', name);
    return 42;
}

const x1 = func1('Svyat!');
// console.log('x1: ', x1);
// console.log('перемноження1 ', u);


// Завдання №2. Скористатися функцією із завдання 1 для перемноження усіх чисел в массиві:
const arr2 = [2, 3, 4, 5];
// Відповідь записати тут
const res4 = arr2[0] * [1] * [2] * [3]
// console.log('перемноження2 ', res4);
