// 1.  ECMAScript
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes

class Human {
    constructor(age, firstName, lastName) {
        this.age = age;
        this.firstName = firstName; // свойство
        this.lastName = lastName;
        this.x = 10;
        this.y = 5;
    }

    set myChangeYValue(val) { // сеттер
        this.y = val;
    }

    get fullName() { // геттер
        const upperredFName = this.firstName.toUpperCase();
        const upperredLName = this.lastName.toUpperCase();
        return console.log('My name is: ', upperredFName + ' ' + upperredLName);
    }

    calcXumnojitY() { // метод
        return this.x * this.y;
    }

    static humanCreatedCount = 0; // службова змінна
    static someFunc(val) {
        console.log('OK', val);
    }

    static agesArr = []; // свойство статичне
    static setAgesArr(ageNum) { // статичний метод
        this.agesArr.push(ageNum);
    }
    static averageAge() {
        let summ = 0;
        for (let i = 0; i < this.agesArr.length; i++) {
            const el = this.agesArr[i];
            summ += el;
        }
        return Math.round(summ / this.humanCreatedCount);
    }
};


const human1 = new Human(15, 'Vasya1', 'Pupkin1');
Human.setAgesArr(19);
Human.humanCreatedCount++;

const human2 = new Human(15, 'Vasya2', 'Pupkin2');
Human.setAgesArr(22);
Human.humanCreatedCount++;

const human3 = new Human(15, 'Vasya3', 'Pupkin3');
Human.setAgesArr(27);
Human.humanCreatedCount++;


console.log('humanCreatedCount: ', Human.humanCreatedCount);
console.log('humanCreatedCount: ', Human.agesArr);
console.log('середній вік: ', Human.averageAge())
// Human.humanCreatedCount++;
// Human.humanCreatedCount++;
// console.log('before', human1);
// human1.fullName;
// human1.myChangeYValue= 100;
// console.log('after', human1);
// console.log('Sam class: ', Human.agesArr);
// Human.someFunc(45);