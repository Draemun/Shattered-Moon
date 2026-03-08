const combatPage = `
  <div class="container">
    <section class="lore-content-section">
      <h1>GENERAL COMBAT RULES</h1>
      <table class="combat-table">
        <tr><th>Rule</th><th>Details</th></tr>
        <tr><td>Turn Structure</td><td>One full comment cycle between all battlers = 1 turn</td></tr>
        <tr><td>Action Economy</td><td>1 reactive action + 1 offensive action per turn</td></tr>
        <tr><td>Item Use</td><td>Consumes your turn</td></tr>
        <tr><td>Link Box</td><td>Allows 2 moves in one turn</td></tr>
        <tr><td>Switch Out Moves</td><td>Do not consume your turn</td></tr>
        <tr><td>Complexity Limit</td><td>No multi-complex actions, keep it reasonable</td></tr>
      </table>
    </section>

    <section class="lore-content-section">
      <h1>MOVE MECHANICS</h1>
      <table class="combat-table">
        <tr><th>Mechanic</th><th>Details</th></tr>
        <tr><td>Power Points (PP)</td><td>Start with standard PP; track however you prefer</td></tr>
        <tr><td>PP Boosters</td><td>Use PP Up / PP Max to increase pools</td></tr>
        <tr><td>Linked Moves</td><td>Consume PP from both moves</td></tr>
        <tr><td>Status Move Cooldowns</td><td>Standard: 3 turns. Extended: 5 turns (Aurora Veil, Reflect, Light Screen, Terrains)</td></tr>
        <tr><td>Critical Hits</td><td>Only roll if move has increased crit chance (1d4)</td></tr>
        <tr><td>Secondary Effects</td><td>All chance-based effects must be rolled for</td></tr>
      </table>
    </section>

    <section class="lore-content-section">
      <h1>STATUS CONDITIONS</h1>
      <table class="combat-table">
        <tr><th>Type</th><th>Condition</th><th>Effect</th><th>Cure</th></tr>
        <tr><td>Permanent</td><td>Burn</td><td>Reduces physical attack</td><td>Heal Bell, Aromatherapy, Full Heal, Berries</td></tr>
        <tr><td>Permanent</td><td>Poison / Badly Poisoned</td><td>Ongoing damage</td><td>Same as above</td></tr>
        <tr><td>Permanent</td><td>Paralysis</td><td>Reduced speed, chance of full paralysis</td><td>Same as above</td></tr>
        <tr><td>Temporary</td><td>Confusion</td><td>1/3 chance to end early; ends with accuracy boosts</td><td>Dice roll 1d3</td></tr>
        <tr><td>Temporary</td><td>Freeze</td><td>Ends when hit by Fire-type move</td><td>Dice roll 1d3</td></tr>
        <tr><td>Temporary</td><td>Sleep</td><td>Ends when hit by sound-based move</td><td>Dice roll 1d3</td></tr>
        <tr><td>Special</td><td>Starstruck</td><td>1/3 chance move fails each turn</td><td>Permanent until cured</td></tr>
      </table>
      <p class="small-text">Destiny Knot Interaction: Reflects Starstruck back to inflictor if held</p>
    </section>

    <section class="lore-content-section">
      <h1>WEATHER & FIELD EFFECTS</h1>
      <table class="combat-table">
        <tr><th>Type</th><th>Duration</th><th>Extension Method</th></tr>
        <tr><td>Sun, Rain, Sandstorm, Hail, Snow</td><td>5 turns</td><td>Weather Rocks (Heat, Damp, Smooth, Icy)</td></tr>
      </table>
    </section>

    <section class="lore-content-section">
      <h1>BANNED & ALTERED MECHANICS</h1>
      
      <h3>Completely Banned</h3>
      <ul class="rules-list">
        <li>Legends: Arceus mechanics</li>
        <li>OHKO moves (Fissure, Horn Drill, etc.)</li>
        <li>Set damage moves (Seismic Toss, Night Shade, etc.)</li>
        <li>Endeavor</li>
        <li>Pain Split</li>
        <li>Destiny Bond</li>
        <li>Perish Song / Perish Body</li>
        <li>Cheese strategies / invincible builds</li>
      </ul>

      <h3>Modified from Games</h3>
      <table class="combat-table">
        <tr><th>Move/Mechanic</th><th>Change</th></tr>
        <tr><td>Switch Out Moves</td><td>Create distance, reset stats, trigger abilities, no turn cost</td></tr>
        <tr><td>Endure</td><td>Max 1 PP, survives one fatal hit</td></tr>
        <tr><td>Fling</td><td>Item becomes a recallable weapon, 5 uses per RP, blocked by Knock Off/Embargo</td></tr>
        <tr><td>Nature Power</td><td>RP-based, locks to one move, must match environment</td></tr>
        <tr><td>Secret Power</td><td>RP-based secondary effect, locks after first use</td></tr>
      </table>

      <h3>Entry Hazards</h3>
      <table class="combat-table">
        <tr><th>Hazard</th><th>Effect</th><th>Duration</th><th>Cooldown</th></tr>
        <tr><td>Stealth Rock</td><td>Chip damage</td><td>3 turns</td><td>3 turns</td></tr>
        <tr><td>Sticky Web</td><td>Halves Speed</td><td>3 turns</td><td>3 turns</td></tr>
      </table>

      <h3>Trapping Moves</h3>
      <table class="combat-table">
        <tr><th>Move Type</th><th>Effect</th><th>Duration</th><th>Cooldown</th></tr>
        <tr><td>Fire Spin, Whirlpool, Bind, Wrap, etc.</td><td>Traps target</td><td>3 turns</td><td>3 turns</td></tr>
      </table>
      <p class="small-text">Escape orbs DO NOT work against traps</p>

      <h3>Trapping Abilities</h3>
      <table class="combat-table">
        <tr><th>Ability</th><th>Effect</th><th>Duration</th><th>Cooldown</th></tr>
        <tr><td>Shadow Tag, Arena Trap, Magnet Pull</td><td>Traps target</td><td>3 turns</td><td>3 turns</td></tr>
      </table>

      <h3>Special Trapping Moves</h3>
      <table class="combat-table">
        <tr><th>Move</th><th>Effect</th><th>Notes</th></tr>
        <tr><td>Octolock</td><td>Halves Defense & Sp. Defense</td><td>Standard trapping rules apply</td></tr>
        <tr><td>No Retreat</td><td>Boosts all stats, prevents fleeing</td><td>Can only be used once per RP</td></tr>
      </table>
    </section>

    <section class="lore-content-section">
      <h1>ABILITY CHANGES</h1>
      <table class="combat-table">
        <tr><th>Ability</th><th>Change</th></tr>
        <tr><td>Libero / Protean</td><td>Type changes with each move used (no limit)</td></tr>
        <tr><td>Gale Wings</td><td>Restored to full power; priority on all Flying-type moves</td></tr>
        <tr><td>Vivid Aura (replaces Cute Charm)</td><td>Contact hit = 1/3 chance attacker becomes Starstruck</td></tr>
        <tr><td>Starstruck Effect (Removes Infatuation)</td><td>Afflicted Pokémon's moves fail 50% of the time</td></tr>
      </table>
    </section>

    <section class="lore-content-section">
      <h1>THE DM CLAUSE</h1>
      <p>Staff may bend rules for story purposes, but that depends case by case.</p>
      <p class="emphasis-text">If there's any unlisted mechanic, assume it works as it would in canon Pokémon.</p>
    </section>
    
    <p style="text-align: center; margin-top: 30px;"><a href="https://docs.google.com/document/d/1oFa1ElLHFozPk4z0nEiFfDemHHAvpU6Lickm-dGqaIM/edit?tab=t.0" target="_blank" class="discord-link">View Original</a></p>
  </div>
`
