const x = 2;
console.log('Тип даних для значення змінної x: ', typeof x);

// Модуль Math - представляет набор функций и констант
const pi = Math.PI; // тут представляет константу - число Пи
const random = Math.random(); // А тут функция генерации случайного числа в диапазоне от 0 до 1

// Деление на ноль не считается ошибкой. Вернется Infinity или -Infinity
// Но если поделить 0 на 0 возвращает специальное значение NaN (not a number)
const nanVar = 0/0;
console.log('Получено не число: ', nanVar);

// Немного про тип Boolean: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Boolean
/*
    Имеет два значения: true и false.
    В основном применяется для условного оператора.
*/
