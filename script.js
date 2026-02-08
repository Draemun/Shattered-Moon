const pages = {
  home: homePage,
  lore: lorePage,
  archives: archivesPage,
  'echo-miralen': echoMiralenPage,
  'echo-issue-21': echoIssue21Page,
  'echo-issue-26': echoIssue26Page,
  'echo-issue-27': echoIssue27Page,
  'echo-issue-622': echoIssue622Page,
  'entity-log': entityLogPage,
  'entity-found': entityFoundPage,
  'entity-faraway': entityFarawayPage,
  'entity-thorn-weaver': entityThornWeaverPage,
  about: aboutPage,
  roleplay: roleplayPage,
  'rp-rules': rpRulesPage,
  'evolution-forms': evolutionFormsPage,
  gimmicks: gimmicksPage,
  terrains: terrainsPage,
  'character-creation': characterCreationPage,
  'character-rules': characterRulesPage,
  progression: progressionPage,
  factions: factionsPage,
  parliament: parliamentPage,
  splinters: splintersPage,
  'team-creation': teamCreationPage,
  noteworthies: noteworthiesPage,
  legendaries: legendariesPage,
  combat: combatPage
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

const pageIndex = {
  'home': { title: 'Home', content: homePage },
  'lore': { title: 'Lore', content: lorePage },
  'archives': { title: 'Archives', content: archivesPage },
  'echo-miralen': { title: 'Echo of Miralen', content: echoMiralenPage },
  'echo-issue-21': { title: 'Issue #21 - Guild Factions', content: echoIssue21Page },
  'echo-issue-26': { title: 'Issue #26 - Miralen Apex Rush', content: echoIssue26Page },
  'echo-issue-27': { title: 'Issue #27 - Splinter in Veldenroot', content: echoIssue27Page },
  'echo-issue-622': { title: 'Issue #622 - Glacien Hollow', content: echoIssue622Page },
  'entity-log': { title: 'Entity Log', content: entityLogPage },
  'entity-found': { title: 'Entity: found', content: entityFoundPage },
  'entity-faraway': { title: 'Entity: Faraway', content: entityFarawayPage },
  'entity-thorn-weaver': { title: 'Entity: Thorn Weaver', content: entityThornWeaverPage },
  'about': { title: 'About', content: aboutPage },
  'roleplay': { title: 'Roleplay', content: roleplayPage },
  'rp-rules': { title: 'RP Rules', content: rpRulesPage },
  'character-creation': { title: 'Character Creation', content: characterCreationPage },
  'character-rules': { title: 'Character Rules', content: characterRulesPage },
  'progression': { title: 'Progression & Rewards', content: progressionPage },
  'factions': { title: 'Factions', content: factionsPage },
  'parliament': { title: 'Parliament', content: parliamentPage },
  'splinters': { title: 'Soul Splinters', content: splintersPage },
  'team-creation': { title: 'Team Creation', content: teamCreationPage },
  'noteworthies': { title: 'Noteworthies', content: noteworthiesPage },
  'legendaries': { title: 'Legendary Entities', content: legendariesPage },
  'evolution-forms': { title: 'Evolution & Forms', content: evolutionFormsPage },
  'gimmicks': { title: 'Gimmicks', content: gimmicksPage },
  'terrains': { title: 'Terrains', content: terrainsPage },
  'combat': { title: 'Combat', content: combatPage }
}

function handleSearch(event) {
  const query = event.target.value.toLowerCase().trim()
  const resultsDiv = document.getElementById('searchResults')
  
  if (!query) {
    resultsDiv.style.display = 'none'
    return
  }
  
  const matches = []
  const seen = new Set()
  
  Object.keys(pageIndex).forEach(pageKey => {
    const page = pageIndex[pageKey]
    const contentLower = page.content.toLowerCase()
    
    if (contentLower.includes(query) && !seen.has(pageKey)) {
      const index = contentLower.indexOf(query)
      const start = Math.max(0, index - 50)
      const end = Math.min(page.content.length, index + query.length + 50)
      let snippet = page.content.substring(start, end).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
      
      if (start > 0) snippet = '...' + snippet
      if (end < page.content.length) snippet = snippet + '...'
      
      const occurrences = (contentLower.match(new RegExp(query, 'g')) || []).length
      
      matches.push({ 
        key: pageKey, 
        title: page.title, 
        snippet: snippet,
        count: occurrences
      })
      seen.add(pageKey)
    }
  })
  
  matches.sort((a, b) => b.count - a.count)
  
  if (matches.length > 0) {
    resultsDiv.innerHTML = matches.map(match => 
      `<div class="search-result-item" onclick="navigateToPage('${match.key}', '${query}')">
        <div class="search-result-title">${match.title} <span class="search-count">(${match.count})</span></div>
        <div class="search-result-snippet">${match.snippet}</div>
      </div>`
    ).join('')
    resultsDiv.style.display = 'block'
  } else {
    resultsDiv.innerHTML = '<div class="search-result-item">No results found</div>'
    resultsDiv.style.display = 'block'
  }
}

function navigateToPage(page, query = '') {
  window.location.hash = page
  const searchInput = document.getElementById('searchInput')
  const searchQuery = query || searchInput.value
  searchInput.value = ''
  document.getElementById('searchResults').style.display = 'none'
  document.getElementById('searchBox').classList.remove('active')
  
  if (searchQuery) {
    setTimeout(() => {
      highlightAndScroll(searchQuery)
    }, 100)
  } else {
    setTimeout(() => window.scrollTo(0, 0), 50)
  }
}

function highlightAndScroll(query) {
  const app = document.getElementById('app')
  const walker = document.createTreeWalker(app, NodeFilter.SHOW_TEXT, null, false)
  let node
  let firstMatch = null
  
  while (node = walker.nextNode()) {
    if (node.nodeValue.toLowerCase().includes(query.toLowerCase())) {
      const parent = node.parentNode
      const text = node.nodeValue
      const regex = new RegExp(`(${query})`, 'gi')
      const highlighted = text.replace(regex, '<mark style="background: var(--accent-purple); color: white; padding: 2px 4px; border-radius: 3px;">$1</mark>')
      const span = document.createElement('span')
      span.innerHTML = highlighted
      parent.replaceChild(span, node)
      
      if (!firstMatch) {
        firstMatch = span
      }
    }
  }
  
  if (firstMatch) {
    const rect = firstMatch.getBoundingClientRect()
    const scrollTop = window.pageYOffset + rect.top - 150
    window.scrollTo({ top: scrollTop, behavior: 'smooth' })
    
    setTimeout(() => {
      document.querySelectorAll('mark').forEach(mark => {
        const text = mark.textContent
        mark.replaceWith(text)
      })
    }, 1500)
  }
}

function toggleSearch() {
  const searchBox = document.getElementById('searchBox')
  searchBox.classList.toggle('active')
  if (searchBox.classList.contains('active')) {
    document.getElementById('searchInput').focus()
  }
}

document.addEventListener('click', (e) => {
  if (!e.target.closest('.search-container')) {
    document.getElementById('searchResults').style.display = 'none'
    document.getElementById('searchBox').classList.remove('active')
  }
})
