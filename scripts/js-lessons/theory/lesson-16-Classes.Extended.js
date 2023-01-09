// 1. Методології програмування
// 2. Абстракція
// 3. Інкапсуляція. Захищені властивості(свойства)
class User {
    constructor(userEmail, password) {
        this.usermail = userEmail;
        this.password = password;
        this.auto = 'Mersedes';
        this.work = 'Factory';
    }

    #test = '123'; // інкапсуляція

    set username(name) {
        this._name = name;
    }

    get fullName() {
        console.log('work!')
        return this._name;
    }

    getMutatedTestValue() {
        return 'a' + this.#test
    }
}

const user1 = new User('vasya@mail.com', '123');
const user2 = new User('vasy2@mail.com', '123');
user1.username = 'Vasya Pupkin';
console.log('u1: ', user1.fullName);
console.log('u2: ', user1._name);
console.log('test: ', user1.getMutatedTestValue())



// 3. Наслідування
class User2 { // абстрактний клас
    constructor(userEmail, password) {
        this.usermail = userEmail;
        this.password = password;
    }

    #test = '123';

    someOne() {
        console.log('ok');
        return 90;
    }
}


class UserWithAuto extends User2 {
    constructor(auto) {
        super();
        this.auto = auto;
        this.work = 'Factory';
    }
}

class Seaman extends User2 {
    constructor(name, password, ship) {
        super(name, password); // new User('asdasd', 'asd')
        this.ship = ship;
        this.hair = 'long';
    }

    someOne() {
        // перпеписуємо батьківський метод
        return 42;
    }
}

const userWithMersedes = new UserWithAuto('Mersedes');
const papay = new Seaman('Moryak Papay', '12345', 'Помста Королеви Анни');
console.log('1: ', papay);
console.log('2: ', papay.someOne());

console.log('userWithMersedes: ', userWithMersedes);
// 4. Поліморфизм

