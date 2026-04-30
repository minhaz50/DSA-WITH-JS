// Object literal Getter / Setter
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
