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
        <div class="terminal-card-row"><span>RANK</span><span>D (Minimal to No Threat)</span></div>
        <div class="terminal-threat passive">PASSIVE</div>
      </a>
      <a href="#entity-the-library" onclick="setActive('entity-the-library')" class="terminal-card" data-threat="passive">
        <div class="terminal-card-name">THE LIBRARY</div>
        <div class="terminal-card-row"><span>SPECIES</span><span>None (Sub-Dimension)</span></div>
        <div class="terminal-card-row"><span>RANK</span><span>D (Minimal to No Threat)</span></div>
        <div class="terminal-threat passive">PASSIVE</div>
      </a>
      <a href="#entity-found" onclick="setActive('entity-found')" class="terminal-card" data-threat="moderate">
        <div class="terminal-card-name">found</div>
        <div class="terminal-card-row"><span>SPECIES</span><span>Tornadus</span></div>
        <div class="terminal-card-row"><span>RANK</span><span>B (Moderate Threat)</span></div>
        <div class="terminal-threat moderate">MODERATE</div>
      </a>
      <a href="#entity-alone" onclick="setActive('entity-alone')" class="terminal-card" data-threat="extreme">
        <div class="terminal-card-name">THE ALONE</div>
        <div class="terminal-card-row"><span>SPECIES</span><span>Entei (Corrupted)</span></div>
        <div class="terminal-card-row"><span>RANK</span><span>S+ (Extreme Threat)</span></div>
        <div class="terminal-threat extreme">EXTREME</div>
      </a>
      <a href="#entity-ambush" onclick="setActive('entity-ambush')" class="terminal-card" data-threat="extreme">
        <div class="terminal-card-name">AMBUSH</div>
        <div class="terminal-card-row"><span>SPECIES</span><span>Varied</span></div>
        <div class="terminal-card-row"><span>RANK</span><span>S+ (Extreme Threat)</span></div>
        <div class="terminal-threat extreme">EXTREME</div>
      </a>
      <a href="#entity-no-mons" onclick="setActive('entity-no-mons')" class="terminal-card" data-threat="extreme">
        <div class="terminal-card-name">NO_MONS / NOT_THINGS</div>
        <div class="terminal-card-row"><span>SPECIES</span><span>Ditto</span></div>
        <div class="terminal-card-row"><span>RANK</span><span>A (Elevated Threat)</span></div>
        <div class="terminal-threat extreme">EXTREME</div>
      </a>
      <a href="#entity-thorn-weaver" onclick="setActive('entity-thorn-weaver')" class="terminal-card" data-threat="extreme">
        <div class="terminal-card-name">THORN WEAVER</div>
        <div class="terminal-card-row"><span>SPECIES</span><span>Darkrai (Corrupted)</span></div>
        <div class="terminal-card-row"><span>RANK</span><span>S (High Threat)</span></div>
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
          <div class="terminal-meta-row"><span class="key">THREAT</span><span class="val-moderate">B (Moderate Threat)</span></div>
          <div class="terminal-meta-row"><span class="key">ANGER</span><span>Minimal</span></div>
          <div class="terminal-meta-row"><span class="key">SOURCE</span><span>Avira's Daily Anomaly Logs</span></div>
          <div class="terminal-meta-row"><span class="key">CLEARANCE</span><span>Restricted / Guild Access Required</span></div>
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
          <div class="terminal-meta-row"><span class="key">THREAT</span><span class="val-passive">D (Minimal to No Threat) / CONDITIONAL PROTECTOR</span></div>
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
          <div class="terminal-meta-row"><span class="key">THREAT</span><span class="val-extreme">S+ (Extreme Threat) / HIGH-PRIORITY ELIMINATION</span></div>
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
          <div class="terminal-meta-row"><span class="key">THREAT</span><span class="val-extreme">S+ (Extreme Threat) / HIGH-PRIORITY AVOIDANCE</span></div>
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

const entityNoMonsPage = `
  <div class="container">
    <div class="terminal-page">
      <div class="terminal-header">
        <div class="terminal-dot"></div>
        <div class="terminal-dot" style="background: #fbbf24; box-shadow: 0 0 6px rgba(251,191,36,0.4);"></div>
        <div class="terminal-dot" style="background: var(--accent-red); box-shadow: 0 0 6px rgba(239,68,68,0.4);"></div>
        <span class="terminal-header-title">CHRONICLERS DB // ENTITY LOG // NO_MONS / NOT_THINGS <span class="terminal-cursor"></span></span>
      </div>
      <div class="terminal-body">
        <div class="terminal-meta">
          <div class="terminal-meta-row"><span class="key">SUBJECT</span><span>No_Mons or Not_Things</span></div>
          <div class="terminal-meta-row"><span class="key">SPECIES</span><span>Ditto</span></div>
          <div class="terminal-meta-row"><span class="key">THREAT</span><span class="val-extreme">A (Elevated Threat)</span></div>
          <div class="terminal-meta-row"><span class="key">ANGER</span><span class="val-extreme">High</span></div>
          <div class="terminal-meta-row"><span class="key">SOURCE</span><span>Avira's Entity Logs</span></div>
          <div class="terminal-meta-row"><span class="key">CLEARANCE</span><span>Restricted / Guild Access Required</span></div>
        </div>

        <div class="terminal-section-label">ANOMALOUS PROPERTIES</div>
        <p class="terminal-text">They seem devoid of any soul or mind of their own, not too dissimilar to most husks or splinters. But they seem to be driven by a singular purpose: Replacement. This leads me to believe that perhaps some higher level entity is giving them commands or controlling them in some way. They start by mimicking a host target with low accuracy. They seem to struggle the most with limbs, often becoming longer and larger than their host target. But over time, they become more and more accurate as they better learn. While they can seemingly be damaged, it is highly advised to avoid attacking them, especially with moves or abilities. Once used, they will learn it, regardless if it doesn't match the moveset of their host target. Therefore, if their body has become indistinguishable from its host, seeing the usage of an impossible move or ability could be a tell. They seem to desire information of all sorts, and can acquire them by goading you into talking or even thinking about certain subjects. It is advised that if you possess sensitive information that you avoid thinking about it at all costs. Their aggression level starts low, simply observing their target. However, as they learn more and perfect their copy, they will become more aggressive and attempt to kill their host target. Its advised that you seek out the closest entity that strikes without discernment and goad it to attack the No_Mons. This seems to confuse them and will result in their death.</p>
        <div class="terminal-warning">// NOTE: While I have dubbed them No_Mons. They seem to refer to themselves as Not_Things. As such, I have included both names.</div>

        <div class="terminal-section-label">LOG 1</div>
        <p class="terminal-text">I had taken a team of guild members to help me investigate some ruins in order to try to find more information on a prophecy that might help us obtain a weapon to fight back against Arceus and its forces. We didn't make much progress before running into No_Mons.</p>
        <p class="terminal-text">After some initial caution, we fled in the direction of the nearest tower. However, a thought hit me that if their goal was to replace us, then they should not get anywhere near a waystone. So instead, I took a calculated risk to play the long game and headed towards a nearby cave with the group. In their fury, the entities caused a cave in and I got separated from my group. I thought I rejoined with one member, only to discover that it was a No_Mon. I fled to attempt to rejoin my team, out of concern that they were stuck with the second No_Mon. That is when my gamble payed off. A Sub_Anomaly_1 had spawned in the caves. I kited it around back to the No_Mon chasing me, and at first, it did not respond to the presence of the particles. That quickly changed however when it started to feel pain. It panicked but could not figure out the source, it dies shortly thereafter.</p>
        <p class="terminal-text">I continued kiting the Sub_Anomaly_1 to the rest of the group until it made contact with the No_Mon disguised as myself. Again, same result. Initial panic before death. Only after ascertaining that the threat had passed, I pulled out my ring and led my team to the Library. Better to navigate that endless maze to the waystone than risking any more encounters.</p>
      </div>
    </div>
  </div>
`

const entityAmbushPage = `
  <div class="container">
    <div class="terminal-page">
      <div class="terminal-header">
        <div class="terminal-dot"></div>
        <div class="terminal-dot" style="background: #fbbf24; box-shadow: 0 0 6px rgba(251,191,36,0.4);"></div>
        <div class="terminal-dot" style="background: var(--accent-red); box-shadow: 0 0 6px rgba(239,68,68,0.4);"></div>
        <span class="terminal-header-title">CHRONICLERS DB // ENTITY LOG // AMBUSH <span class="terminal-cursor"></span></span>
      </div>
      <div class="terminal-body">
        <div class="terminal-meta">
          <div class="terminal-meta-row"><span class="key">SUBJECT</span><span>Ambush</span></div>
          <div class="terminal-meta-row"><span class="key">SPECIES</span><span>Varied</span></div>
          <div class="terminal-meta-row"><span class="key">THREAT</span><span class="val-extreme">S+ (Extreme Threat)</span></div>
          <div class="terminal-meta-row"><span class="key">ANGER</span><span>None</span></div>
          <div class="terminal-meta-row"><span class="key">SOURCE</span><span>Avira's Entity Logs</span></div>
          <div class="terminal-meta-row"><span class="key">CLEARANCE</span><span>Public Record</span></div>
        </div>

        <div class="terminal-section-label">ANOMALOUS PROPERTIES</div>
        <p class="terminal-text">Ambush appears as a random pokemon, always the form as a pokemon killed by another entity. However, tendrils seem interspersed in the body, as if trying to hold it together. A long tendril extends to the sky, fading away after a certain point. If you know the subject, it will attempt to vocalize to draw you in.</p>
        <div class="terminal-warning">DO NOT ENGAGE. I REPEAT. DO NOT GET CLOSE TO AN AMBUSH.<br><br>DOING SO WILL DRAW THE BROKEN END, AKA DIALGA, TO YOUR LOCATION. YOU HAVE BEEN WARNED.<br><br>If you see one, hide or flee. It will vanish on its own after a while.</div>

        <div class="terminal-section-label">LOG 1</div>
        <p class="terminal-text">There is not much to say about this, as the encounter was short. I was doing maintenance on Station Beta when I heard a strange...fleshy sound come from outside the station. That is when I saw Ambush. It was controlling the body of a deceased Guild Member, a Florges. Out of respect to their family, I will not reveal the identity of the Guild member. The Florges left arm was...detached, tendrils keeping it attached to its main body, as if trying to pretend as if there was no damage. The movement was strange. I couldn't tell if the tendrils were trying to mimic the movement of a living body, or if some part of consciousness remained. I suspect that was the point.</p>
        <p class="terminal-text">As this was the first sighting of an Ambush, I made the error of drawing too close. I had hoped that I could strike at the tendrils with my hammer and try to recover the body. However, as I drew near, away from the safety of my tower, the body suddenly was dragged up to the heavens, vanishing.</p>
        <p class="terminal-text">The dread I felt. I just walked into a trap and I knew it.</p>
        <div class="terminal-quote">I see you</div>
        <p class="terminal-text">Without even thinking, I quickly flew back up to the tower, reaching the waystone as I felt an oppressive presence behind me. I teleported myself back to Last Haven only to realize how lucky I had been. Staring in the direction of where the tower was in the safety of its protective barrier, I could see The Broken End investigating my tower. As everyone outside of the barrier was instantly recalled, it grew frustrated at the lack of a target and eventually left.</p>
      </div>
    </div>
  </div>
`

const entityTheLibraryPage = `
  <div class="container">
    <div class="terminal-page">
      <div class="terminal-header">
        <div class="terminal-dot"></div>
        <div class="terminal-dot" style="background: #fbbf24; box-shadow: 0 0 6px rgba(251,191,36,0.4);"></div>
        <div class="terminal-dot" style="background: var(--accent-red); box-shadow: 0 0 6px rgba(239,68,68,0.4);"></div>
        <span class="terminal-header-title">CHRONICLERS DB // ENTITY LOG // THE LIBRARY <span class="terminal-cursor"></span></span>
      </div>
      <div class="terminal-body">
        <div class="terminal-meta">
          <div class="terminal-meta-row"><span class="key">SUBJECT</span><span>The Library (Repurposed into the Chronicler's Library)</span></div>
          <div class="terminal-meta-row"><span class="key">SPECIES</span><span>None (Sub-Dimension)</span></div>
          <div class="terminal-meta-row"><span class="key">THREAT</span><span class="val-passive">D (Minimal to No Threat)</span></div>
          <div class="terminal-meta-row"><span class="key">ANGER</span><span>None</span></div>
          <div class="terminal-meta-row"><span class="key">SOURCE</span><span>Avira's Entity Logs</span></div>
          <div class="terminal-meta-row"><span class="key">CLEARANCE</span><span>Public Record</span></div>
        </div>

        <div class="terminal-section-label">ANOMALOUS PROPERTIES</div>
        <p class="terminal-text">It is an alternate dimension discovered in the Deep Caves, south of Veldenroot. There is a rift with a permanent entrance to the dimension deep within the cave. No entity can enter the rift, despite the intense dangers of the caves. The only other entrance is via a Hoopa Ring, personally kept on Commander Avira's person at all times. Using said ring will place anyone entering it in the same relative location as they were in the surface world to a 1:1 distance ratio. Those attuned to the Waystone network can also enter that way, as a waystone has been placed inside.</p>
        <p class="terminal-text">Inside the dimension is an endless Library. A maze of bookshelves and books. Shifting and constantly changing, it is easy to get lost. However, one's relative position never changes, so if one has a good sense of direction, they can still find their way. No entity can appear here, making it the only truly safe location outside of the Last Haven.</p>
        <p class="terminal-text">While one can get used to it, the Library feels wrong. Despite any apparent light source, anyone inside the library can still see a good distance away, assuming the view is not obstructed by books. Everything is monochrome; black and white. The books are either completely empty, a jumbled mess of text, or occasionally mirrors logs written by the Chronicler's Guild. Why this happens is unknown. The bookshelves and books have no other anomalous properties, making them valuable storage space. Temperature at the base level (equivalent to ground level in the surface world) is mild, near room temperature. Contrary to how elevation works in the surface world, the higher one climbs, the hotter it gets and the lower one climbs, the colder. Though neither reach a point to where it would be dangerous to exist. It seems that moving bookshelves or even the books in any way will stabilize the immediate area and prevent things from shifting around.</p>
        <p class="terminal-text">At the same relative location as the Chronicler's HQ in Last Haven, a Base was constructed and a waystone placed. Outside materials were brought in to construct the base, giving some color to an otherwise mind-numbingly achromatic world. There are plenty of supplies and other amenities installed to allow living in this base. This ranges from an abundance of living quarters, to study areas, to botanical facilities. In the bookshelves forming the walls to the base, hard copies of logs and documents made by the Chonicler's are placed, as a back up source of information should digital means fail. A skeleton crew is to be staffed at all times, with rotating shifts, to help maintain facilities such as the greenhouse as well as general upkeep of the base. Members of the Chroniclers are encouraged to use this space for study and documentation.</p>
        <p class="terminal-text">While this has been deemed unlikely, the reason for the excessive amount of living quarters is to serve as an evacuation point should any settlement fall or become breached. Thankfully such areas are already protected so this serves merely as a worst case scenario back up plan.</p>
      </div>
    </div>
  </div>
`
