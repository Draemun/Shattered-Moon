const entityLogPage = `
  <div class="container">
    <h1 style="text-align: center; margin-bottom: 8px; font-family: 'Crete Round', serif; letter-spacing: 4px;">ENTITY LOG</h1>
    <p style="text-align: center; font-family: 'Crete Round', serif; font-size: 0.75rem; color: var(--text-secondary); letter-spacing: 2px; margin-bottom: 20px;">CHRONICLERS DATABASE // RESTRICTED ACCESS</p>
    <div class="entity-filter" style="text-align: center; margin-bottom: 30px;">
      <button class="filter-btn active" onclick="filterEntities('all')">All</button>
      <button class="filter-btn" onclick="filterEntities('passive')">Passive</button>
      <button class="filter-btn" onclick="filterEntities('moderate')">Moderate</button>
      <button class="filter-btn" onclick="filterEntities('extreme')">Extreme</button>
    </div>
    <div class="terminal-grid">
      <a href="#entity-faraway" onclick="setActive('entity-faraway')" class="terminal-card" data-threat="passive">
        <div class="terminal-card-name">FARAWAY</div>
        <div class="terminal-card-row"><span>SPECIES</span><span>Cresselia (Remnant)</span></div>
        <div class="terminal-card-row"><span>STATUS</span><span>Active / Uncontained</span></div>
        <div class="terminal-threat passive">PASSIVE</div>
      </a>
      <a href="#entity-found" onclick="setActive('entity-found')" class="terminal-card" data-threat="moderate">
        <div class="terminal-card-name">found</div>
        <div class="terminal-card-row"><span>SPECIES</span><span>Tornadus</span></div>
        <div class="terminal-card-row"><span>STATUS</span><span>Active / Uncontained</span></div>
        <div class="terminal-threat moderate">MODERATE</div>
      </a>
      <a href="#entity-alone" onclick="setActive('entity-alone')" class="terminal-card" data-threat="extreme">
        <div class="terminal-card-name">THE ALONE</div>
        <div class="terminal-card-row"><span>SPECIES</span><span>Entei (Corrupted)</span></div>
        <div class="terminal-card-row"><span>STATUS</span><span>Active / Uncontained</span></div>
        <div class="terminal-threat extreme">EXTREME</div>
      </a>
      <a href="#entity-thorn-weaver" onclick="setActive('entity-thorn-weaver')" class="terminal-card" data-threat="extreme">
        <div class="terminal-card-name">THORN WEAVER</div>
        <div class="terminal-card-row"><span>SPECIES</span><span>Darkrai (Corrupted)</span></div>
        <div class="terminal-card-row"><span>STATUS</span><span>Active / Uncontained</span></div>
        <div class="terminal-threat extreme">EXTREME</div>
      </a>
    </div>
  </div>
`

const entityFoundPage = `
  <div class="container">
    <div class="terminal-page">
      <div class="terminal-header">
        <div class="terminal-dot"></div>
        <div class="terminal-dot" style="background: #fbbf24; box-shadow: 0 0 6px rgba(251,191,36,0.4);"></div>
        <div class="terminal-dot" style="background: var(--accent-red); box-shadow: 0 0 6px rgba(239,68,68,0.4);"></div>
        <span class="terminal-header-title">CHRONICLERS DB // ENTITY LOG // found <span class="terminal-cursor"></span></span>
      </div>
      <div class="terminal-body">
        <div class="terminal-meta">
          <div class="terminal-meta-row"><span class="key">SUBJECT</span><span>found</span></div>
          <div class="terminal-meta-row"><span class="key">SPECIES</span><span>Tornadus</span></div>
          <div class="terminal-meta-row"><span class="key">THREAT</span><span class="val-moderate">MODERATE</span></div>
          <div class="terminal-meta-row"><span class="key">ANGER</span><span>Minimal</span></div>
          <div class="terminal-meta-row"><span class="key">SOURCE</span><span>Avira's Daily Anomaly Logs</span></div>
          <div class="terminal-meta-row"><span class="key">CLEARANCE</span><span>Public Record</span></div>
        </div>

        <div class="terminal-section-label">ANOMALOUS PROPERTIES</div>
        <p class="terminal-text">Whenever found's name is placed on a sign or document, it will always be displayed in all lower case, even if taking great pains to properly capitalize the name. It seems to be impossible to see her features correctly, always shrouded in shadow, even in the brightest of days.</p>

        <div class="terminal-section-label">LOG 1</div>
        <p class="terminal-text">Subject is seemingly in a playful mood. Begin transcript:</p>
        <div class="terminal-quote">"GOOD MORNING EVERYONE, TODAY SCARY THINGS IS GUNNA HAPPEN! Isn't that right little leafy. Awwe mr leaf isn't that right leaf. Yeah."</div>
        <p class="terminal-text">We are in the middle of a wooded forest. found doesn't seem aware of my presence, and...</p>
        <div class="terminal-quote">"HI MISS HUSK! or was it keter. Banana? I forget. HI FELLOW MONSTER LADY"</div>
        <p class="terminal-text">I let out a sigh. Don't particularly like being reminded of my condition, but if she thinks I am like her, I suppose that makes things easier.</p>
        <p class="terminal-text">I play along with her so I can follow along more easily. If you come across found in your travels, it is best you play along to her whims; she seems to have the temperament of a child. That being said, she is the type of anomaly you want on your side, not against you.</p>
        <p class="terminal-text">She continues to play...</p>
        <div class="terminal-quote">"First miss monster lady...."<br><br>"Avira is fine."<br><br>"Avira. I like that name Avivivivivivivivivirararararararararararararara..."</div>
        <p class="terminal-text">She continues this for some time.</p>
        <div class="terminal-quote">"Ok. First miss Rara. We need to gather wood so we can craft things. FUN THINGS! Like potatoes. Or or or A SWORD. The monsters don't like swords. Hehehehe...."</div>
        <p class="terminal-text">She goes off to gather some random sticks and begins to shove them together.</p>
        <div class="terminal-quote">"We gotta protect ourselves, LIKE NONE OF THIS SHOULD EXIST. I SHOULDN'T EXIST. Why am I here? Who am I? Can I eat the wood? OOOOOOOO. CAN I EAT THE WOOD? No."</div>
        <p class="terminal-text">I sit for a while watching her work. From what I can tell, her perception of reality is heavily distorted. But she seems....happy? I will continue to follow.</p>
      </div>
    </div>
    <p style="text-align: center; margin-top: 30px;"><a href="https://discord.com/channels/1426570529200017549/1461019104960975055" target="_blank" class="discord-link">View Original</a></p>
  </div>
`

const entityFarawayPage = `
  <div class="container">
    <div class="terminal-page">
      <div class="terminal-header">
        <div class="terminal-dot"></div>
        <div class="terminal-dot" style="background: #fbbf24; box-shadow: 0 0 6px rgba(251,191,36,0.4);"></div>
        <div class="terminal-dot" style="background: var(--accent-red); box-shadow: 0 0 6px rgba(239,68,68,0.4);"></div>
        <span class="terminal-header-title">CHRONICLERS DB // ENTITY LOG // FARAWAY <span class="terminal-cursor"></span></span>
      </div>
      <div class="terminal-body">
        <div class="terminal-meta">
          <div class="terminal-meta-row"><span class="key">SUBJECT</span><span>Faraway</span></div>
          <div class="terminal-meta-row"><span class="key">SPECIES</span><span>Cresselia (Remnant)</span></div>
          <div class="terminal-meta-row"><span class="key">THREAT</span><span class="val-passive">PASSIVE / CONDITIONAL PROTECTOR</span></div>
          <div class="terminal-meta-row"><span class="key">ANGER</span><span>None Observable</span></div>
          <div class="terminal-meta-row"><span class="key">SOURCE</span><span>Chroniclers Entity Log</span></div>
          <div class="terminal-meta-row"><span class="key">CLEARANCE</span><span>Public Record</span></div>
        </div>

        <div class="terminal-section-label">PHYSICAL PROFILE</div>
        <p class="terminal-text">Faraways are intangible entities through which physical matter passes freely. They manifest as ghostly, translucent approximations of Cresselia. A luminous orb (presumed to be their core) hovers above their heads, the only solid-seeming part of their existence.</p>
        <p class="terminal-text">They exist primarily within The Endless Moment, that fractured non-space between what was and what is, but can manifest temporarily in Miralen under specific conditions. While present, they are capable of communication and can serve as guides, but they cannot physically intervene in any meaningful way unless a Thorn Weaver entity is present. When such corruption is detected, Faraways become corporeal combatants.</p>
        <p class="terminal-text">They move toward targets when unobserved, but exhibit no hostile intent whatsoever. The moment direct observation occurs, their movement ceases entirely. They've been documented healing injured wanderers from time to time.</p>

        <div class="terminal-section-label">ORIGIN</div>
        <p class="terminal-text">Faraways are believed to be fragmented remnants of the Cresselias who were killed during the cataclysm at The Moonlit Wastes, the desolate expanse where Lunala fell from the sky. The site remains locked in permanent twilight beneath a corrupted moon that hangs too low and too large in the sky.</p>
        <p class="terminal-text">Prolonged exposure to the moonlight in that place causes gradual psychological deterioration. Some observers have reported seeing patterns emerge on the lunar surface during particularly clear nights, the words <em>"I SEE YOU"</em> written in craters and shadows that should not form language.</p>
        <p class="terminal-text">The Cresselias perished at the fall crater's center. Their bodies were never recovered and their essences scattered. Unlike full splinters, Faraways appear to be caught between states, not fully corrupted, not fully destroyed. They exist trapped within The Endless Moment, unable to fully interact with linear reality.</p>

        <div class="terminal-section-label">BEHAVIORAL NOTES</div>
        <p class="terminal-text">Faraways tend to be silent guides, appearing most commonly near sleeping Pokémon or those showing early signs of corruption. They cannot touch, cannot fight, cannot physically alter their surroundings in any way that matters. They can only watch, warn, or offer direction to those who can hear them.</p>
        <p class="terminal-text">Current theory among Chroniclers suggests they are splinters attempting to remember their original purpose, but lack the means to enact it. They are trying to help in the only way they still can.</p>
        <p class="terminal-text">The presence of a Thorn Weaver fundamentally alters Faraway behavior. They become fully corporeal and engage with extreme prejudice. In dreamscape environments, Faraways will shield the dreamer with everything they have left and eradicate the nightmare intrusion without hesitation or mercy.</p>
        <p class="terminal-text">Feathers shed during these moments of corporeal manifestation retain anomalous stability even after the Faraway fades back into intangibility. Chroniclers and researchers have confirmed protective, restorative, and warding properties within the plumage. Extreme caution is advised when harvesting.</p>

        <div class="terminal-section-label">FIELD OBSERVATIONS</div>
        <p class="terminal-text">Faraways continue to appear across Miralen, particularly in Keshari and other settlements with cultural openness to their presence. Locals leave offerings at crossroads and thresholds, small tokens of gratitude and respect. The Faraways cannot interact with physical objects, cannot take what is given, but the gestures appear to comfort both parties.</p>
        <div class="terminal-warning">// CHRONICLER NOTE: There is something deeply sad about watching an intangible hand reach toward a bowl of berries it will never taste, then pull away as if remembering it cannot. They remain one of the few entities that inspire more sorrow than fear. They remember something. They are trying. That may be the saddest thing we have documented yet.</div>
      </div>
    </div>
    <p style="text-align: center; margin-top: 30px;"><a href="https://discord.com/channels/1426570529200017549/1462048859567165501" target="_blank" class="discord-link">View Original</a></p>
  </div>
`

const entityThornWeaverPage = `
  <div class="container">
    <div class="terminal-page">
      <div class="terminal-header">
        <div class="terminal-dot"></div>
        <div class="terminal-dot" style="background: #fbbf24; box-shadow: 0 0 6px rgba(251,191,36,0.4);"></div>
        <div class="terminal-dot" style="background: var(--accent-red); box-shadow: 0 0 6px rgba(239,68,68,0.4);"></div>
        <span class="terminal-header-title">CHRONICLERS DB // ENTITY LOG // THORN WEAVER <span class="terminal-cursor"></span></span>
      </div>
      <div class="terminal-body">
        <div class="terminal-meta">
          <div class="terminal-meta-row"><span class="key">SUBJECT</span><span>Thorn Weaver</span></div>
          <div class="terminal-meta-row"><span class="key">SPECIES</span><span>Darkrai (Corrupted Variant)</span></div>
          <div class="terminal-meta-row"><span class="key">THREAT</span><span class="val-extreme">EXTREME / HIGH-PRIORITY ELIMINATION</span></div>
          <div class="terminal-meta-row"><span class="key">ANGER</span><span class="val-extreme">Malicious Intent Confirmed</span></div>
          <div class="terminal-meta-row"><span class="key">SOURCE</span><span>Chroniclers Entity Log</span></div>
          <div class="terminal-meta-row"><span class="key">CLEARANCE</span><span>Restricted / Guild Access Required</span></div>
        </div>

        <div class="terminal-section-label">THREAT ASSESSMENT</div>
        <p class="terminal-text">Thorn Weavers are a specialized and exceptionally dangerous variant of Weaver entities, originating from corrupted Darkrai. They possess an innate ability to manipulate dreams and memory, bending the subconscious to their will. Their most dangerous trait is their capacity to breach the boundary between dreams and reality itself.</p>
        <p class="terminal-text">They do not merely haunt nightmares; they can manifest physically from within a victim's subconscious, crossing over from the dreamscape into the waking world through the victim as a doorway.</p>
        <p class="terminal-text">Encounters with Thorn Weavers typically result in severe psychological destabilization. Victims report vivid hallucinations that persist even after waking, an inability to distinguish memory from implanted fiction, and a creeping sense that their own thoughts are no longer entirely their own. Physical harm follows shortly after. Thorn Weavers do not kill quickly. They unravel their targets piece by piece.</p>

        <div class="terminal-section-label">ORIGIN</div>
        <p class="terminal-text">The origin of Thorn Weavers is not fully understood, but the consensus among Chroniclers is that they are what remains when a Darkrai is consumed by the void and twisted into something far worse than it was meant to be. Darkrai, in its uncorrupted form, brought nightmares as a defense mechanism. Thorn Weavers bring nightmares as weapons, as torture devices, as art.</p>
        <p class="terminal-text">They appear as warped shadows of their original forms, bodies elongated and jagged, silhouettes flickering as though they exist only partially in our dimension at any given moment. Witnesses describe them as having too many limbs, too many angles, shapes that hurt to look at directly. We suspect it's an illusion applied to appear more threatening.</p>
        <p class="terminal-text">Their presence is often preceded by a sudden drop in temperature and the sensation of being watched from inside one's own skull. Some report hearing whispers in voices they recognize, loved ones, lost friends, their own voice speaking words they never said.</p>

        <div class="terminal-section-label">BEHAVIORAL PATTERN</div>
        <p class="terminal-text">Thorn Weavers do not hunt in the traditional sense. They select targets and begin their work slowly, weaving themselves into the victim's dreams night after night. At first, the nightmares are subtle, small inconsistencies, fleeting images of something wrong. Over time, the dreams become more invasive. The victim begins to lose sleep, begins to fear closing their eyes.</p>
        <p class="terminal-text">And then, when the boundary between sleep and waking has worn thin enough, the Thorn Weaver steps through. Reality fractures around the victim as the entity materializes, pulling fragments of the dreamscape with it. The victim's own memories become unreliable, rewritten in real-time by the Weaver's influence.</p>
        <p class="terminal-text">Faraways become corporeal in the presence of Thorn Weavers, the only known consistent counter to their influence. When a Faraway detects a Thorn Weaver, it solidifies and engages without hesitation, shielding the victim and driving the nightmare back.</p>

        <div class="terminal-warning">// ELIMINATION PROTOCOLS IN EFFECT FOR ALL CONFIRMED SIGHTINGS //<br><br>Do not attempt to engage alone. Do not attempt negotiation. Do not assume you can resist their influence. If you suspect a Thorn Weaver has selected you, report immediately to the nearest Guild outpost and request a Lunar Wing if available.<br><br>Sleep with a light on. Sleep near others.<br><br>And if you start seeing something in your dreams that knows your name, do not ignore it. Run.<br><br>They are patient. They are thorough. They do not stop until there is nothing left of you that remembers who you were.</div>
      </div>
    </div>
    <p style="text-align: center; margin-top: 30px;"><a href="https://discord.com/channels/1426570529200017549/1463164794713411687" target="_blank" class="discord-link">View Original</a></p>
  </div>
`

const entityAlonePage = `
  <div class="container">
    <div class="terminal-page">
      <div class="terminal-header">
        <div class="terminal-dot"></div>
        <div class="terminal-dot" style="background: #fbbf24; box-shadow: 0 0 6px rgba(251,191,36,0.4);"></div>
        <div class="terminal-dot" style="background: var(--accent-red); box-shadow: 0 0 6px rgba(239,68,68,0.4);"></div>
        <span class="terminal-header-title">CHRONICLERS DB // ENTITY LOG // THE ALONE <span class="terminal-cursor"></span></span>
      </div>
      <div class="terminal-body">
        <div class="terminal-meta">
          <div class="terminal-meta-row"><span class="key">SUBJECT</span><span>The Alone</span></div>
          <div class="terminal-meta-row"><span class="key">SPECIES</span><span>Entei (Corrupted)</span></div>
          <div class="terminal-meta-row"><span class="key">THREAT</span><span class="val-extreme">EXTREME / HIGH-PRIORITY AVOIDANCE</span></div>
          <div class="terminal-meta-row"><span class="key">ANGER</span><span class="val-extreme">Non-Communicative Under Standard Conditions</span></div>
          <div class="terminal-meta-row"><span class="key">SOURCE</span><span>Chroniclers Entity Log</span></div>
          <div class="terminal-meta-row"><span class="key">CLEARANCE</span><span>Restricted / Guild Access Required</span></div>
        </div>

        <div class="terminal-section-label">BEHAVIORAL PROFILE</div>
        <p class="terminal-text">The Alone does not speak, does not negotiate, and does not pause to let you process what is happening to you. The entirety of its purpose under normal circumstances is hunt. It selects targets and kills. There is no pattern a survivor has lived to reliably report.</p>
        <p class="terminal-text">Its appendages are capable of mimicking the appearance of ordinary Pokémon. Witnesses who survived peripheral encounters describe seeing something that looked almost right, almost familiar, before the shape collapsed into what it actually was. The mimicry is not perfect up close, but The Alone only needs it to work long enough to close the distance. It works best in low light, in fog, and in the deep cave systems where it has been most frequently reported.</p>
        <p class="terminal-text">It also operates through sensory deprivation, low unlocatable growling that travels through stone corridors without a traceable origin point, the persistent sensation of being watched from directions that reveal nothing when investigated, and most critically, <em>a pull</em>. Witnesses describe it as a feeling rather than a sound or a sight: a sensation of being wanted somewhere, of something in the dark requiring their presence.</p>
        <p class="terminal-text">Several civilians followed this pull into the Veldenroot cave systems. None were recovered.</p>

        <div class="terminal-section-label">COMBAT DATA</div>
        <p class="terminal-text"><strong>Confirmed Moves:</strong> Sacred Fire, Eruption, Flare Blitz, Scorching Sands, Burning Bulwark. The heat it produces is immediate and physically overwhelming, described by survivors as stealing breath from the lungs on first contact. Scene reports document stone blackened and mineral veins in cavern walls glowing from proximity alone.</p>
        <p class="terminal-text">Physical resilience is extreme. The full combined assault of four Echelon-ranked combatants produced no meaningful damage under normal engagement. The only environmental factor observed to cause any suppression of its capabilities was Misty Terrain, which visibly recoiled its fire. Weapon-imbued attacks produced the only observable physical reactions.</p>
        <p class="terminal-text">It grew eyes. When one was destroyed during the Veldenroot incident, the socket swelled, ruptured, and produced multiple replacements within seconds, spreading across its neck, shoulders, and hide, each one functional and tracking independently. Whether this extends to full tissue regeneration under standard conditions is not yet confirmed.</p>

        <div class="terminal-section-label">VELDENROOT INCIDENT / ANOMALOUS BEHAVIOR</div>
        <div class="terminal-warning">// CRITICAL NOTE: The Alone does not normally behave the way it did in Veldenroot. //</div>
        <p class="terminal-text">The Alone does not speak, does not play games, does not deliver countdowns, does not let combatants escape because it found the chase entertaining. It hunts, kills, and moves on. The behavior documented in Veldenroot, the mimicry of a specific individual, the psychological targeting, the deliberate theatrical cruelty, the speech, is not The Alone. Or rather, it is not only The Alone.</p>
        <p class="terminal-text">Cross-referencing the Echelon field report with available anomalous entity records, Chroniclers have reached a conclusion that has been difficult to commit to documentation: <strong>The Alone in Veldenroot was being used.</strong> What possessed The Alone during the Veldenroot incident has been tentatively attributed to Arceus.</p>
        <p class="terminal-text">Chroniclers acknowledge this sounds extraordinary. It is being documented anyway, because the alternative is leaving the Echelons without accurate information about what they actually encountered.</p>
        <p class="terminal-text"><strong>What this means in practical terms:</strong> The Alone, under standard conditions, is a silent apex predator that kills without ceremony. If you encounter something wearing The Alone's form that speaks to you, knows things about you, and seems to be enjoying itself, you are not dealing with The Alone alone. The situation is worse than this entry prepared you for. Act accordingly.</p>

        <div class="terminal-warning">// AVOIDANCE PROTOCOL //<br><br>If you feel drawn toward a dark space without understanding why, treat it as a confirmed sighting and evacuate immediately. Do not investigate. Do not send someone else to investigate. Do not assume it is something else.<br><br>There is no current documented method for successfully fighting The Alone and winning. The Veldenroot team survived because they ran, and because something decided to let them. Neither condition can be planned for.<br><br>Do not go into the dark if the dark is asking you to.</div>
      </div>
    </div>
    <p style="text-align: center; margin-top: 30px;"><a href="#" target="_blank" class="discord-link">View Original</a></p>
  </div>
`
