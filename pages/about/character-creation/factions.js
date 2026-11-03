async function factionsPage() {
  const content = await loadMd('content/about/character-creation/factions.md')
  return `<div class="container"><section class="lore-content-section">${content}</section><p style="text-align:center;margin-top:30px;"><a href="https://docs.google.com/document/d/17zF2vHcF3EHldp8ANJUfR5i0Rr0FLfetq4IWwEHErkQ/edit?tab=t.6b31l96e32br" target="_blank" class="discord-link">View Original</a></p></div>`
}
