const gimmicksPage = `
  <div class="container">
    <section class="lore-content-section">
      <h1>BATTLE GIMMICKS GUIDE</h1>
      
      <h3>UNIVERSAL RULES</h3>
      <ul class="rules-list">
        <li><strong>One Gimmick Per RP</strong></li>
        <li>No combining gimmicks in the same battle</li>
        <li>If you have multiple, declare which one you are going to use</li>
      </ul>
    </section>

    <section class="lore-content-section">
      <h1>MEGA EVOLUTION</h1>
      <table class="combat-table">
        <tr><th>Details</th><th>Information</th></tr>
        <tr><td>How to Obtain</td><td>Server events, special rewards, rank reward</td></tr>
        <tr><td>Activation</td><td>Possess correct Mega Stone</td></tr>
        <tr><td>Buffs</td><td>+100 for every stat</td></tr>
        <tr><td>Frequency</td><td>Once per RP</td></tr>
      </table>
      <p class="small-text">There's no X/Y/Z megastones. The characters are free to swap between those forms. Communicate before any CRP what form has been chosen.</p>
    </section>

    <section class="lore-content-section">
      <h1>Z-MOVES</h1>
      <table class="combat-table">
        <tr><th>Details</th><th>Information</th></tr>
        <tr><td>How to Obtain</td><td>Z-Crystals from events, rewards, rank up</td></tr>
        <tr><td>Activation</td><td>Possess correct Z-Crystal + move</td></tr>
        <tr><td>Advantages</td><td>Cannot be dodged, blocked, or Protected against<br>Blocked by Max Moves (Dynamax)</td></tr>
        <tr><td>Cooldown</td><td>5 comments between uses, can be used several times</td></tr>
      </table>
    </section>

    <section class="lore-content-section">
      <h1>DYNAMAX / GIGANTAMAX</h1>
      <table class="combat-table">
        <tr><th>Details</th><th>Information</th></tr>
        <tr><td>How to Obtain</td><td>Dynamax Band from events, rewards, rank up</td></tr>
        <tr><td>Activation</td><td>Possess Band + eligible species for G-Max</td></tr>
        <tr><td>Size Change</td><td>Doubles height (not kaiju-sized)</td></tr>
        <tr><td>Defense Buff</td><td>×3 Defense and Sp. Defense</td></tr>
        <tr><td>Duration</td><td>10 comments max</td></tr>
      </table>
    </section>

    <section class="lore-content-section">
      <h1>TERASTALLIZATION</h1>
      <table class="combat-table">
        <tr><th>Details</th><th>Information</th></tr>
        <tr><td>How to Obtain</td><td>Tera Orb from events, rewards, rank up</td></tr>
        <tr><td>Activation</td><td>Possess Tera Orb + choose Tera Type</td></tr>
        <tr><td>Type Change</td><td>Gain new type, lose old type traits</td></tr>
        <tr><td>Offensive Boost</td><td>Tera-type moves powered up + access to Tera Blast</td></tr>
        <tr><td>Duration</td><td>Until battle ends, defeat, or deactivation</td></tr>
      </table>
    </section>

    <section class="lore-content-section">
      <h1>LAQUIUM</h1>
      <p>Laquium copies the sheer power of Ferox energy. Item slot.</p>
      <table class="combat-table">
        <tr><th>Details</th><th>Information</th></tr>
        <tr><td>Type</td><td>Pokémon-made synthetic item, replicates Ferox energy without natural exposure</td></tr>
        <tr><td>Stat Boost</td><td>Raises stats to the max of your tier for the duration</td></tr>
        <tr><td>Duration</td><td>3 turns active, 2 turns cooldown, repeatable</td></tr>
        <tr><td>Splinter Combat</td><td>No weapons required to attack Soul Splinters while active</td></tr>
        <tr><td>Cost</td><td>350 (intentionally cheap to normalize market saturation)</td></tr>
        <tr><td>Withdrawal</td><td>Must be noted in sheet. Lasts 2 RPs</td></tr>
      </table>
      <p>During the active phase the character does not feel injuries. The wounds only register when the cooldown hits, at which point the pain is severe. This creates a dangerous incentive to push straight into the next cycle.</p>
      <h3>Targeting Roll (d6 at start of each active turn)</h3>
      <table class="combat-table">
        <tr><th>Turn</th><th>Ally Hit Range</th></tr>
        <tr><td>Turn 1</td><td>1 hits allies, rest is safe</td></tr>
        <tr><td>Turn 2</td><td>1-2 hits allies, rest is safe</td></tr>
        <tr><td>Turn 3</td><td>1-3 hits allies, rest is safe</td></tr>
      </table>
      <p class="small-text">Use a second dice to determine which ally is struck on a hit. Counter resets at the start of each new active phase.</p>
    </section>

    <section class="lore-content-section">
      <h1>RAKURIUM</h1>
      <p>Rakurium is the strongest version of Laquium. Item slot, can power up a gimmick.</p>
      <table class="combat-table">
        <tr><th>Details</th><th>Information</th></tr>
        <tr><td>Type</td><td>Pokémon-made synthetic item, replicates Ferox energy without natural exposure</td></tr>
        <tr><td>Stat Boost</td><td>Raises stats to 5,000 + secondary ability: No Guard</td></tr>
        <tr><td>Duration</td><td>5 turns active, 2 turns cooldown, repeatable</td></tr>
        <tr><td>Splinter Combat</td><td>No weapons required to attack Soul Splinters while active</td></tr>
        <tr><td>Availability</td><td>Giveaway only</td></tr>
        <tr><td>Withdrawal</td><td>Must be noted in sheet. Lasts 3 RPs</td></tr>
      </table>
      <p>During the active phase the character does not feel injuries. The wounds only register when the cooldown hits, at which point the pain is severe. This creates a dangerous incentive to push straight into the next cycle.</p>
      <h3>Targeting Roll (d6 at start of each active turn)</h3>
      <table class="combat-table">
        <tr><th>Turn</th><th>Ally Hit Range</th></tr>
        <tr><td>Turn 1</td><td>1 hits allies, rest is safe</td></tr>
        <tr><td>Turn 2</td><td>1-2 hits allies, rest is safe</td></tr>
        <tr><td>Turn 3</td><td>1-3 hits allies, rest is safe</td></tr>
        <tr><td>Turn 4</td><td>1-4 hits allies, rest is safe</td></tr>
        <tr><td>Turn 5</td><td>1-5 hits allies, rest is safe</td></tr>
      </table>
      <p class="small-text">Use a second dice to determine which ally is struck on a hit. Counter resets at the start of each new active phase.</p>
    </section>

    <section class="lore-content-section">
      <h1>FEROX</h1>
      <p>Ferox is a natural phenomenon caused by the Void. The Pokémon does not choose this state. The gimmick crystallizes only after they are defeated, manifesting as a physical item.</p>
      <table class="combat-table">
        <tr><th>Details</th><th>Information</th></tr>
        <tr><td>Trigger</td><td>Naturally triggered by excessive Infinity Energy or Void Echoes exposure</td></tr>
        <tr><td>Eligible Forms</td><td>Mega Ferox, Dynamax/Gigantamax Ferox, Tera Ferox (Z-Moves do not qualify)</td></tr>
        <tr><td>Stat Boost</td><td>Stats raised to maximum ceiling (3,000-4,000 or 5,000)</td></tr>
        <tr><td>End Condition</td><td>Mission ends only when the Pokémon is knocked out (mandatory)</td></tr>
        <tr><td>Difficulty</td><td>??? rated. Ferox tag required on battle</td></tr>
        <tr><td>Min Stats</td><td>800 required to participate</td></tr>
        <tr><td>Approval</td><td>All proposals must go through ModMail</td></tr>
      </table>
      <p>Risk of maiming and death is significantly elevated.</p>
      <p>At the start of each turn, roll a dice to determine targeting. Each character is assigned a number.</p>
    </section>

    <section class="lore-content-section">
      <h1>GIMMICK INTERACTIONS</h1>
      <ul class="rules-list">
        <li>Z-Move beats Mega</li>
        <li>Mega beats Tera</li>
        <li>Tera beats Dynamax</li>
        <li>Dynamax beats Z-Move</li>
        <li>Rakuium can work together with any gimmick in the item slot.</li>
      </ul>
      <p class="emphasis-text">DO NOT ABUSE THEM.</p>
    </section>
    
    <p style="text-align: center; margin-top: 30px;"><a href="https://docs.google.com/document/d/1oFa1ElLHFozPk4z0nEiFfDemHHAvpU6Lickm-dGqaIM/edit?tab=t.y2rodh8o40m1" target="_blank" class="discord-link">View Original</a></p>
  </div>
`
