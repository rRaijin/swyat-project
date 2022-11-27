// Контрольна робота. Кожне завдання оформити як функцію.

// Задача №1. Приймає число, перетворює його на строку та додає до неї строку "ка". Результат не повертається, а виводиться у консоль.
function homework1(x) {
    console.log(String(x) + "ка")
}
homework1(1)
console.log('*******************************************');


// Задача №2. Приймає строку, якщо довжина строки більше ніж 3 - виводимо у консоль першу літеру, а якщо довжина строки більше 3 - 
// виводимо у консоль другий за індексом елемент.
// * Взяти літеру двома способами.

const str1 = "молоко";
const str2 = "м";
const arrstr1 = ["хлеб"]

function homework2(str) {
    if (str.length < 3) { // якщо менше 3
        // console.log(str[0])
        console.log(str.charAt(0))
    } else { // якщо більше 3
        console.log(str[2]) 
    }
}
// homework2(str1)
homework2(str2)

// Доповнення до задачі 2
console.log(str1[3]) // тут [3] - це індекс
console.log([3]) // тут [3] - це масив
console.log('*******************************************');


// Задача №3. Приймає строку, довжиною більше 4, бере перші 3 літери, переводить у верхній регістр та повертає результат.
const mystr3 = "молоко";
function homework3(str) {
    if (str.length > 4) {
        const result = str[0].toUpperCase() + str[1].toUpperCase() + str[2].toUpperCase();
        const upperPart = str.slice(0, 3).toUpperCase(); // 0, 1, 2, без 3кі
        const upperPartSubs = str.substring(0, 3).toUpperCase();
        console.log('upperPart: ', upperPart);
        console.log('upperPartSubs: ', upperPartSubs);
        return result;
    }
}

console.log(homework3(mystr3));
// Доповненнная до задачі 3 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
console.log('*******************************************');


// Задача №4. Приймає два числа, повертає найменше з них.
function homework4(x, y) {
    return Math.min(x, y)
}
console.log(homework4(11, 2));
console.log('*******************************************');


// Задача №5. Приймає два числа, якщо хоча б одно з них кратне 5 - збільшує його двічі та повертає.
function homework5(x, y) {
    if (x%5 === 0) {
        return x * 2;
    } else if (y%5 === 0) {
        return y * 2
    }
}
const res1 = homework5(11, 15);
console.log(res1);
console.log('*******************************************');


// Задача №6. Приймає масив будь-яких елементів, перебирає його та повертає новий масив лише з чисел.
const arr4 = ["акула", 5, "акула", 6, "акула", 7];
function homework6(someArr) {
    const newArray = [];
    for (let i = 0; i < someArr.length; i++) {
        const element = someArr[i];
        if (typeof element === 'number') {
            newArray.push(element);
        }
    }
    return newArray;
}
console.log(homework6(arr4));
console.log('*******************************************');


// Задача №7. Виводить у консоль числа з 0 до 10.
let count = 0;
while (count < 11) {
    console.log('count: ', count);
    count++;
}


// Задача №8. Приймає іншу функцію, результат роботи якої виводить у консоль, не повертає його! повертає повідомлення, що функція виконана(не у консоль, а саме повертає результат).
function homework8(f) {
    const result = f();
    console.log('res', result);
    return 'Функція виконана';
}

function myfunc123 () {
    return 42;
} 

console.log(homework8(myfunc123));
console.log('*******************************************');


// Задача №9**. Приймає масив функцій, але виконує лише першу і завершу свою роботу, нічого не виводить, не повертає.
function homework91(x) {
    const xy = 1 + 9;
    console.log(xy)
}
function homework92(x) {
    const xy = 1 + 10;
}

const arrfunc = [homework91,homework92]

function homework9(arrfunc) {
    arrfunc[0]();
}
homework9(arrfunc)
console.log('*******************************************');


// Задача №10**. Приймає функцію і виконує її 5 разів поспіль.
function homework10(f) {
    let b = 0;
    while (b < 5) {
        f();
        b++;
    }
}

homework10(homework91);
