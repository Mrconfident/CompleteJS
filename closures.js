const sum = function (a) {
  const c = 10;
  return function(b) {
    return a + b + c
  }
}

const store = sum(5);
console.log(store(4))

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).



const add = function (a, b, c) {
  return {
    getTwoSum: function () {
      console.log(this)
      return a + b
    },
    getThreeSum: function () {
      console.log(this)
      return a + b + c
    }
  }
}

const x = add(3,4,5)
console.log(x.getTwoSum())
console.log(x.getThreeSum())