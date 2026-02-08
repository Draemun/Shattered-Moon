const factionsPage = `
  <div class="container">
    <section class="lore-content-section">
      <h1>GUILD RANK PROGRESSION</h1>
      <table class="combat-table">
        <tr><th>Current Rank</th><th>Next Rank</th><th>RPs Required</th></tr>
        <tr><td>Affiliated/Refugee</td><td>Trainee</td><td>2 RPs</td></tr>
        <tr><td>Trainee</td><td>Active Member</td><td>5 RPs</td></tr>
        <tr><td>Active Member</td><td>Senior Member</td><td>10 RPs</td></tr>
      </table>
    </section>

    <section class="lore-content-section">
      <h1>THE WARDENS (Defense & Security)</h1>
      <p><strong>Min Age:</strong> 20 years</p>
      
      <table class="combat-table">
        <tr><th>Sub-Group</th><th>Role</th></tr>
        <tr><td>Watchtower Guard</td><td>Stationed on second-floor balconies, 24/7 observation</td></tr>
        <tr><td>Patrol Units</td><td>Regular patrols around safe zone boundary</td></tr>
        <tr><td>Rapid Response</td><td>Elite team handling entity encounters</td></tr>
        <tr><td>Trainers</td><td>Teach survival and combat techniques to refugees</td></tr>
      </table>

      <h3>Responsibilities</h3>
      <ul class="rules-list">
        <li>Guard Guild perimeter and watch posts</li>
        <li>Patrol safe zones</li>
        <li>Respond to entity sightings and incursions</li>
        <li>Train members</li>
        <li>Lead evacuation protocols when necessary</li>
      </ul>
    </section>

    <section class="lore-content-section">
      <h1>THE CHRONICLERS (Documentation & Archives)</h1>
      <p><strong>Min Age:</strong> 16 years</p>
      
      <table class="combat-table">
        <tr><th>Sub-Group</th><th>Role</th></tr>
        <tr><td>Field Recorders</td><td>Accompany missions to document findings</td></tr>
        <tr><td>Memory Preservers</td><td>Use healing moves (like Heal Bell) to stabilize splintering minds</td></tr>
        <tr><td>Translators</td><td>Decode messages found in corrupted zones</td></tr>
        <tr><td>Cartographers</td><td>Map corruption zones and safe routes</td></tr>
      </table>

      <h3>Responsibilities</h3>
      <ul class="rules-list">
        <li>Document all entity encounters and behaviors</li>
        <li>Record survivor testimonies and preserve memories</li>
        <li>Maintain the Guild's archives and records</li>
        <li>Translate encoded messages from throughout territories</li>
        <li>Track corruption spread patterns and entity migration</li>
      </ul>
      
      <p class="small-text">Secondary Base: Hidden library in the Deep Caves, protected by complex maze</p>
    </section>

    <section class="lore-content-section">
      <h1>THE SCOUTS (Reconnaissance & Supply)</h1>
      <p><strong>Min Age:</strong> 18 years</p>
      
      <table class="combat-table">
        <tr><th>Sub-Group</th><th>Role</th></tr>
        <tr><td>Sky Scouts</td><td>Aerial reconnaissance, fastest information delivery</td></tr>
        <tr><td>Ground Expeditions</td><td>Gather supplies from abandoned settlements</td></tr>
        <tr><td>Route Markers</td><td>Establish and maintain safe paths</td></tr>
        <tr><td>Rescuer</td><td>Extract refugees from dangerous zones</td></tr>
      </table>

      <h3>Responsibilities</h3>
      <ul class="rules-list">
        <li>Map safe routes between settlements</li>
        <li>Locate resources and supplies</li>
        <li>Identify corruption hotspots and entity territories</li>
        <li>Establish and maintain supply lines</li>
        <li>Guide refugees to the Guild</li>
      </ul>
    </section>

    <section class="lore-content-section">
      <h1>THE BUILDERS (Construction & Infrastructure)</h1>
      <p><strong>Min Age:</strong> 16 years</p>
      
      <table class="combat-table">
        <tr><th>Sub-Group</th><th>Role</th></tr>
        <tr><td>Structural Engineers</td><td>Design and reinforce buildings</td></tr>
        <tr><td>Emergency Repair</td><td>Rapid response to damage</td></tr>
        <tr><td>Skybridge Teams</td><td>Build elevated pathways to other settlements</td></tr>
        <tr><td>Material Gatherers</td><td>Source corruption-resistant building supplies</td></tr>
      </table>

      <h3>Responsibilities</h3>
      <ul class="rules-list">
        <li>Maintain Guild structural integrity</li>
        <li>Construct defensive fortifications</li>
        <li>Build elevated pathways (Skybridge Protocol)</li>
        <li>Establish outposts and safe houses</li>
        <li>Repair damage from entity attacks</li>
      </ul>
      
      <p class="small-text">Secondary Bases: Sky Posts (scattered elevated platforms throughout territories)</p>
    </section>

    <section class="lore-content-section">
      <h1>THE PROVIDERS (Resources & Healing)</h1>
      <p><strong>Min Age:</strong> 16 years</p>
      
      <table class="combat-table">
        <tr><th>Sub-Group</th><th>Role</th></tr>
        <tr><td>Cultivators</td><td>Grow berries and herbs in protected gardens</td></tr>
        <tr><td>Healers</td><td>Treat injuries and illness</td></tr>
        <tr><td>Quartermasters</td><td>Manage supply inventory and rationing</td></tr>
        <tr><td>Traders</td><td>Negotiate with wandering merchants and other settlements</td></tr>
      </table>

      <h3>Responsibilities</h3>
      <ul class="rules-list">
        <li>Manage food stores and rations</li>
        <li>Cultivate what little grows in safe zones</li>
        <li>Prepare medicines and healing supplies</li>
        <li>Coordinate supply distribution</li>
        <li>Trade with other settlements</li>
      </ul>
    </section>

    <section class="lore-content-section">
      <h1>THE VOID HUNTERS (Offence & Entity Handling)</h1>
      <p><strong>Min Age:</strong> 20 years</p>
      
      <table class="combat-table">
        <tr><th>Sub-Group</th><th>Role</th></tr>
        <tr><td>Strike Teams</td><td>Target and eliminate specific entities</td></tr>
        <tr><td>Zone Clearers</td><td>Purge corruption from designated areas</td></tr>
        <tr><td>Tacticians</td><td>Develop combat strategies per entity type</td></tr>
        <tr><td>Artificers</td><td>Craft and maintain specialized gear and weaponry</td></tr>
      </table>

      <h3>Responsibilities</h3>
      <ul class="rules-list">
        <li>Actively hunt and eliminate entities</li>
        <li>Clear corruption from recoverable zones</li>
        <li>Develop entity-specific combat tactics</li>
        <li>Acquire materials for unbreakable weapons</li>
        <li>Test experimental weapons and strategies</li>
      </ul>
    </section>

    <section class="lore-content-section">
      <h1>INDEPENDENT FACTIONS</h1>
      <ul class="rules-list">
        <li><strong>Refugees</strong> - Under Guild protection but not formal members</li>
        <li><strong>Affiliated</strong> - Work with the Guild but maintain independence</li>
        <li><strong>Independent</strong> - Those who do not fall in any of those factions</li>
        <li><strong>Outlaws</strong> - Operate outside the law and are denied Guild protection</li>
      </ul>
    </section>

    <section class="lore-content-section">
      <h1>THE LOST</h1>
      <p><strong>Type:</strong> Loose collection, not a true guild</p>
      <p><strong>Members:</strong> Unknown, fluctuating</p>
      <p><strong>Leader:</strong> None</p>
      <p><strong>Base:</strong> None</p>
      <p><strong>Philosophy:</strong> The corruption has already won. Survival is prolonging the inevitable.</p>

      <h3>Behavior</h3>
      <ul class="rules-list">
        <li>Often found in high-corruption zones</li>
        <li>Some deliberately expose themselves to entities</li>
        <li>Others try to find The endless Moment</li>
        <li>A few seek The Void directly, wanting it to "end"</li>
      </ul>

      <p>The Chroniclers try to document their stories. The Seekers try to convince them there's hope. Neither has high success rates.</p>
    </section>
    
    <p style="text-align: center; margin-top: 30px;"><a href="https://docs.google.com/document/d/17zF2vHcF3EHldp8ANJUfR5i0Rr0FLfetq4IWwEHErkQ/edit?tab=t.6b31l96e32br" target="_blank" class="discord-link">View Original</a></p>
  </div>
`
