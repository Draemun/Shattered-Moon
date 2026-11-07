async function noteworthiesPage() {
  const content = await loadMd('content/about/character-creation/noteworthies.md')
  return `<div class="container"><div class="arc-back"><a href="#character-creation" onclick="setActive('character-creation')">← Back to Character Creation</a></div><section class="lore-content-section">${content}</section></div>`
}