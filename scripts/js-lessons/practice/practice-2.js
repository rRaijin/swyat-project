// Завдання №1. Записати функцію, яка приймає 2 будь-яких числа, перемножує їх та повертає результат.
function mnojennya (z, y, x) {
    // x = 3
    // y = 2
    // z = 0
    const result = x * 5 + z; // 15
    return result + y;
}

const q = mnojennya(0, 2, 3) * 2;
console.log('results: ', q); // 34


// Завдання №2. Скористатися функцією із завдання 1 для перемноження усіх чисел в массиві:
function mnojennya1 (m, j, g, l) {
    const result1 = m * j * g * l;
    return result1;
}
const arr2 = mnojennya1(2, 3, 4, 5); // 120
console.log('res: ', arr2 );
