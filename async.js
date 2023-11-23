// Async JS Programming

// Promises, Asyn & Await.

const data = [
  {
    name: 'Tarun',
    profession: 'SDE'
  },
  {
    name: 'Pratik',
    profession: 'SDE1'
  },
  {
    name: 'Sahil',
    profession: 'SDE2'
  },
  {
    name: 'Ronak',
    profession: 'Lead'
  }
]

function getData () {
  setTimeout(() => {
    data.forEach(res => {
      console.log(res.name)
    })
  }, 1000)
}


getData()


function createData (dataSet) {
  setTimeout(() => {
    data.push(dataSet)
  })
}
createData({
  name: 'Arihant',
  profession: 'Artist'
})



const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res('Promise p1 Resolved')
  }, 25000)
})

const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    res('Promise p2 Resolved')
  }, 15000)
})

async function handlePromise () {
  console.log('Hello World')

  const d1 = await p1

  console.log('P1 Promise')
  console.log(d1)

  const d2 = await p2

  console.log('P2 Promise')
  console.log(d2)
}

handlePromise()



const API_URL = 'https://api.github.com/users/Mrconfident'

async function apicall () {
  const data = await fetch(API_URL)
  const jsonData = await data.json()
  console.log(jsonData)
}

apicall()