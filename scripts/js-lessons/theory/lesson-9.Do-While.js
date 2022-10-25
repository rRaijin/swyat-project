// while
let count = 10;
while (count > 0) {
    console.log('count: ', count);
    const f = count--;
    if (f === 1) {
        console.log('START');
    }
}



// do/while
let count2 = 10;
do {
    console.log('Ok ==> ', count2);
    count2--;
} while (count2 > 0);



// for
const arr1 = [12, 3, 56];
for (let index = 0; index < arr1.length; index++) {
    const element = arr1[index];
    console.log('element: ', element);
}

for (let index = 0; index < arr1.length; index++) {
    const element = arr1[index];
    console.log('double: ', element * 2);
}


// for/in
const obj = {
    a: 1, // ключ: значение
    b: 'abc',
    c: 78
};
console.log(obj.b);
console.log(obj['c']);



// ітерація
for (let x in obj) {
    console.log('x: ', x);
}


// object
const obj2 = {
    'a': 1,
    'b': 'cat',
    'c': [2, 3],
    d: {
        p: 90
    }
};

// const obj3 = new Object();
// console.log('obj3: ', obj3);

const keysOfObj2 = Object.keys(obj2);
// console.log('keysOfObj2: ', keysOfObj2);

const valuesOfObj2 = Object.values(obj2);
// console.log('valuesOfObj2: ', valuesOfObj2);

const entriesOfObj2 = Object.entries(obj2);
console.log('entriesOfObj2: ', entriesOfObj2);
