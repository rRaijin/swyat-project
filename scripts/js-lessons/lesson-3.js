/*
    Индекс это порядковый номер элемента в составе чего-либо. Отсчет начинается с 0
    Строка: 'abc', тут "а" имеет индекс 0, "с" - 2
*/
const myStr = 'слова для теста';
console.log('Длина строки: ', myStr.length); // тут свойство, потому что после точки стоит просто слово, без вызова, т.е. скобок.
console.log('Третий символ: ', myStr[3]); // берется третий по индексу элемент, отсчет начинается с 0
console.log('Берем через чар: ', myStr.charAt(2)); // тут метод
console.log('Берем последний символ: ', myStr[myStr.length - 1]);
console.log('Несуществующий символ: ', myStr[99]);
console.log('Подстрока: ', myStr.substring(0, 5)); // выделяет подстроку от 0-го индекса по 5й(не включительно), т.е. будут взяты 0,1,2,3,4
console.log('Переводим в верхний регистр: ', myStr.toUpperCase());

// Другие некоторые методы строк по ссылке(Ctrl+Click чтобы перейти):
https://www.w3schools.com/js/js_string_methods.asp


// Немного про тип Boolean: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Boolean
/*
    Имеет два значения: true и false.
    В основном применяется для условного оператора.
*/

let b; // при объявлении переменной через "let" значение(первичное) указывать не обязательно, будет undefined
const a = 1; // Одно равно, присвоение значения переменной
console.log(a == 2); // Проверка на соответствие значению
console.log(a != 2); // Проверка на несоответствие значению
console.log(a === 2); // Проверка на строгое соответствие значению
console.log(a !== 2); // Проверка на строгое несоответствие значению

//  Преобразование типов
const result1 = '3' * '5';
const result2 = '3' + '5';
console.log('Мутируем 2 строки: ', result1, typeof result1);
console.log('Мутируем 2 строки: ', result2, typeof result2);
console.log('TRUE ==> ', 1 == true);
console.log('FALSE ==> ', 0 == false);