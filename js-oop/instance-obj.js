// Here are all ways to create instances of Object in JavaScript.

//! Method 1:  Object Literal (most common)
/*
let person = {
  first_name: "Minhaz", // Here first_name = key and last_name = value
  last_name: "Uddin",
  age: 28,
  city: "Mymensingh",

  getName: () => {
    return `My full Name is ${this.first_name} ${person.last_name}`;
  },

  greet() {
    console.log("Hello" + this.first_name);
  },
};

// console.log("My first name is: ", person.first_name);
// console.log("My last name is: ", person.last_name);
// console.log(person.getName());

// person.getName();
// person.greet();

*/

//! Method 2 :  Creating instance of Object Constructor (new Object())

let person = new Object();

((person.first_name = "Minhaz"),
  (person.last_name = "Uddin"),
  (person.age = 29),
  (person.city = "Bhaluka"),
  (person.isBangladeshi = true));

person.getName = () => {
  return `My full name is : ${person.first_name} ${person.last_name}`;
};

// console.log(person.getName());

//! Method 3 : Object Constructor ------------- (old way)
// Constructor Function
function User(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
  this.greet = function () {
    console.log(
      `Hello, I'm ${this.name}, my age is ${this.age}.I am from ${this.city}`,
    );
  };
}

const user1 = new User("Minhaz", 25, "Mymensingh");

user1.greet();
