// 1. Написати функцію, яка приймає масив, що складається із чисел (довжиной не менше 5)
// якщо довжина менше 5 - виводимо повідомлення про це, якщо довжина більше або дорівнює 5 -
// ітеруємося по масиву і як тільки доходимо до 3го (індекс 3) елемента припиняємо ітерацію та виводимо
// цей елемент, як РЕЗУЛЬТАТ роботи функції.
const arr1 = [1,2,3,4];
const arr2 = [5, 10, 15, 20, 50, 100];

// Порівняй твій варіант з правильною відповідю
// for (let i = 0; i < arr1.length; i++) {
//     const element = arr1[i]
//     if (arr1.length < 5) {
//         console.log('довжина менше 5')
//     } 
//     else {
//         while (i === 3) {
//             console.log('el:',element)
//             break;
//         }
//     }
    
// }


// Помилка №1. Уважність! Читаємо: "Написати функцію, яка приймає масив" - функції немає.
// Помилка №2. Уважність ще раз! Читаємо: "та виводимо цей елемент, як РЕЗУЛЬТАТ роботи функції."


// Вірна відповідь
function homework1(array) {
    if (array.length < 5) {
        console.log('довжина менше 5');
    } else {
        for (let i = 0; i < array.length; i++) {
            while (i === 3) { // це буде 20
                return array[i];
            }
        }
    }
}

const res1 = homework1(arr1); // тут поверне undefined
console.log('Result 1: ', res1);
const res2 = homework1(arr2);
console.log('Result 2: ', res2);

// Завдання №2. В нас є масив "items" Написати функцію (ФУНКЦІЮ!!!), яка приймає будь-яке число.
// ми ітеруємось по масиву "items", і як тільки знаходимо ПЕРШИЙ об'єкт у ньому, для усіх його пар ключ-значення збільшуємо
// значення на ЦЕ число, яке приймає функція.
const items = [1, 'a', {x: 1, y: 2}, 45, 'abc', {a: 1}];
function homework2(c) {
    for (let i = 0; i < items.length; i++) {
        const element = items[i];
        if (typeof element === 'object') {
            console.log('До змінення: ', element);
            for (let j in element) {
                element[j] = element[j] + c;
            }
            console.log('Після змінення: ', element);
            break;
        }  
    }  
}
homework2(15);
homework2(5);
homework2(1); // 22

function homework2extended(c) {
    for (let k = 0; k < [1, 2, 3, 4].length; k++) { // чотири ітерції буде додавати по 100
        console.log('parent lvl: ', [1, 2, 3, 4][k]); // перша інструкція
        for (let i = 0; i < items.length; i++) { // друга інструкція. Весь внутрішній цикл FOR - інструкція
            const element = items[i];
            if (typeof element === 'object') {
                console.log('До змінення: ', element);
                for (let j in element) {
                    element[j] = element[j] + c;
                }
                console.log('Після змінення: ', element);
                break;
            }  
        }  
    }
}
homework2extended(100); // 422
console.log('FINAL: ', items);

// ПІДКАЗКА 1: Щоб перевірити що це об'єкт ---   typeof items[i] === 'object'
// ПІДКАЗКА 2: У рішенні буде використовуватись IF, FOR, FOR/IN


function test() {
    console.log('OK');    
}

test();
test();

const sx1 = [1, 2, 3, 4];
for (let i = 0; i < sx1.length; i++) {
    test();
}


// Завдання №3. Написати функцію, яка приймає массив чисел, повертає новий масив із цих чисел, збільшених вдвічі.



// Завдання №4. Написати функцію, яка приймає масив строк, до кожної строки додає літеру "а",
// та виводить у консоль лог на кожній ітерації, функція не повертає результат.
