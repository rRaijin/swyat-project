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