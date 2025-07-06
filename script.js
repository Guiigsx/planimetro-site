const links = document.querySelectorAll('.nav-link')
const toggleBtn = document.getElementById('menu-toggle')
const navLinks = document.getElementById('nav-links')

links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(l => l.classList.remove('active'))
    link.classList.add('active')
    navLinks.classList.remove('show')
    toggleBtn.classList.remove('active')
  })
})

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show')
  toggleBtn.classList.toggle('active')
})