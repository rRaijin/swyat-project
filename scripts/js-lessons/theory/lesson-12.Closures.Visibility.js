const arr = [1, 2, 3];
const a = 'qq';

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element);
//     console.log(a);
// }

// function name1() {
//     console.log('a: ', a);
// }
// name1();

// function name2() {
//     const x = 1;
//     function nestedFunction() {
//         console.log('a: ', a);
//         console.log('inp2: ', x);
//     }
//     nestedFunction();
//     console.log('inp1: ', x);
// }
// name2();
// console.log('inp3: ', x);

function name3(y) {
    const r = 15;
    function nested() {
        return y * 10;
    }
    return nested;
}

const result = name3(4);

console.log(result());


const arr2 = [3];
const t = 100;

function example1(array) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const res1 = element + t;
        console.log(res1)
    }
}

function example2() {
    console.log('Я працюю!!!');
}

function universalna(func, argumentiDoCieyFunckcii) { // працює з будь-якою функцією та набором аргументів, що вона приймає
    return argumentiDoCieyFunckcii ? func(argumentiDoCieyFunckcii): func();
}

homework3(example1);
homework3(example2, arr2);
