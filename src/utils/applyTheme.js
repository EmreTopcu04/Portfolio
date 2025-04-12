export function applyTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark'
  document.documentElement.setAttribute('data-theme', savedTheme)

  document.addEventListener('DOMContentLoaded', () => {
    document.body.style.display = 'block'
  })
}
