// Завдання №1. Написати функцію: Якщо число парне, функція повертає його, якщо ні - збільшує вдвічі та повертає.

// Рішення


// Приклад до завдання 1:
const str1 = 22;
const str2 = 'cat';
const str3 = 8;
const str4 = 'dog';
// Функція, яка приймає змінну, якщо це число - зменшує вдвічі та повертає, якщо ні - просто повертає з дописом, що це не число
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


// Приклад до завдання 2:
const arr1 = [2, 5, 8, 13, 24, 18, 0, 7];

// Функція приймає масив будь-яких чисел, повертає масив лише парних із них(тобто ті що непарні ми викидаємо)
function collectEvenNumbers(processedArray) {
    const results = []; // Сюди будуть добавлятись числа 
    for (let index = 0; index < processedArray.length; index++) {
        const element = processedArray[index]; // йдемо по каждому елементу масиву
        if (element % 2 === 0) {
            results.push(element);
        }
    }

    return results;
}

console.log(collectEvenNumbers(arr1)); // "0" також є парним числом
