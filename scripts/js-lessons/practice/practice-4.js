// Завдання №1. Написати функцію: Якщо число кратне 3(трьом), 
// функція збільшує його вдвічі та повертає, якщо ні - результат НЕ ПОВЕРТАЄ, 
// а лише виводить у консоль це число.

const number1 = 30;
const number2 = 9;
const number3 = 8;
const number4 = 10;


function multipleofthree(x) {
    if (x%3 === 0) {
        return x * 2;
    } else {
        console.log(x);
    }
}
console.log(multipleofthree(number1));
console.log(multipleofthree(number2));
console.log(multipleofthree(number3));
console.log(multipleofthree(number4));
// Завдання №2. Написати функцію з використанням switch-case. 
// Функція приймає число (1, 2 або 3), якщо це 1 - збільшує вдвічі і повертає, 
// якщо 2 - просто повертає його, якщо 3 - перетворює на строку та повертає.



function swcase1 (w) {
    let result1;
    switch (w) {
        case 1:
            result1 = 1 * 2;
            break;

        case 2:
            result1 = 3;
            break;

        case 3:
            result1 = String(3);
            break;    

        default:
            console.log("не получилось");
            break;
    }
    return result1;
}

console.log(swcase1(1));


function example (k) {
    let result;
    switch (k) {
        case 4:
            result = 4 * 5;
            break;
    
        case 5:
            result = 5 * 2;
            console.log('Це число 5!');
            break;

        default:
            result = 0;
            console.log('Це не 5 і не 4');
            break;
    }
    return result;
}

console.log(example(4));
