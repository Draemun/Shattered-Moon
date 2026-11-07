async function progressionPage() {
  const content = await loadMd('content/about/character-creation/progression.md')
  return `<div class="container"><div class="arc-back"><a href="#character-creation" onclick="setActive('character-creation')">← Back to Character Creation</a></div><section class="lore-content-section">${content}</section><p style="text-align:center;margin-top:30px;"><a href="https://docs.google.com/document/d/17zF2vHcF3EHldp8ANJUfR5i0Rr0FLfetq4IWwEHErkQ/edit?tab=t.0" target="_blank" class="discord-link">View Original</a></p></div>`
}
