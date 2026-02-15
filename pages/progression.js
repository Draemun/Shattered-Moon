const progressionPage = `
  <div class="container">
    <section class="lore-content-section">
      <h1>STAT CAPS BY CHARACTER TYPE</h1>
      <table class="combat-table">
        <tr><th>Character Type</th><th>Maximum BST</th></tr>
        <tr><td>Normal Pokémon</td><td>3,000</td></tr>
        <tr><td>Mythical Pokémon</td><td>3,000</td></tr>
        <tr><td>Lesser Souls</td><td>3,000</td></tr>
        <tr><td>Higher Souls</td><td>4,000</td></tr>
        <tr><td>Echelons</td><td>4,000</td></tr>
        <tr><td>Commanders</td><td>4,000</td></tr>
        <tr><td>Legendary Pokémon</td><td>5,000</td></tr>
      </table>
    </section>

    <section class="lore-content-section">
      <h1>EXTRA CURRENCY</h1>
      <table class="combat-table">
        <tr><th>Currency</th><th>Conversion</th></tr>
        <tr><td>Void Shards</td><td>10 Shards = 1 Token</td></tr>
        <tr><td>Void Tokens</td><td>1 Token = 1d6 roll for a set list of prizes [TBA]</td></tr>
      </table>
    </section>

    <section class="lore-content-section">
      <h1>PROGRESSION REWARDS</h1>
      
      <h3>Goal One: 600 BST</h3>
      <ul class="rules-list">
        <li>5x Oran Berries</li>
        <li>2x Reviver Seeds</li>
        <li>3x Escape Orbs</li>
      </ul>

      <h3>Goal Two: 800 BST</h3>
      <ul class="rules-list">
        <li>Move Link Box (Link two moves together for combination attacks)</li>
        <li>10x Oran Berries</li>
        <li>3x Reviver Seeds</li>
      </ul>

      <h3>Goal Three: 1,000 BST</h3>
      <table class="combat-table">
        <tr><th>For Non-Corrupted</th><th>For Soul Splinters</th></tr>
        <tr>
          <td>1x Nexus Core Fragment (Temporary immunity to corruption spread for 3 turns)<br>5x Sitrus Berries<br>5x Reviver Seeds<br>1x Standard Weapon (Choice of melee or ranged, lasts 10 turns)<br>1x Void Shard</td>
          <td>1x Resonance Amplifier (15% damage vs Non-Corrupted)<br>5x Sitrus Berries<br>5x Reviver Seeds<br>1x Standard Weapon (Choice of melee or ranged, lasts 10 turns)<br>1x Void Shard</td>
        </tr>
      </table>

      <h3>Goal Four: 1,500 BST</h3>
      <ul class="rules-list">
        <li>1x Warp Stone (Permanent Escape Orb effect, unlimited uses)</li>
        <li>1x Superior Weapon (Lasts 20 turns)</li>
        <li>3x Max Elixirs</li>
        <li>Egg + Amulet</li>
        <li>10x Lum Berries</li>
        <li>2x Void Shards</li>
      </ul>

      <h3>Goal Five: 2,000 BST - Specialized Combat Style Unlock</h3>
      <p>Choose ONE specialized combat style:</p>
      <table class="combat-table">
        <tr><th>Style</th><th>Non-Corrupted Effect</th><th>Corrupted Effect</th></tr>
        <tr><td>Void Walker</td><td>Move stealthily through corrupted zones without triggering foes for 3 turns</td><td>Ignore Sub-Anomaly 1 damage; phase through corrupted terrain</td></tr>
        <tr><td>Reality Anchor</td><td>Create small temp safe zone (3 turns, 5-turn cooldown)</td><td>Absorb corruption from environment to heal self and allies (3 turns, 5-turn cooldown)</td></tr>
        <tr><td>Resonance</td><td colspan="2">Buff allies (omniboost) OR debuff enemies (omnidebuff) for 5 turns // pick one effect</td></tr>
      </table>
      
      <h3>Additional Rewards</h3>
      <ul class="rules-list">
        <li>1x Globe (Grants immunity to one super-effective type. Must have at least 3 weaknesses)</li>
        <li>1x Aura Relic (Moves no longer consume PP during RP)</li>
        <li>10x Sitrus Berries</li>
        <li>10x Lum Berries</li>
        <li>3x Void Shards</li>
      </ul>

      <h3>Goal Six: 3,000 BST (Normal/Mythical/Lesser Soul Cap)</h3>
      <table class="combat-table">
        <tr><th>For Non-Corrupted</th><th>For Soul Splinters</th></tr>
        <tr>
          <td>1x Unbreakable Weapon<br>4x Void Shards<br>10x Reviver Seeds<br>Corruption Immunity Charm (Increases Call of the Void threshold to 15 strikes)<br>1x Gimmick (Choice of Mega Stone, Tera Orb, Z-Crystal, or Dynamax Band)<br>5x Omniseeds (Omniboost. One every 5 turns)<br>5th Move Slot</td>
          <td>1x Unbreakable Weapon<br>4x Void Shards<br>10x Reviver Seeds<br>Corruption Mastery (Summons Sub-Anomaly 1 that attacks Non-Corrupted only for 5 turns, once per rp)<br>1x Gimmick (Choice of Mega Stone, Tera Orb, Z-Crystal, or Dynamax Band)<br>5x Omniseeds (Omniboost. One every 5 turns)<br>5th Move Slot</td>
        </tr>
      </table>

      <h3>Goal Seven: 4,000 BST (Higher Soul / Echelon / Commander Cap)</h3>
      <ul class="rules-list">
        <li>15x Reviver Seeds</li>
        <li>1x Dimensional Keystone (Access one Ultradimension, once per RP. Do not overuse it.)</li>
        <li>10x Lum Berries</li>
      </ul>

      <h3>Goal Eight: 5,000 BST (Legendary Cap)</h3>
      <table class="combat-table">
        <tr><th>For Non-Corrupted Legendaries</th><th>For Soul Splinters</th></tr>
        <tr>
          <td>1x Void Token<br>1x Corruption Reversal (Save 1 Pokémon from Call of the Void corruption, single use)<br>1x Lum Berries<br>Mew's Blessing (Fully restore HP, once per RP)</td>
          <td>1x Void Token<br>1x Corruption Charm (Single use, one-hit soul splintering (requires consent from other RPer)<br>1x Lum Berries<br>Mew's Blessing (Fully restore HP, once per RP)</td>
        </tr>
      </table>
    </section>

    <section class="lore-content-section">
      <h1>ENDORSEMENT/REPORT SYSTEM</h1>
      <table class="combat-table">
        <tr><th>Source</th><th>Point Value</th><th>Availability</th></tr>
        <tr><td>Standard (any)</td><td>1 point</td><td>Unlimited</td></tr>
        <tr><td>Echelon</td><td>3 points</td><td>Once per Echelon</td></tr>
        <tr><td>Faction Leader</td><td>5 points</td><td>Once per Faction Leader</td></tr>
        <tr><td>Guildmasters/Special Characters</td><td>10 points</td><td>Extremely rare</td></tr>
      </table>

      <h3>Endorsement/Report Milestone Rewards</h3>
      <p class="small-text">Endorse = Endorsements | Omni = Omniseeds | Void = Void Tokens</p>
      <table class="combat-table">
        <tr><th>Endorse</th><th>Joy Seeds</th><th>Credits</th><th>Omni</th><th>Void</th></tr>
        <tr><td>5</td><td>10×</td><td>200</td><td>—</td><td>—</td></tr>
        <tr><td>10</td><td>15×</td><td>400</td><td>—</td><td>—</td></tr>
        <tr><td>15</td><td>20×</td><td>600</td><td>—</td><td>—</td></tr>
        <tr><td>20</td><td>25×</td><td>800</td><td>—</td><td>—</td></tr>
        <tr><td>25</td><td>30×</td><td>1,000</td><td>—</td><td>—</td></tr>
        <tr><td>30</td><td>35×</td><td>1,500</td><td>5×</td><td>1×</td></tr>
      </table>
    </section>
    
    <p style="text-align: center; margin-top: 30px;"><a href="https://docs.google.com/document/d/17zF2vHcF3EHldp8ANJUfR5i0Rr0FLfetq4IWwEHErkQ/edit?tab=t.0" target="_blank" class="discord-link">View Original</a></p>
  </div>
`
