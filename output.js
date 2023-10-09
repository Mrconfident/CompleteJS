// Hoisting
function sayHi() {
  console.log(name);
  // console.log(age);
  var name = 'Lydia';
  let age = 21;
}

sayHi();

// Within the function, we first declare the name variable with the var keyword. 
//This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of undefined,
//until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the name variable, 
// so it still holds the value of undefined.

// Variables with the let keyword (and const) are hoisted, but unlike var, don't get initialized.
// They are not accessible before the line we declare (initialize) them. This is called the "temporal dead zone". 
// When we try to access the variables with let before they are declared, JavaScript throws a ReferenceError.

for(var i = 0; i < 3 ;i++) {
  setTimeout(() => {
    console.log(i)
  }, 0)
}

for(let i = 0; i < 3 ;i++) {
  console.log('Outside Loop' + ' ' + i)
  setTimeout(() => {
    console.log(i + '\n')
  }, 0)
}

// Because of the event queue in JavaScript, the setTimeout callback function is called after the loop has been executed.
// Since the variable i in the first loop was declared using the var keyword, this value was global.
//During the loop, we incremented the value of i by 1 each time, using the unary operator ++.
// By the time the setTimeout callback function was invoked, i was equal to 3 in the first example.

// In the second loop, the variable i was declared using the let keyword:
// variables declared with the let (and const) keyword are block-scoped (a block is anything between { }).
// During each iteration, i will have a new value, and each value is scoped inside the loop.


const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter()); // NaN

console.log(+true)  // converting to an integer -> 1
console.log(!'Tarun') // false

let a = 3
let b= new Number(3)
let c = 3

console.log(b)
console.log(a === b)
console.log(b === c)

const obj1 = {};
const obj2 = { key: 'b' };
const obj3 = { key: 'c' };

obj1[obj2] = 123;
obj1[obj3] = 456;

console.log(obj1[obj2]);