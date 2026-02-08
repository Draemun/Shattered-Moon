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
      <a href="#combat" onclick="setActive('combat')" class="category-card">
        <h2>Combat</h2>
      </a>
    </div>
  </div>
`

const rpRulesPage = `
  <div class="container">
    <section class="lore-content-section">
      <div class="trust-card">
        <p class="trust-text">We operate on a Trust System. Justify your character choices and make them logical within the lore.</p>
      </div>

      <h1>GENERAL RULES</h1>
      <ul class="rules-list">
        <li><strong>Pokémon only.</strong> Humans do not exist in this universe.</li>
        <li>All backstories will be reviewed for quality and lore consistency, regardless of server maturity rating.</li>
        <li><strong>Do not steal art.</strong> You must have <strong>explicit permission</strong> from the artist to use their work.</li>
      </ul>

      <h3>Acceptable Visual References</h3>
      <ul class="rules-list">
        <li>Anime screenshots</li>
        <li>Picrew creations (with credits)</li>
        <li>TCG art</li>
        <li>Your own original art</li>
        <li>Commissioned artwork</li>
      </ul>
      <p class="small-text">Art and use of Tupperbox are not obligatory.</p>
    </section>

    <section class="lore-content-section">
      <h1>PROHIBITED CONTENT</h1>
      <p>The following topics are strictly forbidden in character profiles, roleplay, and server lore:</p>
      
      <div class="spoiler-box" onclick="this.classList.toggle('revealed')">
        <div class="spoiler-overlay">Click to reveal sensitive content</div>
        <ul class="rules-list spoiler-content">
          <li>Sexual assault, rape, molestation, or sexual abuse of any kind</li>
          <li>Pedophilia or sexualization of minors</li>
          <li>Mimicry or parody of indigenous cultures or practices (Inspiration is acceptable; direct mimicry is not)</li>
          <li>Real-world religious imagery or practices (General inspiration is fine; explicit references are not)</li>
          <li>Real-world political statements or symbolism</li>
        </ul>
      </div>

      <ul class="rules-list">
        <li>Canon character connections, crossovers, parodies, or alternate universe versions</li>
        <li>Overly perfect characters</li>
        <li>Overpowered or god-modding characters</li>
        <li>Legendaries appearing in backstories without staff permission</li>
        <li>Pokémon fusions</li>
      </ul>
    </section>

    <section class="lore-content-section">
      <h1>ROLEPLAY GUIDELINES</h1>
      
      <h3>The Basics</h3>
      <ul class="rules-list">
        <li><strong>A completed and approved character profile is required before roleplaying.</strong></li>
        <li>All roleplay must occur in official server channels to be considered canon.</li>
        <li>No unsolicited DM roleplay requests.</li>
        <li>Use proper grammar and spelling. No text speak (e.g., "u" instead of "you").</li>
        <li>Minimum post length: 3 complete sentences.</li>
        <li>Write in third-person perspective only.</li>
      </ul>

      <h3>Etiquette & Conduct</h3>
      <ul class="rules-list">
        <li>Do not join others' ongoing RPs without explicit permission.</li>
        <li>Use Threads to RP</li>
        <li>Always ask for consent before attempting to kill, permanently maim, or severely injure another player's character.</li>
        <li><strong>All prohibited content rules apply to roleplay as well.</strong></li>
        <li>Spoiler-tag sensitive content.</li>
        <li>Do not cause map-altering or world-changing events without staff approval.</li>
        <li>You may participate in multiple RPs per character simultaneously, just manage your timelines responsibly.</li>
        <li><strong>No character limits.</strong></li>
      </ul>
    </section>
    
    <p style="text-align: center; margin-top: 30px;"><a href="https://discord.com/channels/1426570529200017549/1427572788474023987" target="_blank" class="discord-link">View Original</a></p>
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
