const pages = {
  home: homePage,
  lore: lorePage,
  archives: archivesPage,
  'echo-miralen': echoMiralenPage,
  'entity-log': entityLogPage,
  'rp-rules': rpRulesPage,
  'character-creation': characterCreationPage
}

function router() {
  const hash = location.hash.slice(1) || 'home'
  document.getElementById('app').innerHTML = pages[hash] || pages.home
  updateIndicator(hash)
}

function toggleMenu() {
  document.getElementById('sidebar').classList.toggle('open')
}

function setActive(page) {
  updateIndicator(page)
  setTimeout(() => document.getElementById('sidebar').classList.remove('open'), 300)
}

function updateIndicator(page) {
  document.querySelectorAll('.sidebar a').forEach(a => a.classList.remove('active'))
  const activeLink = document.querySelector(`[data-page="${page}"]`)
  if (activeLink) activeLink.classList.add('active')
}

window.addEventListener('hashchange', router)
window.addEventListener('load', router)
