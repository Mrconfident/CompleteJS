const API_URL = 'https://api.github.com/users/Mrconfident'

const user = fetch(API_URL)

console.log(user)
user.then(res => {
  return res.json()
}).then((data) => {
  console.log(data)
}).catch(err => {
  console.log(err)
})