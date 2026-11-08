function factionsPage() {
  return `
  <div class="container">
    <h2 style="text-align:center; margin-bottom: 40px;">FACTIONS</h2>

    <div class="faction-group">
      <div class="faction-group-label">Guild</div>
      <a href="#faction-guild-rank" onclick="setActive('faction-guild-rank')" class="faction-row">
        <span class="faction-row-tag">Overview</span>
        <span class="faction-row-name">Guild Rank Progression</span>
        <span class="faction-row-arrow">›</span>
      </a>
      <a href="#faction-wardens" onclick="setActive('faction-wardens')" class="faction-row">
        <span class="faction-row-tag">Defense & Security</span>
        <span class="faction-row-name">Wardens</span>
        <span class="faction-row-arrow">›</span>
      </a>
      <a href="#faction-chroniclers" onclick="setActive('faction-chroniclers')" class="faction-row">
        <span class="faction-row-tag">Documentation & Archives</span>
        <span class="faction-row-name">Chroniclers</span>
        <span class="faction-row-arrow">›</span>
      </a>
      <a href="#faction-scouts" onclick="setActive('faction-scouts')" class="faction-row">
        <span class="faction-row-tag">Reconnaissance & Supply</span>
        <span class="faction-row-name">Scouts</span>
        <span class="faction-row-arrow">›</span>
      </a>
      <a href="#faction-builders" onclick="setActive('faction-builders')" class="faction-row">
        <span class="faction-row-tag">Construction & Infrastructure</span>
        <span class="faction-row-name">Builders</span>
        <span class="faction-row-arrow">›</span>
      </a>
      <a href="#faction-providers" onclick="setActive('faction-providers')" class="faction-row">
        <span class="faction-row-tag">Resources & Healing</span>
        <span class="faction-row-name">Providers</span>
        <span class="faction-row-arrow">›</span>
      </a>
      <a href="#faction-void-hunters" onclick="setActive('faction-void-hunters')" class="faction-row">
        <span class="faction-row-tag">Offence & Entity Handling</span>
        <span class="faction-row-name">Void Hunters</span>
        <span class="faction-row-arrow">›</span>
      </a>
    </div>

    <div class="faction-group">
      <div class="faction-group-label">Independent</div>
      <a href="#faction-independent" onclick="setActive('faction-independent')" class="faction-row">
        <span class="faction-row-tag">Overview</span>
        <span class="faction-row-name">Independent Factions</span>
        <span class="faction-row-arrow">›</span>
      </a>
      <a href="#faction-the-lost" onclick="setActive('faction-the-lost')" class="faction-row">
        <span class="faction-row-tag">They who lost the light</span>
        <span class="faction-row-name">The Lost</span>
        <span class="faction-row-arrow">›</span>
      </a>
      <a href="#faction-voidsworn" onclick="setActive('faction-voidsworn')" class="faction-row">
        <span class="faction-row-tag">Mainstream Religion</span>
        <span class="faction-row-name">The Voidsworn</span>
        <span class="faction-row-arrow">›</span>
      </a>
    </div>
  </div>
  `
}

async function factionGuildRankPage() {
  const content = await loadMd('content/about/character-creation/factions/guild-rank-progression.md')
  return `<div class="container"><div class="arc-back"><a href="#factions" onclick="setActive('factions')">← Back to Factions</a></div><section class="lore-content-section">${content}</section></div>`
}

async function factionWardensPage() {
  const content = await loadMd('content/about/character-creation/factions/wardens.md')
  return `<div class="container"><div class="arc-back"><a href="#factions" onclick="setActive('factions')">← Back to Factions</a></div><section class="lore-content-section">${content}</section></div>`
}

async function factionChroniclersPage() {
  const content = await loadMd('content/about/character-creation/factions/chroniclers.md')
  return `<div class="container"><div class="arc-back"><a href="#factions" onclick="setActive('factions')">← Back to Factions</a></div><section class="lore-content-section">${content}</section></div>`
}

async function factionScoutsPage() {
  const content = await loadMd('content/about/character-creation/factions/scouts.md')
  return `<div class="container"><div class="arc-back"><a href="#factions" onclick="setActive('factions')">← Back to Factions</a></div><section class="lore-content-section">${content}</section></div>`
}

async function factionBuildersPage() {
  const content = await loadMd('content/about/character-creation/factions/builders.md')
  return `<div class="container"><div class="arc-back"><a href="#factions" onclick="setActive('factions')">← Back to Factions</a></div><section class="lore-content-section">${content}</section></div>`
}

async function factionProvidersPage() {
  const content = await loadMd('content/about/character-creation/factions/providers.md')
  return `<div class="container"><div class="arc-back"><a href="#factions" onclick="setActive('factions')">← Back to Factions</a></div><section class="lore-content-section">${content}</section></div>`
}

async function factionVoidHuntersPage() {
  const content = await loadMd('content/about/character-creation/factions/void-hunters.md')
  return `<div class="container"><div class="arc-back"><a href="#factions" onclick="setActive('factions')">← Back to Factions</a></div><section class="lore-content-section">${content}</section></div>`
}

async function factionIndependentPage() {
  const content = await loadMd('content/about/character-creation/factions/independent.md')
  return `<div class="container"><div class="arc-back"><a href="#factions" onclick="setActive('factions')">← Back to Factions</a></div><section class="lore-content-section">${content}</section></div>`
}

async function factionTheLostPage() {
  const content = await loadMd('content/about/character-creation/factions/the-lost.md')
  return `<div class="container"><div class="arc-back"><a href="#factions" onclick="setActive('factions')">← Back to Factions</a></div><section class="lore-content-section">${content}</section></div>`
}

async function factionVoidswornPage() {
  const content = await loadMd('content/about/character-creation/factions/voidsworn.md')
  return `<div class="container"><div class="arc-back"><a href="#factions" onclick="setActive('factions')">← Back to Factions</a></div><section class="lore-content-section">${content}</section></div>`
}
