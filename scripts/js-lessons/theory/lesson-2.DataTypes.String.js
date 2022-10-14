// String (Рядок, строка)

const str1 = 'abc';
const str2 = "def";
const str3 = `klm`;

// Довжина рядка
console.log('Довжина рядка: ', str1.length);

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

// Конкатенація
const concatStr = 'ab' + 'cd';
console.log(concatStr);

// Конкатенація з числом. Відбувається мутація(зміна типу даних), у даному випадку число "перетворюється" на строку,
// тому що результат суми строки та числа, має мати лише один тип - не можу бути подвійного, тому у цьому випадку це рядок.
const concatStrWithNumber = 2 + 'руки';
console.log(concatStrWithNumber);

// typeof
console.log(typeof str3);


// Индекс - порядок расположения элемента. Для строки - это позиция расположения символа.
const myStr2 = 'abcda';
const firstPos = myStr2[0]; // нумерация начинается с 0

// Можно определить индекс символа  при помощи метода строки indexOf()
const firstPosition = myStr2.indexOf('a'); // 0, важно отметить, что в строке два символа "а", вернет лишь позицию первого
const lastPosition = myStr2.lastIndexOf('a'); // 4, вернет позицию только самого последнего символа "а"
const slicedStr = myStr2.slice(1, 3); // bc, т.е. вернет 1й и 2й, до 3го, не включительно 3й
const replacedStr = myStr2.replace('a', 'x'); // xbcda, заменит первый символ
const replacedStr2 = myStr2.replaceAll('a', 'x'); // xbcdx, заменит все символы "а"
