// Индекс - порядок расположения элемента. Для строки - это позиция расположения символа.
const myStr = 'abcda';
const firstPos = myStr[0]; // нумерация начинается с 0

// Можно определить индекс символа  при помощи метода строки indexOf()
const firstPosition = myStr.indexOf('a'); // 0, важно отметить, что в строке два символа "а", вернет лишь позицию первого
const lastPosition = myStr.lastIndexOf('a'); // 4, вернет позицию только самого последнего символа "а"
const slicedStr = myStr.slice(1, 3); // bc, т.е. вернет 1й и 2й, до 3го, не включительно 3й
const replacedStr = myStr.replace('a', 'x'); // xbcda, заменит первый символ
const replacedStr2 = myStr.replaceAll('a', 'x'); // xbcdx, заменит все символы "а"


// В JavaScript определены два булевых значения: true и false

// По сути отсутствие чего-либо
// null - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/null
// undefined - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/undefined


// В JavaScript присутствует несколько глобальных объектов. Ранее мы ознакомились с Math()
// String() - глобальный конструктор(вид глобального объекта) строки
const myStr5 = new String('some text'); // При "создании строки" при помощи конструктора глобального объекта используется слово "new",
// также это слово применяется при создании экземпляров от собственных классов.

// Array() - глобальный конструктор(вид глобального объекта) массива
const myArray = new Array(['a', 'b']); // создание при помощи конструктора
const myArray2 = [1, 2, 'abc']; // создание при помощи литерала

// Пример преобразования типов
const p = 8 + 3;
const numberToString = String(p);


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

// Тернарный оператор - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
const str1 = 'значение переменной "р" ';
const str2 = p === 10 ? 'равно 10, ' : 'не равно 10, '; // тернарный оператор
const str3 = 'а длина массива ';
const str4 = myArr3.length === 4 ? 'равна 4.' : 'не равна 4.';
const result = str1 + str2 + str3 + str4;
console.log('result: ', result);



// Строка, число, undefined, null, булевое значение, массив, объект
// toString()
const c = 42; // const объявляет неизменяемую переменную "c" со значением 42, тип данных - число
const cStringified = c.toString();
console.log(cStringified, typeof c, typeof cStringified);
const cToNumber = parseInt(cStringified);
console.log(cToNumber, typeof cToNumber);

const test1 = 2 + 2;
const div1 = 4/2; // возвращает результат
console.log('div1: ', div1);
const div2 = 7%3; // возвращает остаток. 5/2 это 2 и 1 в остатке
console.log('div2: ', div2);
let inc1 = 9;
inc1++;
console.log('инкремент: ', inc1); // инкремент
inc1--;
inc1--;
inc1--;
console.log('декремент: ', inc1); // декремент


for (let index = 0; index < myArr3.length; index++) {
    const element = myArr3[index];
    console.log('element: ', element);
    if (element === 5) {
        console.log('Правда!');
    } else {
        console.log('Ложь!');
    }
}
