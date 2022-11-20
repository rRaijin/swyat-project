// Завдання 1. Написати функцію, я ка приймає масив, додає до нього число "50" та повертає

const c = 50;

const arr1 = [5,10,15]

function plus50(array) {
    const newArray = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const res = element + c;
        newArray.push(res);
    }
    return newArray
}

const qq = plus50(arr1);
console.log('resultat: ', qq);

const x = 5;
// Завдання 2. Написати функцію, яка приймає числа: 1, 2 або 3 (тільки саме ці числа вона обробляє, примати може що завгодно),
// якщо це число 1 - функція додає до нього "х" (тобто 1+5) та повертає
// якщо це число 2 - просто повертає його
// якщо це число 3 - перетворює його на строку та повертає


function homework2(q) {
    let result1;
    switch (q) {
        case 1:
            result1 = 1 + x;
            break;

        case 2:
            result1 = q;
            break;

        case 3:
            result1 = String(3);
            break;    

        default:
            result1 = 'Не підходить'
            break;
    }
    return result1;
}

console.log(homework2(67));



// Завдання 3 ***(ультра важкість). Написати функцію, яка приймає функцію і виконує її.
const arr2 = [3];
const t = 100;

function funcforhom3(array) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const res1 = element + t;
        console.log(res1)
    }
}

function cl() {
    console.log('Я працюю!!!');
}

function homework3(func, args) {
    return args ? func(args): func();
}

homework3(cl);
homework3(funcforhom3, arr2);

// 4
function parne(y) {
    console.log(`${y} - це парне число, ${y - 5}`);
}

function neParne(y) {
    console.log(String(y), '- це непарне число');
}

function hw4(x) {
    if (x%2 === 0) {
        parne(x);
    } else {
        neParne(x);
    }
}

hw4(10);
