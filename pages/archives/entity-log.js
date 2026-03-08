const entityLogPage = `
  <div class="container">
    <h1 style="text-align: center; margin-bottom: 20px;">ENTITY LOG</h1>
    <div class="entity-filter" style="text-align: center; margin-bottom: 30px;">
      <button class="filter-btn active" onclick="filterEntities('all')">All</button>
      <button class="filter-btn" onclick="filterEntities('passive')">Passive</button>
      <button class="filter-btn" onclick="filterEntities('moderate')">Moderate</button>
      <button class="filter-btn" onclick="filterEntities('extreme')">Extreme</button>
    </div>
    <div class="category-grid">
      <a href="#entity-faraway" onclick="setActive('entity-faraway')" class="category-card" data-threat="passive">
        <h2>Faraway</h2>
        <p class="small-text">Cresselia (Remnant) | Threat: Passive</p>
      </a>
      <a href="#entity-found" onclick="setActive('entity-found')" class="category-card" data-threat="moderate">
        <h2>found</h2>
        <p class="small-text">Tornadus | Threat: Moderate</p>
      </a>
      <a href="#entity-alone" onclick="setActive('entity-alone')" class="category-card" data-threat="extreme">
        <h2>The Alone</h2>
        <p class="small-text">Entei (Corrupted) | Threat: Extreme</p>
      </a>
      <a href="#entity-thorn-weaver" onclick="setActive('entity-thorn-weaver')" class="category-card" data-threat="extreme">
        <h2>Thorn Weaver</h2>
        <p class="small-text">Darkrai (Corrupted) | Threat: Extreme</p>
      </a>
    </div>
  </div>
`

const entityFoundPage = `
  <div class="container">
    <section class="lore-content-section">
      <h1>ENTITY LOG: found</h1>
      <h3>From Avira's Daily Anomaly Logs</h3>
      
      <table class="combat-table">
        <tr><th>Field</th><th>Data</th></tr>
        <tr><td>Subject</td><td>found</td></tr>
        <tr><td>Species</td><td>Tornadus</td></tr>
        <tr><td>Threat</td><td>Moderate</td></tr>
        <tr><td>Anger Level</td><td>Minimal</td></tr>
        <tr><td>Anomalous Properties</td><td>Whenever found's name is placed on a sign or document, it will always be displayed in all lower case. Even if taking great pains to properly capitalize the name. It seems to be impossible to see her features correctly, always shrouded in shadow. Even in the brightest of days.</td></tr>
      </table>
      
      <h3>Log 1</h3>
      <p>Subject is seemingly in a playful mood. Begin transcript:</p>
      
      <p><strong>"GOOD MORNING EVERYONE, TODAY SCARY THINGS IS GUNNA HAPPEN! Isn't that right little leafy. Awwe mr leaf isn't that right leaf. Yeah."</strong></p>
      
      <p>We are in the middle of a wooded forest, found doesn't seem aware of my presence, and...</p>
      
      <p><strong>"HI MISS HUSK! or was it keter. Banana? I forget. HI FELLOW MONSTER LADY"</strong></p>
      
      <p>I let out a sigh. Don't partially like being reminded of my condition, but if she thinks I am like her, I suppose that makes things easier.</p>
      
      <p>I play along with her so I can follow along more easily. If you come across found in your travels, it is best you play along to her whims; she seems to have temperment of a child. That being said, she is the type of anomaly you want on your side, not against you.</p>
      
      <p>She contines to play...</p>
      
      <p><strong>"First miss monster lady...."</strong></p>
      
      <p><strong>"Avira is fine."</strong></p>
      
      <p><strong>"Avira. I like that name Avivivivivivivivivirararararararararararararara..."</strong></p>
      
      <p>She contines this for some time.</p>
      
      <p><strong>"Ok. First miss Rara. We need to gather wood so we can craft things. FUN THINGS! Like potatoes. Or or or A SWORD. The monsters don't like swords. Hehehehe...."</strong></p>
      
      <p>She goes off to gather some random sticks and begins to shove them together.</p>
      
      <p><strong>"We gotta protect ourselves, LIKE NONE OF THIS SHOULD EXIST. I SHOULDN'T EXIST. Why am I here? Who am I? Can I eat the wood? OOOOOOOO. CAN I EAT THE WOOD? No."</strong></p>
      
      <p>I sit for a while watching her work. From what I can tell, her perception of reality is heavily distorted. But she seems....happy? I will continue to follow.</p>
    </section>
    
    <p style="text-align: center; margin-top: 30px;"><a href="https://discord.com/channels/1426570529200017549/1461019104960975055" target="_blank" class="discord-link">View Original</a></p>
  </div>
`

const entityFarawayPage = `
  <div class="container">
    <section class="lore-content-section">
      <h1>ENTITY LOG: FARAWAY</h1>
      <h3>From the Chroniclers Entity Log</h3>
      
      <table class="combat-table">
        <tr><th>Field</th><th>Data</th></tr>
        <tr><td>Subject</td><td>Faraway</td></tr>
        <tr><td>Species</td><td>Cresselia (Remnant)</td></tr>
        <tr><td>Threat</td><td>Passive / Conditional Protector</td></tr>
        <tr><td>Anger Level</td><td>None Observable</td></tr>
      </table>
      
      <p>Faraways are intangible entities through which physical matter passes freely. They manifest as ghostly, translucent approximations of Cresselia.</p>
      <p>A luminous orb, what we presume it's their core, hovers above their heads, the only solid-seeming part of their existence. They exist primarily within The Endless Moment, that fractured non-space between what was and what is, but can manifest temporarily in Miralen under specific conditions.</p>
      <p>While present, they are capable of communication and can serve as guides, but they cannot physically intervene in any meaningful way unless a Thorn Weaver entity is present. When such corruption is detected, Faraways become corporeal combatants.</p>
      <p>Feathers shed during these brief moments of manifestation retain anomalous properties and are highly valued by researchers and those seeking protection. Faraways appear frequently in dreams, where they provide protection from within the dreamscape itself.</p>
      <p>They move toward targets when unobserved, but they exhibit no hostile intent whatsoever. The moment direct observation occurs, their movement ceases entirely. They've been documented healing injured wanderers from time to time.</p>
      <hr style="border: none; border-top: 1px solid var(--border-color); margin: 30px 0;">
      <p>Faraways are believed to be fragmented remnants of the Cresselias who were killed during the cataclysm at The Moonlit Wastes, the desolate expanse where Lunala fell from the sky.</p>
      <p>The site remains locked in permanent twilight beneath a corrupted moon that hangs too low and too large in the sky. Prolonged exposure to the moonlight in that place causes gradual psychological deterioration; some observers have reported seeing patterns emerge on the lunar surface during particularly clear nights, the words <strong>"I SEE YOU"</strong> written in craters and shadows that should not form language.</p>
      <p>The Cresselias perished at the fall crater's center, their bodies were never recovered and their essences scattered. Unlike full splinters, Faraways appear to be caught between states. They are not fully corrupted, not fully destroyed.</p>
      <p>They exist trapped within The Endless Moment, unable to fully interact with linear reality.</p>
      <p>Faraways tend to be silent guides, appearing most commonly near sleeping Pokémon or those showing early signs of corruption. They cannot touch, cannot fight, cannot physically alter their surroundings in any way that matters. They can only watch, warn or offer direction to those who can hear them. When unobserved, they drift slowly toward their target, closing distance in a way that makes the skin crawl even when the mind knows there is no danger. This movement has never resulted in harm.</p>
      <p>Current theory among Chroniclers suggests they are splinters attempting to remember their original purpose, but they lack the means to enact it. They are trying to help in the only way they still can.</p>
      <p>The presence of a Thorn Weaver fundamentally alters Faraway behavior. They become fully corporeal and engage with extreme prejudice.</p>
      <p>In dreamscape environments, Faraways will shield the dreamer with everything they have left and eradicate the nightmare intrusion without hesitation or mercy.</p>
      <p>Feathers shed during these moments of corporeal manifestation retain anomalous stability even after the Faraway fades back into intangibility.</p>
      <p>Chroniclers and researchers have confirmed protective, restorative, and warding properties within the plumage. Extreme caution is advised when harvesting, for the act of gathering their feathers may attract attention from other, less benevolent entities that linger in the spaces where Faraways are found.</p>
      <p>Faraways continue to appear across Miralen, particularly in Keshari and other settlements with cultural openness to their presence. Locals leave offerings at crossroads and thresholds, small tokens of gratitude and respect.</p>
      <p>The Faraways cannot interact with physical objects, cannot take what is given, but the gestures appear to comfort both parties.</p>
      <p>There is something deeply sad about watching an intangible hand reach toward a bowl of berries it will never taste, then pull away as if remembering it cannot. They remain one of the few entities that inspire more sorrow than fear.</p>
      <p class="emphasis-text">They remember something. They are trying. That may be the saddest thing we have documented yet.</p>
      
      <hr style="border: none; border-top: 1px solid var(--border-color); margin: 30px 0;">
      <p class="small-text">Clearance Level: Public Record | Last Updated: [UP TO DATE]</p>
    </section>
    
    <p style="text-align: center; margin-top: 30px;"><a href="https://discord.com/channels/1426570529200017549/1462048859567165501" target="_blank" class="discord-link">View Original</a></p>
  </div>
`

const entityThornWeaverPage = `
  <div class="container">
    <section class="lore-content-section">
      <h1>ENTITY LOG: THORN WEAVER</h1>
      <h3>From the Chroniclers Entity Log</h3>
      
      <table class="combat-table">
        <tr><th>Field</th><th>Data</th></tr>
        <tr><td>Subject</td><td>Thorn Weaver</td></tr>
        <tr><td>Species</td><td>Darkrai (Corrupted Variant)</td></tr>
        <tr><td>Threat</td><td>Extreme / High-Priority Elimination</td></tr>
        <tr><td>Anger Level</td><td>Malicious Intent Confirmed</td></tr>
      </table>
      
      <p>Thorn Weavers are a specialized and exceptionally dangerous variant of Weaver entities, originating from corrupted Darkrai. They possess an innate ability to manipulate dreams and memory, bending the subconscious to their will. Their most dangerous trait, and the reason they are classified as high-threat, is their capacity to breach the boundary between dreams and reality itself.</p>
      <p>They do not merely haunt nightmares, they can manifest physically from within a victim's subconscious, crossing over from the dreamscape into the waking world through the victim as a doorway.</p>
      <p>Encounters with Thorn Weavers typically result in severe psychological destabilization. Victims report vivid hallucinations that persist even after waking, an inability to distinguish memory from implanted fiction, and a creeping sense that their own thoughts are no longer entirely their own.</p>
      <p>Physical harm follows shortly after. Thorn Weavers do not kill quickly. They unravel their targets piece by piece, warping perception until the victim can no longer trust what they see, hear, or remember. Death, when it comes, is often a mercy.</p>
      <hr style="border: none; border-top: 1px solid var(--border-color); margin: 30px 0;">
      <p>The origin of Thorn Weavers is not fully understood, but the consensus among Chroniclers is that they are what remains when a Darkrai is consumed by the void and twisted into something far worse than it was meant to be.</p>
      <p>Darkrai, in its uncorrupted form, brought nightmares as a defense mechanism, a deterrent. Thorn Weavers bring nightmares as weapons, as torture devices, as art.</p>
      <p>They appear as warped shadows of their original forms, their bodies elongated and jagged, their silhouettes flickering as though they exist only partially in our dimension at any given moment. Witnesses describe them as having too many limbs, too many angles, shapes that hurt to look at directly, but we suspect it's just an illusion they apply to appear more threatening.</p>
      <p>Their presence is often preceded by a sudden drop in temperature and the sensation of being watched from inside one's own skull. Some report hearing whispers in voices they recognize, such as loved ones, lost friends, their own voice speaking words they never said.</p>
      <p>Thorn Weavers do not hunt in the traditional sense. They select targets and begin their work slowly, weaving themselves into the victim's dreams night after night. At first, the nightmares are subtle, with small inconsistencies, fleeting images of something wrong.</p>
      <p>Over time, the dreams become more invasive. The victim begins to lose sleep, begins to fear closing their eyes. And then, when the boundary between sleep and waking has worn thin enough, the Thorn Weaver steps through.</p>
      <p>Reality fractures around the victim as the entity materializes, pulling fragments of the dreamscape with it. Hallucinations bleed into the physical world, shadows move wrong, the air tastes like metal and ash. The victim's own memories become unreliable, rewritten in real-time by the Weaver's influence. The mind cannibalizes itself trying to make sense of contradictions that should not exist.</p>
      <p>Physical manifestation grants the Thorn Weaver full combat capability.</p>
      <p>Faraways, those fragmented Cresselia remnants, become corporeal in the presence of Thorn Weavers. This is the only known consistent counter to their influence. When a Faraway detects a Thorn Weaver, it solidifies and engages without hesitation, shielding the victim and driving the nightmare back. It is unclear whether this is instinct, or something closer to rage. Either way, it is one of the few mercies available to those caught in a Thorn Weaver's grip.</p>
      <p class="emphasis-text">Elimination protocols are in effect for all confirmed Thorn Weaver sightings.</p>
      <p>Do not attempt to engage alone. Do not attempt negotiation. Do not assume you can resist their influence.</p>
      <p>If you suspect a Thorn Weaver has selected you or someone near you, report immediately to the nearest Guild outpost and request a Lunar Wing if available.</p>
      <p>Sleep with a light on. Sleep near others. Sleep as little as you can manage.</p>
      <p>And if you start seeing something in your dreams that knows your name, do not ignore it. Run.</p>
      <p class="emphasis-text">They are patient. They are thorough. They do not stop until there is nothing left of you that remembers who you were.</p>
      
      <hr style="border: none; border-top: 1px solid var(--border-color); margin: 30px 0;">
      <p class="small-text">Clearance Level: Restricted / Guild Access Required | Last Updated: [UP TO DATE]</p>
    </section>
    
    <p style="text-align: center; margin-top: 30px;"><a href="https://discord.com/channels/1426570529200017549/1463164794713411687" target="_blank" class="discord-link">View Original</a></p>
  </div>
`

const entityAlonePage = `
  <div class="container">
    <section class="lore-content-section">
      <h1>ENTITY LOG: THE ALONE</h1>
      <h3>From the Chroniclers Entity Log</h3>
      
      <table class="combat-table">
        <tr><th>Field</th><th>Data</th></tr>
        <tr><td>Subject</td><td>The Alone</td></tr>
        <tr><td>Species</td><td>Entei (Corrupted)</td></tr>
        <tr><td>Threat</td><td>Extreme / High-Priority Avoidance</td></tr>
        <tr><td>Anger Level</td><td>Non-Communicative Under Standard Conditions</td></tr>
      </table>
      
      <p>The Alone does not speak, does not negotiate and does not pause to let you process what is happening to you. The entirety of its purpose and the entirety of its behavior under normal circumstances is hunt. It selects targets and kills. There is no pattern a survivor has lived to reliably report.</p>
      <p>Its appendages are capable of mimicking the appearance of ordinary Pokémon. Witnesses who survived peripheral encounters describe seeing something that looked almost right, almost familiar, before the shape collapsed into what it actually was. The mimicry is not perfect up close, but The Alone only needs it to work long enough to close the distance. It works best in low light, in fog and in the deep cave systems where it has been most frequently reported.</p>
      <p>It also operates through sensory deprivation. The cavern disturbances reported prior to the Veldenroot incident are consistent with its known behavioral pattern: low, unlocatable growling that travels through stone corridors without a traceable origin point, the persistent sensation of being watched from directions that reveal nothing when investigated, and most critically, a pull. Witnesses describe it as a feeling rather than a sound or a sight, a sensation of being wanted somewhere, of something in the dark requiring their presence.</p>
      <p>Several civilians followed this pull into the Veldenroot cave systems. None were recovered.</p>
      <hr style="border: none; border-top: 1px solid var(--border-color); margin: 30px 0;">
      <p><span class="emphasis-text">Confirmed Moves:</span> Sacred Fire, Eruption, Flare Blitz, Scorching Sands, and Burning Bulwark. The heat it produces is immediate and physically overwhelming, described by survivors as stealing breath from the lungs on first contact. Scene pictures report stone blackened and mineral veins in cavern walls glowing from proximity alone.</p>
      <p>Physical resilience is extreme. The full combined assault of four Echelon-ranked combatants produced no meaningful damage under normal engagement. The only environmental factor observed to cause any suppression of its capabilities was Misty Terrain, which visibly recoiled its fire and produced what witnesses interpreted as irritation. Weapon-imbued attacks produced the only observable physical reactions. Direct elemental strikes produced nothing of consequence.</p>
      <p>It grew eyes. When one was destroyed during the Veldenroot incident, the socket swelled, ruptured, and produced multiple replacements within seconds, spreading across its neck, shoulders, and hide, each one functional and tracking independently. This appears to be an accelerated regenerative response specific to sensory organs. Whether this extends to full tissue regeneration under standard conditions or was specific to the anomalous circumstances of the Veldenroot encounter is not yet confirmed.</p>
      <hr style="border: none; border-top: 1px solid var(--border-color); margin: 30px 0;">
      <p class="emphasis-text">The Alone does not normally behave the way it did in Veldenroot.</p>
      <p>This requires emphasis, because the Veldenroot incident has produced the most detailed firsthand account of The Alone that Chronicler records contain, and it would be dangerous to treat that account as representative of standard engagement.</p>
      <p>The Alone does not speak, nor does not play games or deliver countdowns or let combatants escape because it found the chase entertaining. It hunts, kills, and moves on. The behavior documented in Veldenroot, the mimicry of a specific individual, the psychological targeting, the deliberate theatrical cruelty, the speech, is not The Alone. Or rather, it is not only The Alone.</p>
      <p>Cross-referencing the Echelon field report with available anomalous entity records, Chroniclers have reached a conclusion that has been difficult to commit to documentation: The Alone in Veldenroot was being used. What possessed The Alone during the Veldenroot incident has been tentatively attributed to Arceus.</p>
      <p>Chroniclers acknowledge this sounds extraordinary. It is being documented anyway, because the alternative is leaving the Echelons without accurate information about what they actually encountered, and that is a far worse outcome than an entry that strains credibility.</p>
      <p><span class="emphasis-text">What this means in practical terms:</span> The Alone, under standard conditions, is a silent apex predator that kills without ceremony. If you encounter something wearing The Alone's form that speaks to you, knows things about you, and seems to be enjoying itself, you are not dealing with The Alone alone. The situation is worse than the entity log prepared you for. Act accordingly.</p>
      <p>Behavioral baseline for standard encounters: no communication, no hesitation, no pattern that has survived long enough to be documented reliably. The pull is the only consistent early warning. If you feel drawn toward a dark space without understanding why, treat it as a confirmed sighting and evacuate immediately.</p>
      <p class="emphasis-text">Do not investigate. Do not send someone else to investigate. Do not assume it is something else.</p>
      <p>The civilians who followed the pull into the Veldenroot caves have not been recovered. Chroniclers do not expect them to be.</p>
      <p>There is no current documented method for successfully fighting The Alone and winning. The Veldenroot team survived because they ran and because something decided to let them. Neither of those conditions can be planned for.</p>
      <p class="emphasis-text">Do not go into the dark if the dark is asking you to.</p>
      
      <hr style="border: none; border-top: 1px solid var(--border-color); margin: 30px 0;">
      <p class="small-text">Clearance Level: Restricted / Guild Access Required | Last Updated: [UP TO DATE]</p>
    </section>
    
    <p style="text-align: center; margin-top: 30px;"><a href="#" target="_blank" class="discord-link">View Original</a></p>
  </div>
`
