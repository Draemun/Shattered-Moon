async function combatPage() {
  const content = await loadMd('content/about/roleplay/combat.md')
  return `<div class="container"><div class="arc-back"><a href="#roleplay" onclick="setActive('roleplay')">← Back to Roleplay</a></div><section class="lore-content-section">${content}</section><p style="text-align:center;margin-top:30px;"><a href="https://docs.google.com/document/d/1oFa1ElLHFozPk4z0nEiFfDemHHAvpU6Lickm-dGqaIM/edit?tab=t.0" target="_blank" class="discord-link">View Original</a></p></div>`
}
