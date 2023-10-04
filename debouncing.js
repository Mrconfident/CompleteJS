const input = document.querySelector('input')
const def = document.getElementById('def')
const deb = document.getElementById('debounce')
const thr = document.getElementById('throttle')

// input?.addEventListener('input', event => {
//   def.innerText = event.target.value
//   updatedDebouncing(event.target.value)
// })

const updatedDebouncing = debouncer((event) => {
  deb.innerText = event
})

//debouncer
function debouncer (cb, delay = 1000) {
  let timer
  return (value) => {
    def.innerText = value
    clearTimeout(timer)
    timer = setTimeout(() => {
      cb(value)
    }, delay)
  }
}