// this - Свойство контекста выполнения кода, которое в нестрогом режиме всегда является ссылкой на объект, 
// а в строгом режиме может иметь любое значение('use strict').


// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this

// https://developer.mozilla.org/ru/docs/Web/API/Window

// https://developer.mozilla.org/ru/docs/Web/API/Document/getElementById


// console.log('global this: ', this);
function strictThis() {
    // 'use strict'
    return this;
}

// console.log('in strict mode: ', strictThis());
// В большинстве случаев значение this определяется тем, каким образом вызвана функция. Поки що все, це перше знайомство

// const myObj = {
//     x: 1,
//     y: 1,
//     print: function() {
//         console.log('sdafsdfs');
//     }
// }
// myObj.z = 3;
// console.log(myObj.print());
function Human(name, age, force = false) { // значення по умолчанию для force
    this.gender = 'male';
    this.name = name;
    this.age = age;
    this.x = 345;

    this.getThis = function() {
        console.log('This ==> ', this);
    }

    this.getInfo = function() {
        console.log(`User: ${this.name}, age: ${this.age}`);
    }

    this.render = function () {
        document.getElementById('lesson-15').innerText = `User: ${this.name}, age: ${this.age}`;
    }

    if (force) {
        this.render();
    }
}

// Human.prototype.getInfo = function() {
//     console.log(`User: ${this.name}, age: ${this.age}, gender: ${this.gender}`);
// }

const human_one = new Human('Vasil', 23);
// console.log('data: ', human_one);
// human_one.getInfo();
// human_one.getThis();
human_one.render();

function addNewHuman() {
    return new Human('Svyat', 13, true);
}
