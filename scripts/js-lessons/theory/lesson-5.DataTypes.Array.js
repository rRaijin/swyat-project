const myArray2 = [1, 2, 'abc']; // создание при помощи литерала

// Пример сложного массива, получение значений внутри по индексу, включая вложенный массив
const myArr3 = [
    43, // 0
    'privet', // 1
    2 + 3, // 2
    5 > 7, // 3
    { // 4
        option1: 'try',
        options2: 45
    },
    [1, 2, 'three'] // 5
];
console.log('До: ', myArr3);

const a = myArr3[5];
const b = myArr3[5][2];

// Метод push() добавляет в конец массива новый элемент, массив изменяется!
myArr3.push(9);
console.log('После: ', myArr3);

const arr2 = [1, 3, 5, 7, 9];
// обходить весь массив
for (let index = 0; index < arr2.length; index++) {
    arr2[index]++;
}
console.log(arr2);
