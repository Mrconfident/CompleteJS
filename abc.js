const userDetails1 = {
  name: 'Tarun',
  age:25
}

const userDetails2 = {
  name: 'Sid',
  age: 40
}

const printDetails = function (arg1, arg2) {
  console.log(this.name)
  console.log(arg1)
  console.log(arg2)
}

//Function Borrowing
printDetails.call(userDetails2, 33, 44)

// apply -> call + we can pass array as argument
printDetails.apply(userDetails1, [1,2])

//bind -> call + take that particular bindig into a variable and use it where we want

const binded = printDetails.bind(userDetails1, 204, 305)
binded()
