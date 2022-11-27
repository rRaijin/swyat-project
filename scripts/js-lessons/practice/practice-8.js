// Контрольна робота. Кожне завдання оформити як функцію.

// Задача №1. Приймає число, перетворює його на строку та додає до неї строку "ка". Результат не повертається, а виводиться у консоль.

let res;
let res1;
let res2;

function homework1(x) {
    String(x)
    res = x + "ка"
    console.log(res)
}

homework1(1)

// Задача №2. Приймає строку, якщо довжина строки більше ніж 3 - виводимо у консоль першу літеру, а якщо довжина строки більше 3 - виводимо у консоль другий за індексом елемент.
// * Взяти літеру двома способами.

const str1 = "молоко";
const arrstr1 = ["хлеб"]

function homework2(str) {
    if (str1.length < [3]) {
        console.log(str[0])
    } else {
        console.log(str[1])
    }
}
homework2(str1)


// Задача №3. Приймає строку, довжиною більше 4, бере перші 3 літери, переводить у верхній регістр та повертає результат.
const str = "молоко";
function homework3(str) {
    str.toUppercase()
}


// Задача №4. Приймає два числа, повертає найменше з них.

function homework4(x) {
    const lesser = Math.min(x)
    console.log(lesser)
}

homework4(1,2)

// Задача №5. Приймає два числа, якщо хоча б одно з них кратне 5 - збільшує його двічі та повертає.
const e = 10;
const u = 8;
function homework5(x) {
    if (x%5 === 0) {
        return res1 = x * 2 || x * 2;
    }
}
homework5(e,u)
console.log(res1)

// Задача №6. Приймає масив будь-яких елементів, перебирає його та повертає новий масив лише з чисел.
const arr4 = ["акула",6]


// Задача №7. Виводить у консоль числа з 0 до 10.

let count = 0;
while (count < 11) {
    console.log('count: ', count);
    const f = count++;
}

// Задача №8. Приймає іншу функцію, результат роботи якої виводить у консоль, не повертає його! повертає повідомлення, що функція виконана(не у консоль, а саме повертає результат).
const arr5 = [3];
const t = 100;

function funcforhom8(array) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const res4 = element + t;
    }
}
funcforhom8(arr5)

function homework8(funcforhom3) {
    const res4 = funcforhom3;
    console.log(res4)
}
homework8()
// Задача №9**. Приймає масив функцій, але виконує лише першу і завершую свою роботу, нічого не виводить, не повертає.
function homework91(x) {
    const xy = 1 + 9;
    console.log(xy)
}
function homework92(x) {
    const xy = 1 + 10;
}

const arrfunc = [homework91,homework92]

function homework9(arrfunc) {
    for (let i = 0; i < arrfunc.length; i++) {
        const element = arrfunc[i];
        
    }
}
homework9(arrfunc)
// Задача №10**. Приймає функцію і виконує її 5 разів поспіль.



function homework10(homework91) {
    let b = 0;
    while (b < 5) {
        const res5 = homework91;
        b++
        console.log(res5)
    }
}
homework10(homework91)
