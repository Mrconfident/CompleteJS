
// creating a constructor function

const Person = function (name, birthYear) {
  this.name = name
  this.birthYear = birthYear

  // this.calcAge = () =>  {
  //   return 2023 - this.birthYear
  // }
}

const nayan = new Person('nayan', 1980)

console.log(nayan)

console.log(nayan instanceof Person)


// Prototypes
Person.prototype.calcAge = function () {
  return 2023 - this.birthYear
}

console.log(Person.prototype);

console.log(nayan)

console.log(nayan.calcAge())

console.log(nayan.__proto__);

console.log(nayan.__proto__ === Person.prototype)

console.log(Person.prototype.isPrototypeOf(nayan))



