// Інструкції переходу -- break

const x = 10;
const arr = [3, 'fgh', null, 8, 10, 'a', 90]; // 7 ітерацій

for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (el === 10) {
        console.log('el: ', el);
        break;
    }
    console.log('el222222: ', el);
}

// continue
const arr2 = [5, 10, 15, 20, 50, 100];
for (let j = 0; j < arr2.length; j++) {
    const g = arr2[j];
    if (g < 50) {
        console.log('res: ', g * 2);
        continue;
    }

    const x = 100;
    console.log('g: ', g * x);
}


const obj = {
    x: 1,
    y: 2,
    z: {
        cat: 'vasya'
    },
    p: 23
}

// Uncaught ReferenceError: x is not defined - це значить що інтерпретатору невідомо що таке х

console.log(obj['x']);
console.log(obj.z.cat);

console.log('index: ', 'polk'.indexOf('k'))
const date = new Date();
console.log('date: ', date);

// console.log(obj.p) // undefined
// console.log(obj.p.f); // Uncaught TypeError: Cannot read properties of undefined (reading 'f')
if (obj.hasOwnProperty('p')) {
    console.log('p: ', obj.p);
} else {
    console.log('no');
}

obj.k = 45;
console.log('obj: ', obj);
