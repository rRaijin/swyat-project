const x = 10;

// IF може бути сама по собі без додаткових блоків
if (x === 10) {
    console.log('Х дорівнює 10');
}

// IF...ELSE
if (x > 10) {
    console.log('Х більше 10');
} else {
    console.log('Х не більше 10');
}

// Більш складна форма, яка виконує пошагову перевірку, може складатися з багатьох блоків "else if"
if (x > 100) {
    console.log('Х більше 100');
} else if (x > 50) {
    console.log('Х більше 50');
} else if (x === 9) {
    console.log('Х дорівнює 9');
} else {
    console.log('Жодна умова не виконана!');
}

// Варта пам'ятати про те що перевірка йде зверху до низу, і якщо умова виконується (наприклад, x === 10),
// то наступні - ігноруються.
if (x > 100) {
    console.log('Х більше 100');
} else if (x === 10) {
    console.log('Х дорівнює 10, наступні перевірки ігноруються');
} else if (x === 9) {
    console.log('Х дорівнює 9');
} else if (x === 123) {
    console.log('Х дорівнює 123');
} // також звернути увагу на те, що "else" не обов'язково має бути в кінці, але якщо else if() може бути
// скільки завгодно, то "else" лише один

const p = 10;
// Тернарный оператор - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
const str1 = 'значение переменной "р" ';
const str2 = p === 10 ? 'равно 10, ' : 'не равно 10, '; // тернарный оператор
const result = str1 + str2;
console.log('result: ', result);
