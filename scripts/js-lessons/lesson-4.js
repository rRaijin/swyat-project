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

// null - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/null
// undefined - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/undefined


// В JavaScript присутствует несколько глобальных объектов. Ранее мы ознакомились с Math()
// String() - глобальный конструктор(вид глобального объекта) строки
const myStr5 = new String('some text'); // При "создании строки" при помощи конструктора глобального объекта используется слово "new",
// также это слово применяется при создании экземпляров от собственных классов.

// Array() - глобальный конструктор(вид глобального объекта) массива
const myArray = new Array(['a', 'b']); // создание при помощи конструктора
const myArray2 = [1, 2, 'abc']; // создание при помощи литерала

