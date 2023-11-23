const arr = [100, 2, 3, 4, 5, 6, 700, 8, 90]
console.log(arr)
// Map
// Map is used to create a new array from existing one
// Returns an Array 

const arr1 = arr.map(item => item * 4)

console.log(arr1)

// Filter
// Filter is used to some condition on particular el of array
// Returns an Array 
const even = arr.filter(item => item % 2 === 0)

console.log(even)


//Reduce
// Reduce Method will iterate over each arr ele and return a single value(accr to the need)

const sum = arr.reduce((acc, curr) => acc + curr)

console.log(sum)


const max = arr.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr
  }
  return acc
}, 0)

console.log(max)

