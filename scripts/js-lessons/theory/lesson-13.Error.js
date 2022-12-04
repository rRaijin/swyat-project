// Глобальний об'єкт - вбудований об'єкт JavaScript, призначений для важливої мети: властивості цього об'єкту
// є глобальними сутностями, доступними в будь-якому місці програми.

// Конструктор Error створює об'єкт помилки. Примірники Errorоб'єкта викидаються при виникненні помилок під час 
// виконання. Об'єкт Error також може використовуватися як базовий для винятків. Дивіться нижче стандартні типи помилок.


https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Error
const myErr = new Error('Моя помилка.');
console.log(myErr);

const myErrType = new TypeError('Неприпустимий тип.');
function getNumber(x) {
    if (typeof x === 'number') {
        console.log('x: ', x);
    } else {
        // console.log(myErrType);
        throw myErrType;
    }
}

getNumber(4);
getNumber('abc');


// Конструкція try...catch намагається виконати інструкції у блоці try, та, у випадку помилки, виконує блок catch.


// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/try...catch

function maybeThrowError() {
    console.log('ok')
    // Функция, которая может выбросить исключение
    if (Math.random() > 0.5) {
        throw new Error('Азазаза');
    } else {
        return 45
    }
}

try {
    const res = maybeThrowError();
    console.log('try', res)
} catch (error) {
    console.log(error);
} finally {
    console.log('1234')
}
