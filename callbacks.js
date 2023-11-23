function sayHello () {
  console.log('Hello')
}

function sayHii () {
  console.log('Hii')
}

function add (num1, num2, callback) {
  console.log(num1 + num2)
  callback()
}
// here we have passed 2 arguments in a function call.
// Now how can we pass a function as a Argument
let a = 10
let b = 20

add(a, b, sayHello)
add(a, b, sayHii)

