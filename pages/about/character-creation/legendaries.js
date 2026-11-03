async function legendariesPage() {
  const content = await loadMd('content/about/character-creation/legendaries.md')
  return `<div class="container"><section class="lore-content-section">${content}</section></div>`
}
