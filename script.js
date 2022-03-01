const menuNav = document.querySelector('div#menuNav')
const menuNavOpen = document.querySelector('div#menuNavOpen')

let show = true
menuNav.addEventListener('click', menuToggle)
menuNav.addEventListener('touch', menuToggle)
function menuToggle() {
  menuNavOpen.classList.toggle('active', show)
  menuNav.classList.toggle('active')

  show = !show
}
