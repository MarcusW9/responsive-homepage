export function setupNavToggle(navToggle, primaryNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true'

    navToggle.setAttribute('aria-expanded', String(!isOpen))
    primaryNav.classList.toggle('is-open')
  })
}
