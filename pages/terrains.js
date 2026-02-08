const terrainsPage = `
  <div class="container">
    <section class="lore-content-section">
      <h1>TERRAIN MECHANICS</h1>
      <p>Terrain is a type of field effect that affects the surrounding area. Only one type of terrain may be present at a time, with any new terrain put in place overwriting the previous terrain.</p>
      <p>Once activated, a terrain affects all Pokémon on the ground, and it normally lasts for 5 turns regardless of how it is created, but if the Pokémon who activated it held a Terrain Extender when the terrain was put into effect, it lasts 8 turns.</p>
      <p>They deal chip damage to Splintered souls until their effect wears off and have a 3 turn cooldown.</p>
      <p class="small-text">Each terrain is activated by a specific move (listed in bold on the left side). These moves can be learned by Pokémon of the corresponding type and all have 5 pp.</p>
    </section>

    <section class="lore-content-section">
      <h1>STANDARD TERRAINS</h1>
      <table class="combat-table">
        <tr><th>Terrain</th><th>Effects</th></tr>
        <tr><td>Electric Terrain</td><td>Electric-type moves increase in base power by 1.5x<br>Prevents sleep and Yawn effects</td></tr>
        <tr><td>Grassy Terrain</td><td>Grass-type moves increase in base power by 1.5x<br>Fire-type moves increase in base power by 1.5x<br>Restores 1/16 max HP per turn</td></tr>
        <tr><td>Misty Terrain</td><td>Dragon-type moves decrease in base power by 0.5x<br>Fairy-type Pokémon's Defenses boosted by 1.5x<br>Prevents status conditions and confusion</td></tr>
        <tr><td>Psychic Terrain</td><td>Psychic-type moves increase in base power by 1.5x<br>Priority attacks fail</td></tr>
      </table>
    </section>

    <section class="lore-content-section">
      <h1>ELEMENTAL TERRAINS</h1>
      <table class="combat-table">
        <tr><th>Terrain</th><th>Effects</th></tr>
        <tr><td>Burning Field</td><td>Fire-type moves increase in base power by 1.5x<br>Grass-type moves decrease in base power by 0.5x<br>Ice-type moves decrease in base power by 0.5x<br>Prevents freeze status</td></tr>
        <tr><td>Ice Field</td><td>Ice-type moves increase in base power by 1.5x<br>Fire-type moves decrease in base power by 0.5x<br>Ice-type Pokémon's Defenses boosted by 1.5x when hail is active<br>Burn damage is halved<br>Hail lasts 8 turns</td></tr>
        <tr><td>Water Surface</td><td>Water-type moves increase in base power by 1.5x<br>Electric-type moves increase in base power by 1.5x<br>Fire-type moves decrease in base power by 0.5x<br>Speed decreased by 0.75x (except Water-types)<br>Ground-type attacks always fail</td></tr>
        <tr><td>Swamp Field</td><td>Poison-type moves increase in base power by 1.5x<br>All Pokémon have Speed lowered by 1 stage at end of turn (except Quick Feet, Swift Swim, Clear Body, White Smoke)<br>Sleeping Pokémon take damage (except Magic Guard)</td></tr>
        <tr><td>Desert Field</td><td>Rock-type moves increase in base power by 1.5x<br>Water-type moves decrease in base power by 0.5x<br>Electric-type moves decrease in base power by 0.5x<br>Ground-type Pokémon's Defenses boosted by 1.5x<br>Harsh sunlight and sandstorm last 8 turns</td></tr>
        <tr><td>Ruined Terrain</td><td>Dark-type Pokémon's Defenses boosted by 1.5x<br>Ghost-type Pokémon's Defenses boosted by 1.5x</td></tr>
        <tr><td>Arenaria Terrain</td><td>Rock-type Defenses increase by 1.5x<br>Sound-based moves increase in base power by 1.5x<br>Flying-type moves decrease in base power by 0.5x<br>Ground-type moves can hit airborne Pokémon</td></tr>
        <tr><td>Crystal Terrain</td><td>Psychic-type moves increase in base power by 1.5x<br>Dragon-type moves increase in base power by 1.5x<br>Psychic/Dragon Defenses increase by 1.5x</td></tr>
        <tr><td>Dragon's Reign</td><td>Dragon-type moves increase in base power by 1.5x<br>Fire-type moves increase in base power by 1.5x<br>Water-type moves decrease in base power by 0.5x<br>Ice-type moves decrease in base power by 0.5x</td></tr>
        <tr><td>Frozen Edge</td><td>Ice-type moves increase in base power by 1.5x<br>Flying-type moves increase in base power by 1.5x<br>Fire-type moves decrease in base power by 0.5x<br>Ice-type Pokémon's Defenses boosted by 1.5x when hail is active<br>Harsh sunlight and hail last 8 turns</td></tr>
        <tr><td>Swarm Terrain</td><td>Bug-type moves increase in base power by 1.5x<br>Grass-type moves decrease in base power by 0.5x<br>Fighting-type moves decrease in base power by 0.5x</td></tr>
        <tr><td>Wasteland</td><td>Fighting-type moves increase in base power by 1.5x<br>Shell Bell restores HP equal to 25% of damage dealt<br>Sandstorm lasts 8 turns</td></tr>
        <tr><td>Starlight Arena</td><td>Dark-type moves increase in base power by 1.5x<br>Psychic-type moves increase in base power by 1.5x<br>Fairy-type moves increase in base power by 1.5x<br>All base power boosts cancelled if any weather is active</td></tr>
        <tr><td>Steel Terrain</td><td>Steel-type moves increase in base power by 1.5x<br>Electric-type moves increase in base power by 1.5x<br>Fire-type moves decrease in base power by 0.5x<br>Steel-type Pokémon's Defenses boosted by 1.5x<br>Sandstorm lasts 8 turns</td></tr>
        <tr><td>Aerial Terrain</td><td>Flying-type moves increase in base power by 1.5x<br>Ground-type moves always fail<br>Rock-type moves decrease in base power by 0.5x<br>All Pokémon treated as airborne<br>Tailwind lasts 4 turns</td></tr>
        <tr><td>Rainbow Field</td><td>Normal-type moves increase in base power by 1.5x and gain a random secondary type (roll 1d18 each use)<br>Chances of moves having additional effects doubled (does not stack with Serene Grace)<br>Sleeping Pokémon restore 1/16 max HP per turn</td></tr>
      </table>
    </section>

    <section class="lore-content-section">
      <h1>SPECIAL TERRAINS</h1>
      <table class="combat-table">
        <tr><th>Terrain</th><th>Effects</th></tr>
        <tr><td>Holy Field</td><td>Normal-type moves increase in base power by 1.5x<br>Fairy-type moves increase in base power by 1.5x<br>Dark-type moves decrease in base power by 0.5x<br>Ghost-type moves decrease in base power by 0.5x<br>Normal-type moves hit Ghost types super-effectively<br>Pokémon cannot hit allies with damaging moves</td></tr>
        <tr><td>New World</td><td>Prevents all terrain changes<br>Prevents all weather changes and terminates active weather<br>All type effectiveness neutralized (all moves deal neutral damage)<br>No chip damage</td></tr>
      </table>
    </section>
    
    <p style="text-align: center; margin-top: 30px;"><a href="https://docs.google.com/document/d/1oFa1ElLHFozPk4z0nEiFfDemHHAvpU6Lickm-dGqaIM/edit?tab=t.1l3oxii5k0rv" target="_blank" class="discord-link">View Original</a></p>
  </div>
`
