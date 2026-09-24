import { setupNavToggle } from './nav.js'

describe('setupNavToggle', () => {
  let toggle
  let nav

  beforeEach(() => {
    document.body.innerHTML = `
      <button class="nav-toggle" aria-expanded="false"></button>
      <nav class="primary-nav"></nav>
    `
    toggle = document.querySelector('.nav-toggle')
    nav = document.querySelector('.primary-nav')
    setupNavToggle(toggle, nav)
  })

  it('starts closed', () => {
    expect(toggle.getAttribute('aria-expanded')).toBe('false')
    expect(nav.classList.contains('is-open')).toBe(false)
  })

  it('opens on click', () => {
    toggle.click()
    expect(toggle.getAttribute('aria-expanded')).toBe('true')
    expect(nav.classList.contains('is-open')).toBe(true)
  })

  it('closes on second click', () => {
    toggle.click()
    toggle.click()
    expect(toggle.getAttribute('aria-expanded')).toBe('false')
    expect(nav.classList.contains('is-open')).toBe(false)
  })
})
