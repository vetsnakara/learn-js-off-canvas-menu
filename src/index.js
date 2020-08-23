const button = document.querySelector('button')

const offsiteContainer = document.querySelector('.offsite-container')
const siteContainer = document.querySelector('.site-container')

button.addEventListener('click', () => {
  document.body.classList.toggle('offsite-is-open')
})