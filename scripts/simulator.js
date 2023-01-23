const customers = [];
const pokupki = [];


class User { // abstraction
    createNewCustomer() {
        console.log('Create new user!!!');
        const newCustomer = {
            username: `Test user № ${Number(customers.length) + 1}`,
            pokupki: []
        };
        // console.log(Object.keys(newCustomer))
        customers.push(newCustomer);
        // console.log('users: ', customers);
    }

    createOrder(num) {
        console.log(num)
    }
}
const user = new User(); // item, екземпляр

class Tovar {
    constructor(name) {
        this.name = name;
    }
}
const moloko = new Tovar('moloko');
const sahar = new Tovar('sahar');
const hleb = new Tovar('hleb');
const myaso = new Tovar('myaso');

class ChertejPokupki {
    sdelatNovuyuPokupku(item) {
        // console.log('item: ', item);
        pokupki.push(item);
        if (customers[0] !== undefined) {
            customers[0].pokupki.push(item);
            console.log('moi pokupki: ', customers[0].pokupki);
        }
    }
}

const pokupka = new ChertejPokupki();
