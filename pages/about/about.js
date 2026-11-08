const aboutPage = `
  <div class="container">
    <div class="faction-group">
      <div class="faction-group-label">About</div>
      <a href="#roleplay" onclick="setActive('roleplay')" class="faction-row">
        <span class="faction-row-name">Roleplay</span>
        <span class="faction-row-arrow">›</span>
      </a>
      <a href="#character-creation" onclick="setActive('character-creation')" class="faction-row">
        <span class="faction-row-name">Character Creation</span>
        <span class="faction-row-arrow">›</span>
      </a>
    </div>
  </div>
`

const roleplayPage = `
  <div class="container">
    <div class="arc-back"><a href="#about" onclick="setActive('about')">← Back to About</a></div>
    <div class="faction-group">
      <div class="faction-group-label">Roleplay</div>
      <a href="#rp-rules" onclick="setActive('rp-rules')" class="faction-row">
        <span class="faction-row-name">Roleplay Rules</span>
        <span class="faction-row-arrow">›</span>
      </a>
      <a href="#evolution-forms" onclick="setActive('evolution-forms')" class="faction-row">
        <span class="faction-row-name">Evolution & Forms</span>
        <span class="faction-row-arrow">›</span>
      </a>
      <a href="#gimmicks" onclick="setActive('gimmicks')" class="faction-row">
        <span class="faction-row-name">Gimmicks</span>
        <span class="faction-row-arrow">›</span>
      </a>
      <a href="#terrains" onclick="setActive('terrains')" class="faction-row">
        <span class="faction-row-name">Terrains</span>
        <span class="faction-row-arrow">›</span>
      </a>
      <a href="#unsplintering" onclick="setActive('unsplintering')" class="faction-row">
        <span class="faction-row-name">Unsplintering</span>
        <span class="faction-row-arrow">›</span>
      </a>
      <a href="#combat" onclick="setActive('combat')" class="faction-row">
        <span class="faction-row-name">Combat</span>
        <span class="faction-row-arrow">›</span>
      </a>
    </div>
  </div>
`

const characterCreationPage = `
  <div class="container">
    <div class="arc-back"><a href="#about" onclick="setActive('about')">← Back to About</a></div>
    <div class="faction-group">
      <div class="faction-group-label">Character Creation</div>
      <a href="#character-rules" onclick="setActive('character-rules')" class="faction-row">
        <span class="faction-row-name">Character Rules</span>
        <span class="faction-row-arrow">›</span>
      </a>
      <a href="#progression" onclick="setActive('progression')" class="faction-row">
        <span class="faction-row-name">Progression & Rewards</span>
        <span class="faction-row-arrow">›</span>
      </a>
      <a href="#factions" onclick="setActive('factions')" class="faction-row">
        <span class="faction-row-name">Factions</span>
        <span class="faction-row-arrow">›</span>
      </a>
      <a href="#parliament" onclick="setActive('parliament')" class="faction-row">
        <span class="faction-row-name">Parliament</span>
        <span class="faction-row-arrow">›</span>
      </a>
      <a href="#splinters" onclick="setActive('splinters')" class="faction-row">
        <span class="faction-row-name">Soul Splinters</span>
        <span class="faction-row-arrow">›</span>
      </a>
      <a href="#team-creation" onclick="setActive('team-creation')" class="faction-row">
        <span class="faction-row-name">Team Creation</span>
        <span class="faction-row-arrow">›</span>
      </a>
      <a href="#noteworthies" onclick="setActive('noteworthies')" class="faction-row">
        <span class="faction-row-name">Noteworthies</span>
        <span class="faction-row-arrow">›</span>
      </a>
      <a href="#legendaries" onclick="setActive('legendaries')" class="faction-row">
        <span class="faction-row-name">Legendary Entities</span>
        <span class="faction-row-arrow">›</span>
      </a>
    </div>
  </div>
`

async function rpRulesPage() {
  const content = await loadMd('content/about/roleplay/rp-rules.md')
  return `<div class="container"><div class="arc-back"><a href="#roleplay" onclick="setActive('roleplay')">← Back to Roleplay</a></div><section class="lore-content-section">${content}</section></div>`
}
