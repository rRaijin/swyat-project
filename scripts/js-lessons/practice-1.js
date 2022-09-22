// 1
let a;
console.log('a: ', a);
console.log('тип змінної: ', typeof a);
a = false ? 1 : 2;
console.log('a: ', a);

// 2
const str1 = 'мол';
const str2 = 'око';
const str3 = str1 + str2;
console.log('str: ', str3);

// 3
const arr1 = [1, {var1: 'х'}, 23, 'л', false, [5, 'і'], 'п', 'б', 189];
console.log('index 1: ', arr1[1]);

// Об'єкт const someOne = {var1: 'x'} - пара ключ+значення, var1 - ключ, 'x' - значення
// {a: 1, b: 2}
const var2 = 'var1';
console.log('Беремо по ключу. перший спосіб запису: ', arr1[1].var1);
console.log('Беремо по ключу. перший спосіб запису: ', arr1[1]['var1']);
console.log('Беремо по ключу. подстановка змінної: ', arr1[1][var2]);

const res1 = arr1[1].var1 + arr1[3] + arr1[5][1] + arr1[7];
console.log('result: ', res1);

// 4
const arr2 = [1, 3, 5, 7, 9];
// обходить весь массив
for (let index = 0; index < arr2.length; index++) {
    arr2[index]++;
}
console.log(arr2);

// Домашнє завдання 1. Написати слово "молоко"
const arr3 = ['a', 23, 'м', {var1: 'х'}, 23, 'л', false, [5, 'і'], 'о', 'б', 189, 'к'];


// Домашнє завдання 2 піввищеної складності. Написати слово "ковбаса". Підказка можна вирішити 3 способами.
const arr4 = ['ковба', 1, true, 'c'];
