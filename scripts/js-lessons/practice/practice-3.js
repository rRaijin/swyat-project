// Завдання №1. Написати функцію: Якщо число парне, функція повертає його, якщо ні - збільшує вдвічі та повертає.

// Рішення
const str5 = 22;
const str6 = 9;
const str7 = 8;
const str8 = 7;

function evenNumber(x) {
    if (x%2 === 0) {
        return x;
    } else {
        return x * 2;
    }
}
console.log(evenNumber(str5));
console.log(evenNumber(str6));
console.log(evenNumber(str7));
console.log(evenNumber(str8));

// Приклад до завдання 1:
const str1 = 22;
const str2 = 'cat';
const str3 = 8;
const str4 = 'dog';
//Функція, яка приймає змінну, якщо це число - зменшує вдвічі та повертає, якщо ні - просто повертає з дописом, що це не число
function convertStr(x) {
    let result = 'Це не число: ';
    if (typeof x === 'number') {
        result = x / 2;
    } else {
        result = result + x;
    }
    return result;
}

console.log(convertStr(str1));
console.log(convertStr(str2));
console.log(convertStr(str3));
console.log(convertStr(str4));




// Завдання №2. Просто вивести у консоль кожний елемент масиву, що приймає функція, нічого повертати та іншого робити не треба
// приклад нижче більш складний, він лише для використання циклу "FOR", який треба застосувати

// Рішення
// const arr10 = [1, 2, 3, 17, 25, 4, 0, 8];

const arr90 = [1, 3, 5, 7, 9];
// обходить весь массив
for (let index = 0; index < arr90.length; index++) {
}
console.log(arr90);


// Приклад до завдання 2:
// const arr1 = [2, 5, 8, 13, 24, 18, 0, 7];

// // Функція приймає масив будь-яких чисел, повертає масив лише парних із них(тобто ті що непарні ми викидаємо)
// function collectEvenNumbers(processedArray) {
//     const results = []; // Сюди будуть добавлятись числа 
//     for (let index = 0; index < processedArray.length; index++) {
//         const element = processedArray[index]; // йдемо по каждому елементу масиву
//         if (element) {
//             results.push(element);
//         }
//     }

//     return results;
// }

// console.log(collectEvenNumbers(arr1)); // "0" також є парним числом




// 3
const x = 4;
const y = 4;
const z = x + y;
console.log(z);

function some1(x, y) {
    let p;
    if (x > y) {
        p = x + y;
    } else if (x === y) {
        p = x * y;
    } else if (y === 45) {

    }
    return p;
}
