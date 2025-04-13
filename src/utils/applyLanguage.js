export function applyLanguage() {
  const savedLanguage = localStorage.getItem('language') || 'en'
  document.documentElement.setAttribute('lang', savedLanguage)

  document.addEventListener('DOMContentLoaded', () => {
    document.body.style.display = 'block'
  })
}
