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
    
    <section class="lore-content-section">
      <h1>THE VOIDSWORN CULT</h1>
      <p>The Voidsworn worship The Original One (Arceus).</p>
      <p>Years before the splintering, the group was known as the <strong>Rings of Light</strong>. They worshiped Arceus as their God and adhered to strict rules. For many generations, an artifact simply referred to as <em>the relic</em> was passed down. It was proclaimed to be a gift from Arceus, but records are unclear as to where it actually came from. After the world broke apart, the cult had a disagreement on their beliefs. Some believed Arceus abandoned them and left altogether. Others continued to follow, although beliefs as to why Arceus did this were varied. The cult was divided into different factions. The group that prevailed above the others was the <strong>Mayworth Sect</strong>: now called The Voidsworn.</p>
      <p>The group counts as Indipendent.</p>
      
      <h3>Beliefs</h3>
      <p>The Voidsworn believe that the current state Miralen is in is a trial put forth by Arceus. They believe if they persist long enough for all mons to be splintered, Arceus will then bestow his blessing. They see splintering as a blessing from Arceus, as he is able to 'do his work' through the victim. Despite this belief, the higher ups in the cult refuse to become splintered themselves. They proclaim they are still needed to spread the word of Arceus.</p>
      <p>The Voidsworn see the relic, a fragment of the red chain, as a gift from Arceus himself. They use it in many different rituals to 'appease' Arceus.</p>
      <p>The Relic is brought out for significant rituals: initiations, blessings of splintered members, and community festivals tied to the faith calendar. These are the occasions when miracles tend to happen and mons convert at these events regularly. Those who are splintered during or after joining the cult are treated as honored. Their care is taken seriously by the community. It is also, quietly, one of their most effective recruitment tools.</p>

      <h3>Daily Life</h3>
      <p>The Voidsworn run tight communities. They have rules, more than most, and adherence is expected and tracked. Minor violations earn correction while repeated violations earn ostracism from community resources and social standing. Serious violations, or enough accumulated smaller ones, earn expulsion.</p>
      <p>Daily life involves communal labor, scheduled prayer, and regular ritual gatherings. <strong>Sunny Day</strong> is used frequently in worship, framed as an act of devotion that calls Arceus's light down into the world.</p>

      <h3>Hierarchy</h3>
      <p>The Voidsworn are currently led by <strong>Wilfred Mayworth</strong>. He is closely followed by his second in command, <strong>Pecharunt</strong>. Both are aware of the true nature of the Relic and of Koraidon's captivity, but neither discusses this openly, even with trusted subordinates.</p>
      <p>Underneath these two are the <strong>Void Blessed</strong>: mons that travel around Miralen, spreading the religion further. They report directly to Wilfred and Pecharunt. The Void Blessed are almost universally true believers. Knowledge of the Relic's true nature is not shared with them unless they are brought fully into the inner circle, which rarely happens.</p>
      <p>Beneath those are <strong>splintered individuals</strong>, although their actual participation in the cult varies. Some are functional and devout, others are barely present.</p>
      <p>At the bottom are all other members. Those who believe are encouraged to either become one of the Void Blessed and help spread the word, or to get splintered themselves.</p>
      <p>The congregation is a mix: true believers, desperate survivors who needed community, opportunists, and a quieter few who have doubts but know better than to voice them.</p>

      <details class="spoiler">
        <summary>⚠ Info Not Available to the General Public - Click to Reveal</summary>
        <div class="spoiler-content">
          <h3>The Red Chain</h3>
          <p>The Relic put on display and used in rituals is a fake recreation of the real one. It is a fire gem, cut to resemble a fragment of the Red Chain. Any so-called miracles performed with it are elaborate ploys put together by the inner circle.</p>

          <h3>Koraidon</h3>
          <p>The real chain fragments are being used to subdue Koraidon. The Red Chain is old and powerful enough to restrain beings that should not be restrainable. It holds Koraidon in place, and beyond that, it numbs and fragments their awareness.</p>
          <p>As long as strong light is present, Koraidon generates energy passively. The cult maintains a rotation of reflected and replicated Sunny Day in the chamber where Koraidon is kept. This is also part of why Sunny Day is so important in Voidsworn worship: framed as calling down the light of Arceus, it serves a second purpose the congregation knows nothing about. The energy Koraidon produces is siphoned and used to sustain Voidsworn infrastructure across Miralen. The congregation believes their communities are held together by faith and labor. They are, in part, being kept alive by a captive legendary.</p>
          <p>When Koraidon was captured is not clearly documented. The records that might answer this are either lost or have been deliberately obscured. What is known is that the Mayworth Sect's rise after the Splintering coincided closely with their acquisition of the real Red Chain, and that this consolidation of power happened very quickly once they had it.</p>
          <p>Whether Koraidon was taken before the Splintering as part of the Rings of Light's history, or captured in the chaos immediately after, remains an open question.</p>
        </div>
      </details>
    </section>
    
    <p style="text-align: center; margin-top: 30px;"><a href="https://docs.google.com/document/d/17zF2vHcF3EHldp8ANJUfR5i0Rr0FLfetq4IWwEHErkQ/edit?tab=t.6b31l96e32br" target="_blank" class="discord-link">View Original</a></p>
  </div>
`
