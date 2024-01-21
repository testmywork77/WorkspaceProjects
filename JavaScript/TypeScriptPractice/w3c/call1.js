const person = {  
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
}

const person1 = {
    firstName: "John",
    lastName: "Doe"
}

// With call(), an object can use a method belonging to another object.
console.log(person.fullName.call(person1));