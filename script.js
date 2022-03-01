const menuNav = document.querySelector('div#menuNav')
const menuNavOpen = document.querySelector('div#menuNavOpen')
// menuNav.addEventListener('click', () => {
//   menuNavOpen.classList.toggle('on', show) // "on" mais o show vai evitar de bugar de abrir na  hora errada
//   // adicionando o menuNavOpenn e vai adicionar a lista de classes via toggle , o toggle vai adicionar e tirar
//   show = !show
//   // como isso ele vai atualizar o "show" ppara uum show diferente, o show false
// })

let show = true
menuNav.addEventListener('click', menuToggle)
menuNav.addEventListener('touch', menuToggle)
function menuToggle() {
  menuNavOpen.classList.toggle('active', show)
  menuNav.classList.toggle('active')

  show = !show
}
