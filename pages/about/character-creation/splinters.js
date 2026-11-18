async function splintersPage() {
  const content = await loadMd('content/about/character-creation/splinters.md')
  const sections = content.split(/<hr\s*\/?>/).map(s => `<section class="lore-content-section">${s}</section>`).join('')
  return `<div class="container"><div class="arc-back"><a href="#character-creation" onclick="setActive('character-creation')">← Back to Character Creation</a></div>${sections}<p style="text-align:center;margin-top:30px;"><a href="https://docs.google.com/document/d/17zF2vHcF3EHldp8ANJUfR5i0Rr0FLfetq4IWwEHErkQ/edit?tab=t.6yw2abcn2i54" target="_blank" class="discord-link">View Original</a></p></div>`
}
