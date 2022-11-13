import "vanilla-headless"
import "./XScroll"
import "./search.js"


document.querySelectorAll('.highlight').forEach((block: HTMLElement) => {

  const lang = block.querySelector('[data-lang]').getAttribute('data-lang')
  const header = document.createElement("div")
  const textDiv = document.createElement("span")
  header.classList.add('codeHeader')

  block.before(header)

  const button = document.createElement("button")
  button.classList.add('btn-copy')
  button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
  <path fill-rule="evenodd" d="M15.988 3.012A2.25 2.25 0 0118 5.25v6.5A2.25 2.25 0 0115.75 14H13.5v-3.379a3 3 0 00-.879-2.121l-3.12-3.121a3 3 0 00-1.402-.791 2.252 2.252 0 011.913-1.576A2.25 2.25 0 0112.25 1h1.5a2.25 2.25 0 012.238 2.012zM11.5 3.25a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v.25h-3v-.25z" clip-rule="evenodd" />
  <path d="M3.5 6A1.5 1.5 0 002 7.5v9A1.5 1.5 0 003.5 18h7a1.5 1.5 0 001.5-1.5v-5.879a1.5 1.5 0 00-.44-1.06L8.44 6.439A1.5 1.5 0 007.378 6H3.5z" />
    </svg>`
  textDiv.append(lang)
  header.append(textDiv)
  header.append(button)
  button.addEventListener('click', (e) => {
    const codeBlock = block.querySelector('.code') || block.querySelector('code')
    const text = (codeBlock as HTMLElement).innerText
    navigator.clipboard.writeText(text).then(r => {
      const span = document.createElement('span')
      span.classList.add('copied')
      span.innerText = 'copied'
      if(button.contains(span) === false) {
        button.append(span)
      }
      setTimeout(() => {
        span.remove()
      }, 700)
    })
  })
})




