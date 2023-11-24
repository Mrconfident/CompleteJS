

const async1 = setTimeout(() => {
  console.log('ASYNC 1')
}, 2000)


const async2 = setTimeout(() => {
  console.log('ASYNC 2')
  console.log(async1)
  clearTimeout(async1)
}, 1000)


const async3 = setTimeout(() => {
  console.log('ASYNC 3')
}, 5000)



// SetInterval

let timer = 0

const intervalID = setInterval(() => {
  timer++
  console.log('1 Sec Elapsed')
  if (timer === 12) {
    clearInterval(intervalID)
  }
}, 1000)