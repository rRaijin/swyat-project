// Примітивні: string, number, boolean, null, undefined
// Об'єкти: Object, Array, Function

// https://medium.com/webbdev/js-49122c7d8c26


// Змінна за посиланням чи за значенням.
let myStr1 = '111'; // перша ячейка пам'яті
let myStr2 = myStr1; // друга ячейка пам'яті
myStr2 = '222'; // Uncaught TypeError: Assignment to constant variable. - помилка, бо не можна переназначати константу
console.log(myStr1); // 111
console.log(myStr2); // 222


let var1 = {name: 'Jim'}; // перша ячейка пам'яті
let var2 = var1; // та ж сама перша ячейка пам'яті
var2.name = 'John';

console.log(var1); // John 
console.log(var2); // John
