async function parliamentPage() {
  const content = await loadMd('content/about/character-creation/parliament.md')
  return `<div class="container"><div class="arc-back"><a href="#character-creation" onclick="setActive('character-creation')">← Back to Character Creation</a></div><section class="lore-content-section">${content}</section><p style="text-align:center;margin-top:30px;"><a href="https://docs.google.com/document/d/17zF2vHcF3EHldp8ANJUfR5i0Rr0FLfetq4IWwEHErkQ/edit?tab=t.oef8j17mawd6" target="_blank" class="discord-link">View Original</a></p></div>`
}
