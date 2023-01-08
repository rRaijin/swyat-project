class Human {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age(x) {
      return x - this.year;
    }
  }
  
  let date = new Date();
  let year = date.getFullYear();
  
  let myYears = new Human("Svyatoslav", 2010);
  console.log('Svyatoslav', myYears.age(year), 'years old')