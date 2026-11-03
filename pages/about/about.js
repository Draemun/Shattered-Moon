const aboutPage = `
  <div class="container">
    <div class="category-grid">
      <a href="#roleplay" onclick="setActive('roleplay')" class="category-card">
        <h2>Roleplay</h2>
      </a>
      <a href="#character-creation" onclick="setActive('character-creation')" class="category-card">
        <h2>Character Creation</h2>
      </a>
    </div>
  </div>
`

const roleplayPage = `
  <div class="container">
    <div class="category-grid">
      <a href="#rp-rules" onclick="setActive('rp-rules')" class="category-card">
        <h2>Roleplay Rules</h2>
      </a>
      <a href="#evolution-forms" onclick="setActive('evolution-forms')" class="category-card">
        <h2>Evolution & Forms</h2>
      </a>
      <a href="#gimmicks" onclick="setActive('gimmicks')" class="category-card">
        <h2>Gimmicks</h2>
      </a>
      <a href="#terrains" onclick="setActive('terrains')" class="category-card">
        <h2>Terrains</h2>
      </a>
      <a href="#unsplintering" onclick="setActive('unsplintering')" class="category-card">
        <h2>Unsplintering</h2>
      </a>
      <a href="#combat" onclick="setActive('combat')" class="category-card">
        <h2>Combat</h2>
      </a>
    </div>
  </div>
`

const characterCreationPage = `
  <div class="container">
    <div class="category-grid">
      <a href="#character-rules" onclick="setActive('character-rules')" class="category-card">
        <h2>Character Rules</h2>
      </a>
      <a href="#progression" onclick="setActive('progression')" class="category-card">
        <h2>Progression & Rewards</h2>
      </a>
      <a href="#factions" onclick="setActive('factions')" class="category-card">
        <h2>Factions</h2>
      </a>
      <a href="#parliament" onclick="setActive('parliament')" class="category-card">
        <h2>Parliament</h2>
      </a>
      <a href="#splinters" onclick="setActive('splinters')" class="category-card">
        <h2>Soul Splinters</h2>
      </a>
      <a href="#team-creation" onclick="setActive('team-creation')" class="category-card">
        <h2>Team Creation</h2>
      </a>
      <a href="#noteworthies" onclick="setActive('noteworthies')" class="category-card">
        <h2>Noteworthies</h2>
      </a>
      <a href="#legendaries" onclick="setActive('legendaries')" class="category-card">
        <h2>Legendary Entities</h2>
      </a>
    </div>
  </div>
`

async function rpRulesPage() {
  const content = await loadMd('content/about/roleplay/rp-rules.md')
  return `<div class="container"><section class="lore-content-section">${content}</section></div>`
}
