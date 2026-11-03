async function teamCreationPage() {
  const content = await loadMd('content/about/character-creation/team-creation.md')
  return `<div class="container"><section class="lore-content-section">${content}</section><p style="text-align:center;margin-top:30px;"><a href="https://discord.com/channels/1426570529200017549/1427579441978019880" target="_blank" class="discord-link">View Original</a></p></div>`
}
