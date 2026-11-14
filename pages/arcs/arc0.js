const arc0Threads = [
  { title: 'Red Threads of Fate',     file: 'content/arcs/arc0/red-threads-of-fate.md' },
  { title: "The Chronicler's Utility", file: 'content/arcs/arc0/chroniclers-utility.md' },
  { title: 'Endless Slumber',          file: 'content/arcs/arc0/endless-slumber.md' },
  { title: 'Wordplay',                 file: 'content/arcs/arc0/wordplay.md' },
  { title: 'Looping the Rooms',        file: 'content/arcs/arc0/looping-the-rooms.md' },
  { title: 'Interstice',               file: 'content/arcs/arc0/interstice.md' },
  { title: 'No-Snake Hotel',           file: 'content/arcs/arc0/no-snake-hotel.md' }
]

async function arc0Page() {
  const summary = await loadMd('content/arcs/arc0/summary.md')
  const threadBodies = await Promise.all(arc0Threads.map(t => loadMd(t.file)))

  return `
  <div class="container">
    <section class="lore-content-section">
      <div class="arc-back"><a href="#arcs" onclick="setActive('arcs')">&larr; Arcs &amp; Events</a></div>
      <h1>ARC 0 - THE MOONGLITCH</h1>

      <div class="arc-summary-card">
        <div class="arc-summary-label">Arc Summary</div>
        ${summary}
      </div>

      <div class="arc-threads-label">Threads</div>
      <div class="arc-threads">
        ${arc0Threads.map((t, i) => `
          <div class="arc-thread">
            <button class="arc-thread-btn" data-index="${i}" aria-expanded="false">
              <span>${t.title}</span>
              <span class="arc-thread-arrow">&#9660;</span>
            </button>
            <div class="arc-thread-body" id="arc0-thread-${i}" hidden>
              ${threadBodies[i]}
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  </div>
  `
}

document.addEventListener('routeRendered', () => {
  const btns = document.querySelectorAll('.arc-thread-btn')
  if (!btns.length) return
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const i = btn.dataset.index
      const expanded = btn.getAttribute('aria-expanded') === 'true'
      btn.setAttribute('aria-expanded', String(!expanded))
      btn.classList.toggle('open', !expanded)
      const body = btn.closest('.arc-thread').querySelector('.arc-thread-body')
      body.hidden = expanded
    })
  })
})
