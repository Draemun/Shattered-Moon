async function noteworthiesPage() {
  const content = await loadMd('content/about/character-creation/noteworthies.md')
  return `<div class="container"><section class="lore-content-section">${content}</section></div>`
}
