async function characterRulesPage() {
  const content = await loadMd('content/about/character-creation/character-rules.md')
  return `<div class="container"><section class="lore-content-section">${content}</section><p style="text-align:center;margin-top:30px;"><a href="https://discord.com/channels/1426570529200017549/1427574833654272010" target="_blank" class="discord-link">View Original</a></p></div>`
}
