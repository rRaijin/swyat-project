// 1. Написати функцію, яка приймає число, якщо воно більше 20, то повертаємо йогo,
// а якщо менше 20 - то виводимо його в консоль, зменшуємо на 2 і виводимо результат
// у консоль поки результат більше або дорівнює 4.
// Тобто має вивести у консоль 20, 18, 16, 14, 12, 10, 8, 6, 4, 2

// Щоб зменшити число на 2, x=x-2, або 2 рази x--

function func1 (x) {
    if (x > 20) {
        return x;
    } else {
        console.log('x: ', x);
        let result = x;
        while (result >= 4) {
            result = result - 2;
            console.log('r ===>', result);
        }
        return result;
    }
}

const y = func1(20);
console.log(y);


// let count = 20;
// while (count > 3) {
//     if (count > 20) {
//           // функція пряцює но що тут написати щоб повернуло результат я не знаю return не працює
//     }
//     if (count < 21) {
//         if (count > 3) {
//             console.log(count);
//             count--;
//             count--;
//         }
//     }
// }



// 2. В нас є масив "arr", перебрати увесь масив, та збільшити кожне число на 3, УСІ получені
// результати просумувати, результат зберегти у змінну
const arr = [1, 2, 3, 4, 5, 6, 7];
let start = 0;
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    const g = element + 3; 
    console.log("x3+", g);
    // start = start + g; // 1й спосіб
    start+=g; // 2й спосіб
}
console.log('result: ', start);


// 3. В нас є об'єкт "obj". Перебрати об'єкт та збільшити усі значення вдвічі.
const obj = {
    a: 1,
    b: 2,
    c: 3
};
for (let x in obj) {
    obj[x] = obj[x] * 2;
}
console.log(obj);

// Приклад до завдання 3, розібрати уважно, тому що по факту це рішення, тут збільшення в 10
const obj2 = {
    a: 10,
    b: 20,
    c: 30
};
for (let x in obj2) {
    obj2[x] = obj2[x] * 10;
}
console.log(obj2);
