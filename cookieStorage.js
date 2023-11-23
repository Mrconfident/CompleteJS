console.log(document.cookie)
//Cookies were invented to solve the problem "how to remember information about the user":


document.cookie = "name=Tarun; Secure"
document.cookie = "post=SDE;"


// Local Storage

// console.log(window.localStorage)

localStorage.setItem('training', 'interns')

console.log(localStorage.getItem('training'))

localStorage.removeItem('training')


const pos = navigator.connection.effectiveType

console.log(pos)