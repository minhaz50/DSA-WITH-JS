/*
//! Object literal Getter / Setter
const person = {
  firstName: "Minhaz",
  lastname: "uddin",

  // Getter
  get fullName() {
    return `${this.firstName} ${this.lastname}`;
  },

  // Setter
  set fullName(name) {
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastname = parts[1];
  },
};

console.log(person.fullName);
person.fullName = "Jhon Doe";
console.log(person.firstName);
console.log(person.lastname);
*/

/*
// ! class Getter/Setter (ES6+)

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this._age = age; // private convention
  }

  // Getter
  get fullName() {
    return `My full name is : ${this.firstName} ${this.lastName}`;
  }

  // Setter with validation
  set fullName(name) {
    if (!name || name.split(" ").length < 2) {
      throw new Error("Please provide first and last name");
    }

    const [first, last] = name.split(" ");
    this.firstName = first;
    this.lastName = last;
  }

  // Getter with calculation
  get age() {
    return this._age;
  }

  // Setter with validation
  set age(value) {
    if (value < 0 || value > 100) {
      throw new Error("Invalid age");
    }
    this._age = value;
  }

  // Getter for derived data
  get birthYear() {
    return new Date().getFullYear() - this._age;
  }
}

const person = new Person("Minhaz", "Uddin", 28);
console.log(person.fullName);
person.fullName = "Israt Islam";
console.log(person.fullName);
console.log(person.age);
person.age = 30;
console.log(person.birthYear);
*/

// ! Getter / Setter ES2022+

class BankAccount {
  #balance = 0;
  #pin = "1234";

  constructor(owner, initialBalance) {
    this.owner = owner;
    this.#balance = initialBalance;
  }

  // Getter with authentication logic
  get balance() {
    return this.#verifyAccess() ? this.#balance : "Access denied";
  }

  // Setter with validation
  set balance(amount) {
    if (!this.#verifyAccess()) {
      console.log("Access denied");
      return;
    }
    if (amount < 0) {
      throw new Error("Balance cannot be negative");
    }
    this.#balance = amount;
  }

  #verifyAccess() {
    return true;
  }

  // Read only getter (no setter)
  get accountInfo() {
    return `${this.owner}'s account`;
  }
}

const account = new BankAccount("Minhaz", 1000);
console.log(account.balance);
account.balance = 500;
console.log(account.balance);
console.log(account.accountInfo);
account.accountInfo = "test";
