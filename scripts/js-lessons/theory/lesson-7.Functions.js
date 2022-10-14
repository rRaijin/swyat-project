// Функція повертає результат додавання двох чисел
function sum(a = 0, b = 0) {
    return a + b;
}

// Приклад
const x = sum(4, 10);
console.log('result X: ', x);
const y = sum(6, x);
const k = sum(5, x);
console.log('k: ', k);




// Додає "a" та "b" і повертає результат тільки якщо "а" - парне число, інакше просто повертає "b"
function sumEvenOnly(a = 0, b = 0) {
    if (a%2 === 0) {
        return a + b;
    } else {
        return b;
    }
}

// Приклад
const arr1 = [2, 3, 4, 5, 6, 7, 8, 9, 10]; // => 5, 7, 9
let res = 0;
for (let index = 0; index < arr1.length; index++) {
    const el = arr1[index];
    res = sumEvenOnly(el, res);
}
console.log('res: ', res);




// Функція не повертає нічого, лише за умовою виводить сформований текст у консоль
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

    console.log('Змінна ', x, text, 'змінній ', y, '!');
}

// Приклад
printEqual(15, 20);
