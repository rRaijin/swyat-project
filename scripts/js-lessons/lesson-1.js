/*
    ********Занятие 1. ЗНАКОМСТВО С JavaScript********
*/

/*
    Теоретическая часть урока
*/

// console.log('Hello!!!');

// Справа от "=" указывается значение, слева объявление
const myVariable = 10; // нельзя потом изменить
let mySecondVar = 5; // можно изменить
var myThirdVar = 1; // также можно изменить

// Это очень важная функция, которая выводит сообщение в консоль
const useFunc = function myFunc2() {
    console.log('param-pam-pam');
}

console.log(useFunc); // Выведет не результат работы функции, а её саму
useFunc(); // А тут уже результат


var L1 = 1; // В переменную L1 записать любое число
console.log(L1); // вывести его в консоль
L1 = 2; // изменить значение переменной
console.log(L1); // вывести в консоль