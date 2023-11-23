console.log('Start')


setTimeout(() => {
  console.log('SetTimeOut')
}, 3000)

fetch('https://dummyjson.com/products/').then(async (res) => {
  console.log(await res.json())
})


console.log('End')