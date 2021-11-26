let display = document.getElementById('display')
let buttons = Array.from(document.getElementsByClassName('buttons'))

buttons.map((button) => {
  button.addEventListener('click', (e) => {
    // console.log('clicked')
    // console.log(e)
    // console.log(e.target)
    // console.log(e.target.inerText)
    switch (e.target.innerText) {
      case 'C':
        display.innerText = ''
        break
      case '←':
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1)
        }
        break
      case '=':
        try {
          if (
            display.innerText.charAt(0) >= '0' &&
            display.innerText.charAt(0) <= '9'
          ) {
            display.innerText = eval(display.innerText)
          } else {
            display.innerText = 'Error!'
          }
        } catch {
          display.innerText = 'Error!'
        }
        break
      default:
        display.innerText += e.target.innerText
    }
  })
})
