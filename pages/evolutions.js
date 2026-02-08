const evolutionFormsPage = `
  <div class="container">
    <section class="lore-content-section">
      <h1>EVOLUTION METHODS</h1>
      
      <h3>Standard Level-Up Evolution</h3>
      <ul class="rules-list">
        <li>Participate in any combat RP that awards stats</li>
        <li>You may evolve immediately after earning stats, or save it for later</li>
      </ul>

      <h3>Evolution Items</h3>
      <ul class="rules-list">
        <li>Purchase from the server shop</li>
        <li>Earn as mission rewards</li>
      </ul>

      <table class="combat-table">
        <tr><th>Item Type</th><th>Examples</th></tr>
        <tr><td>Evolution Stones</td><td>Fire, Water, Thunder, Leaf, Moon, Sun, Shiny, Dusk, Dawn, Ice</td></tr>
        <tr><td>Trade Items</td><td>Link Cable</td></tr>
        <tr><td>Specialty Items</td><td>Prism Scale, Protector, Electirizer, Magmarizer, etc.</td></tr>
      </table>

      <h3>Friendship Evolution</h3>
      <ul class="rules-list">
        <li>Form a meaningful friendship with another OC or NPC in RP</li>
        <li>Left to personal judgment. Must be reasonable and demonstrated through RP</li>
        <li>No specific number of RPs required</li>
      </ul>

      <h3>Time-Based Evolution</h3>
      <ul class="rules-list">
        <li>Set your RP during the appropriate time of day</li>
        <li>Must earn stats during the RP</li>
      </ul>

      <h3>Move-Based Evolution</h3>
      <table class="combat-table">
        <tr><th>Type</th><th>Requirement</th></tr>
        <tr><td>Single Use</td><td>Know the move and use it while gaining stats</td></tr>
        <tr><td>Multiple Uses</td><td>Use the move a specific number of times (e.g., 10 times)</td></tr>
      </table>
    </section>

    <section class="lore-content-section">
      <h1>LOCATION-BASED EVOLUTIONS (Now Item-Based)</h1>
      <table class="combat-table">
        <tr><th>Pokémon</th><th>New Method</th></tr>
        <tr><td>Charjabug</td><td>Thunder Stone</td></tr>
        <tr><td>Crabrawler</td><td>Ice Stone</td></tr>
        <tr><td>Eevee → Leafeon</td><td>Leaf Stone</td></tr>
        <tr><td>Eevee → Glaceon</td><td>Ice Stone</td></tr>
        <tr><td>Magneton → Magnezone</td><td>Thunder Stone</td></tr>
        <tr><td>Nosepass → Probopass</td><td>Thunder Stone</td></tr>
      </table>
    </section>

    <section class="lore-content-section">
      <h1>PARTY MEMBER-BASED EVOLUTIONS</h1>
      <table class="combat-table">
        <tr><th>Pokémon</th><th>New Requirement</th></tr>
        <tr><td>Pancham → Pangoro</td><td>Use a Dark-type move 10 times</td></tr>
        <tr><td>Mantyke → Mantine</td><td>Use a Flying-type move 10 times</td></tr>
        <tr><td>Nincada → Ninjask/Shedinja</td><td>Use a Ghost-type move 10 times</td></tr>
      </table>
    </section>

    <section class="lore-content-section">
      <h1>SPECIAL EVOLUTIONS</h1>
      <table class="combat-table">
        <tr><th>Pokémon</th><th>Requirement</th></tr>
        <tr><td>Inkay → Malamar</td><td>Flip your character upside-down in RP + gain stats through combat</td></tr>
        <tr><td>Alcremie</td><td>Hold a Sweet item + earn stats (or be spun by another character in RP)</td></tr>
        <tr><td>Galarian Yamask</td><td>Take damage in RP</td></tr>
        <tr><td>Galarian Farfetch'd</td><td>Hold Leek item + land 3 successful hits in RP (crit not required)</td></tr>
        <tr><td>Sliggoo → Goodra</td><td>Rain Dance</td></tr>
      </table>
    </section>

    <section class="lore-content-section">
      <h1>GENDER-BASED EVOLUTIONS (REMOVED)</h1>
      <p>All Pokémon can evolve into any form regardless of gender.</p>
      
      <table class="combat-table">
        <tr><th>Evolution</th><th>Allowed Regardless of Gender</th></tr>
        <tr><td>Combee</td><td>Male can evolve into Vespiquen</td></tr>
        <tr><td>Kirlia</td><td>Female can evolve into Gallade</td></tr>
        <tr><td>Salandit</td><td>Any gender can evolve into Salazzle</td></tr>
      </table>
    </section>

    <section class="lore-content-section">
      <h1>FORM CHANGE MECHANICS</h1>
      
      <h3>Cannot Change Mid-Battle</h3>
      <table class="combat-table">
        <tr><th>Pokémon</th><th>Requirements</th></tr>
        <tr><td>Rotom</td><td>Purchase Rotom Catalog<br>Choose form before battle<br>Locked signature move</td></tr>
        <tr><td>Silvally</td><td>Purchase Memory item<br>Choose Memory before battle<br>Multi-Attack changes following type</td></tr>
        <tr><td>Deoxys</td><td>Own Meteorite (purchasable or gimmick)<br>Choose form before battle<br>1.5× stat boost on entry depending on form</td></tr>
        <tr><td>Shaymin</td><td>Own Gracidea Flower (Can be purchased)<br>Choose form before battle<br>No auto-revert</td></tr>
        <tr><td>Oricorio</td><td>Purchase Nectar<br>Choose form via profile update<br>Locked during battle</td></tr>
        <tr><td>Genesect</td><td>Purchase Drive<br>Choose Drive before battle<br>Cannot switch mid-combat</td></tr>
      </table>

      <h3>Can Change Mid-Battle</h3>
      <table class="combat-table">
        <tr><th>Pokémon</th><th>Mechanics</th></tr>
        <tr><td>Castform</td><td>Changes form with weather (Rain, Sun, Hail/Snow)</td></tr>
        <tr><td>Cherrim</td><td>Sunshine Form activates in sunny weather, reverts otherwise</td></tr>
        <tr><td>Keldeo</td><td>Changes to Resolute Form when using Secret Sword</td></tr>
        <tr><td>Meloetta</td><td>Relic Song toggles between Aria and Pirouette forms</td></tr>
        <tr><td>Darmanitan</td><td>Zen Mode triggers at low HP, reverts when healed</td></tr>
        <tr><td>Aegislash</td><td>King's Shield toggles between Shield and Blade forms</td></tr>
        <tr><td>Morpeko</td><td>Alternates form every comment (Full Belly ↔ Hungry)</td></tr>
        <tr><td>Mimikyu</td><td>Disguise absorbs one hit, breaks after damage (Z-Moves bypass it)</td></tr>
        <tr><td>Eiscue</td><td>Ice Face absorbs one physical hit, reforms in Hail/Snow</td></tr>
        <tr><td>Minior</td><td>Shields Down triggers at low HP, reverts when healed</td></tr>
        <tr><td>Wishiwashi</td><td>School Form at high HP, Solo Form at low HP, can reform</td></tr>
        <tr><td>Palafin</td><td>Flip Turn activates Hero Form, reverts at low HP</td></tr>
        <tr><td>Sawsbuck & Deerling</td><td>Form changes based on RP environment</td></tr>
      </table>

      <ul class="rules-list">
        <li>Always update your character profile after evolution</li>
        <li>Be reasonable and communicate with RP partners about form changes</li>
        <li>Some form changes are purely aesthetic (like Sawsbuck), others are mechanical (like Aegislash)</li>
      </ul>
    </section>
    
    <p style="text-align: center; margin-top: 30px;"><a href="https://docs.google.com/document/d/1oFa1ElLHFozPk4z0nEiFfDemHHAvpU6Lickm-dGqaIM/edit?tab=t.yg1xncua9ewx" target="_blank" class="discord-link">View Original</a></p>
  </div>
`
