const numbers = [1, 2, 3, 4, 5]

//destructuring arrays assignment
const [first, second, ...third] = numbers // use of rest operator
console.log(first)
console.log(second)
console.log(third)

//How to Use Array Destructuring to Extract Values at Any Index

const names = ['tarun', 'parul', 'shyamu', 'jhullu']

const [p, q = 'Karan', ...rest] = names // default value while array destructuring
console.log(p)
console.log(q)
console.log(rest)

// swapping variables while array destructuring
let firstName = "Oluwatobi";
let website = "CodeSweetly";
[firstName, website] = [website, firstName];

console.log(firstName); // "CodeSweetly"
console.log(website); // "Oluwatobi"


//Spread Operator
const data = [1,2,43,50]
function add1 (a, b, c, d) {
  return a + b + c + d;
}

console.log(add1(...data))

