async function legendariesPage() {
  const content = await loadMd('content/about/character-creation/legendaries.md')
  return `<div class="container"><div class="arc-back"><a href="#character-creation" onclick="setActive('character-creation')">← Back to Character Creation</a></div><section class="lore-content-section">${content}</section></div>`
}
