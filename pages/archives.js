const archivesPage = `
  <div class="container">
    <h1 style="text-align: center; margin-bottom: 40px;">ARCHIVES</h1>
    <div class="category-grid">
      <a href="#echo-miralen" onclick="setActive('echo-miralen')" class="category-card">
        <h2>Echo of Miralen</h2>
      </a>
      <a href="#entity-log" onclick="setActive('entity-log')" class="category-card">
        <h2>Entity Log</h2>
      </a>
    </div>
  </div>
`

const echoMiralenPage = `
  <div class="container">
    <h1 style="text-align: center; margin-bottom: 40px;">ECHO OF MIRALEN</h1>
    <div class="category-grid">
      <a href="#echo-issue-21" onclick="setActive('echo-issue-21')" class="category-card magazine-card">
        <div class="magazine-header">ISSUE #21</div>
        <h2>Guild Factions</h2>
        <p class="small-text">Which factions are the hardest to join?</p>
      </a>
      <a href="#echo-issue-26" onclick="setActive('echo-issue-26')" class="category-card magazine-card">
        <div class="magazine-header">ISSUE #26</div>
        <h2>Miralen Apex Rush</h2>
        <p class="small-text">The planet's most electrifying spectacle</p>
      </a>
      <a href="#echo-issue-27" onclick="setActive('echo-issue-27')" class="category-card magazine-card">
        <div class="magazine-header">SPECIAL EDITION #27</div>
        <h2>Splinter in Veldenroot</h2>
        <p class="small-text">Guild on high alert</p>
      </a>
      <a href="#echo-issue-622" onclick="setActive('echo-issue-622')" class="category-card magazine-card">
        <div class="magazine-header">FROM THE ARCHIVES #622</div>
        <h2>Glacien Hollow Disaster</h2>
        <p class="small-text">83 missing, Suicune corrupted</p>
      </a>
    </div>
  </div>
`

const echoIssue21Page = `
  <div class="container">
    <section class="lore-content-section">
      <h1>ISSUE #21 - GUILD FACTIONS</h1>
      <h2>A Look Inside the Guild: Which Factions Are the Hardest to Join?</h2>
      <p>In a society rebuilt from the ruins of the old world, the Guild stands as the backbone of collective survival. Its many factions keep settlements fed, safe, informed, and expanding, but not all factions are created equal: some welcome newcomers readily, while others demand plenty of training, discipline, a willingness to stare danger in the face...oooor a death wish.</p>
      <p>A recent review sheds light on which branches of the Guild are the most accessible… and which remain nearly impossible to enter. Explore with us the various factions.</p>
      
      <h3>The Accessible Pillars: Scouts, Builders, and Providers</h3>
      <p>Scouts and Builders form the foundation of Guild operations. Work Position in these two factions are almost always open because their work is constant and indispensable. Scouts traverse the surrounding territories, mapping terrain, delivering messages and transporting resources with remarkable speed. Builders, meanwhile, transform dangerous land into safe, habitable spaces such as homes, outposts, greenhouses, and defensive structures.</p>
      <p>The Providers, responsible for agriculture and food security, also maintain a steady intake of new members. They constantly study new cultivation methods, reducing waste, and expand the green zones that now dominate urban landscapes. Thanks to their collaboration with Builders, once-sterile city blocks have become lush ecosystems that purify the air and sustain entire communities.</p>
      
      <h3>The Chroniclers: They Who Preserve Memory</h3>
      <p>Among the more specialized factions are the Chroniclers, a group whose mission is as dangerous as it is fundamental. They are tasked with preserving history, documenting discoveries, and maintaining communication networks; they often operate from isolated watchtowers scattered across Miralen, closer to Void areas. These towers provide us rapid news updates and early warnings, but they also place Chroniclers at the front lines of storms, Splinter encounters, and territorial threats.</p>
      <p>Their work ensures that knowledge, arguably the most precious resource we have left, never disappears again.</p>
      
      <h3>The Wardens: The Guardians Of Settlements</h3>
      <p>Second only to the top-tier faction in difficulty of entry, the Wardens undergo some of the most rigorous training in the Guild. Their responsibility is straightforward but immense: protect the settlements.</p>
      <p>Wardens are the first to ensure justice stays in the settlements, respond to attacks, the last to retreat, and the ones who stand between civilians and the dangers that lurk around. Physical endurance, tactical skill, and emotional resilience are mandatory. Only a fraction of applicants make it through the trials.</p>
      
      <h3>The Void Hunters: The Guild's Most Exclusive and Deadliest Faction</h3>
      <p>At the very top of the hierarchy sit the Void Hunters. Their acceptance rate is the lowest of all, and for good reason.</p>
      <p>Void Hunters travel far beyond the borders of known territory, confronting threats too large, too strange, or too dangerous for any other faction to handle. Their missions are classified, their training is brutal, and their mortality rate the highest in the Guild's history.</p>
      <p>To become a Void Hunter is to accept a life of constant danger. Those who survive bring us innovative weapons and take care of Splinters; those who don't are remembered with honor.</p>
      <p class="emphasis-text">So tell us, dear reader. Which faction would you dare to join?</p>
      
      <p class="small-text">Photos: NO.5 | Styling: Venair Lux | Interview: Alai Rae</p>
    </section>
    
    <p style="text-align: center; margin-top: 30px;"><a href="https://discord.com/channels/1426570529200017549/1460271222251323570" target="_blank" class="discord-link">View Original</a></p>
  </div>
`

const echoIssue26Page = `
  <div class="container">
    <section class="lore-content-section">
      <h1>ISSUE #26 - THE MIRALEN APEX RUSH</h1>
      <p>Miralen's most electrifying spectacle returns this season, and once again the world turns its eyes toward the legendary Miralen Apex Rush, a competition where speed alone is never enough!</p>
      <p>Equal parts race, endurance trial, and controlled chaos, the MAR has evolved into the planet's most beloved sport, drawing competitors from every settlement and spectators from every corner of the region!</p>
      
      <h3>What Exactly Is the MAR?</h3>
      <p>The Miralen Apex Rush is a series of high-velocity battle-races held across Miralen. Competitors sprint, weave, and survive their way through courses designed to test reflexes, stamina, and tactics.</p>
      <p>But the true wildcard here is the audience! In a tradition as old as the sport itself, spectators are permitted, encouraged even, to interfere using non-lethal moves, transforming every race into a living battlefield!</p>
      
      <h3>But Rae, What Are the Divisions?</h3>
      <p>I'm glad you asked, dear reader. There's two main ones!</p>
      
      <h3>Arena Races</h3>
      <p>The original format and still the most brutal. Held inside the famed Bridgetown Arena, these races are tight, claustrophobic, and unpredictable. Racers face sharp turns, sudden hazards, and constant crowd interference. It's the proving ground where legends are forged...oooor broken.</p>
      
      <h3>Path Races</h3>
      <p>A high-speed sprint through the streets of Miralen's settlements! Entire districts shut down as barricades carve out a twisting, dangerous route through alleyways, staircases, bridges, and sudden elevation shifts!</p>
      <p>Crowd interference is more regulated here, but still impactful. Due to their extreme difficulty, Path Races are typically reserved for Series B and A competitors.</p>
      
      <h3>Solo and Team Races</h3>
      <p>Solo Races usually have one 'mon per team, one track and absolutely NO MERCY. Racers must outpace each other while dodging obstacles hurled by the crowd! You may counter hazards with your own moves, but attacking the public is strictly forbidden!</p>
      <p>Team Races (Chariot Division) are composed by a team of two. The Puller, the powerhouse dragging the chariot and the Defender/Booster, the strategist who blocks hazards, buffs the puller, or disrupts rival teams! Teamwork is everything. A flawless puller is useless without a sharp, reactive partner.</p>
      
      <h3>Did You Know they Changed the Skill Tiers?!</h3>
      <ul class="rules-list">
        <li><strong>Serie A</strong> - The Champion Tier. It hosts pro racers, icons, and past winners</li>
        <li><strong>Serie B</strong> - The Expert Tier. It hosts elite competitors proving their mastery</li>
        <li><strong>Serie C</strong> - The Intermediate Tier. It hosts strong rising talents</li>
        <li><strong>Serie D</strong> - The Novice Tier. It hosts rookies, daredevils, and the newly brave</li>
      </ul>
      <p>Pretty cool, huh?! I heard Serie A racers often join the Scout Division~</p>
      
      <h3>Now Finally, Rules and Regulation!</h3>
      <p>The MAR is chaotic, but key regulations keep the sport thrilling and safe!</p>
      <ul class="rules-list">
        <li>Legalized betting is permitted but tightly monitored.</li>
        <li>Audience interference is allowed as long as no serious injuries occur.</li>
        <li>No direct attacks on rival racers; outmaneuvering is encouraged, knockouts are not.</li>
        <li>Custom routes ensure fairness across Land, Water, and Sky competitors.</li>
        <li>A designated Psychic-type official standardizes every racer's speed with their powers, preventing unfairities and allowing everyone to have a chance.</li>
        <li>Racers may not use moves that increase their own speed.</li>
        <li>The crowd may use moves that affect the entire field, speed boosts, hazards, or attacks that slow opponents or alter terrain.</li>
      </ul>
      <p class="emphasis-text">What do you think? Are you brave enough to join the chaos?</p>
      
      <p class="small-text">Photos: NO.11 | Styling: Venair Lux | Interview and Writing: Alai Rae</p>
    </section>
    
    <p style="text-align: center; margin-top: 30px;"><a href="https://discord.com/channels/1426570529200017549/1460298463425204398" target="_blank" class="discord-link">View Original</a></p>
  </div>
`

const echoIssue27Page = `
  <div class="container">
    <section class="lore-content-section">
      <h1>SPECIAL EDITION - ISSUE #27</h1>
      <h2>Splinter Spotted in Veldenroot</h2>
      <h3>Splintered Scizor Sighted in Veldenroot. Guild on High Alert</h3>
      <p class="emphasis-text">Corrupted entity enters settlement peacefully; underground disturbances follow</p>
      
      <p><strong>VELDENROOT</strong> — A splintered Scizor was observed entering Veldenroot late yesterday afternoon, accompanied by a Wartortle whose relationship to the corrupted entity remains unclear.</p>
      <p>Witnesses report the pair moved through the eastern checkpoint without incident. The purpose of their arrival remains unknown. Local authorities have been unable to locate either individual since the initial sighting.</p>
      <p>What followed has proven more unsettling than the visit itself.</p>
      <p>Beginning late last night, residents across Veldenroot's lower quarters have reported deep, resonant rumbling emanating from the cave systems beneath the settlement.</p>
      <p>The Guild has issued a formal alert for potential entity emergence. Patrols have been doubled around known cave entrances, and civilians have been advised to avoid underground areas until further notice.</p>
      <p>Residents are urged to report any further sightings or unusual activity by the cavern mouths.</p>
      <p>Updates to follow as the situation develops.</p>
      
      <p class="small-text">— Regional Desk</p>
    </section>
    
    <p style="text-align: center; margin-top: 30px;"><a href="https://discord.com/channels/1426570529200017549/1461153485801263288" target="_blank" class="discord-link">View Original</a></p>
  </div>
`

const echoIssue622Page = `
  <div class="container">
    <section class="lore-content-section">
      <h1>FROM THE ARCHIVES - ISSUE #622</h1>
      <h2>A headline from 5 years ago</h2>
      <h3>URGENT. 83 Missing in Glacien Hollow Expedition Disaster</h3>
      <p class="emphasis-text">Rescue efforts hindered as distress signal from institutional trip goes dark. Suicune sighting raises questions</p>
      
      <p><strong>KESHARI</strong> — Eighty-three students and teachers from Keshari Secondary Institute have been missing for over 36 hours after their scheduled field trip to Glacien Hollow ended in catastrophe. The group, comprised of three classes—Meadowroot, Streamside, and Canopy divisions—departed three days ago for what was meant to be an educational expedition to the northern basin.</p>
      <p>The alarm was first raised when the expedition's transport driver sent a fragmented distress signal late Tuesday evening. Communications went radio silent immediately after and attempt to re-establish contact have failed.</p>
      <p><strong>"We received what we could only describe as a panic transmission."</strong> said Rescue Coordinator Venn of the Miralen Emergency Response Department. <strong>"Then nothing. Complete radio silence. We mobilized teams within the hour."</strong></p>
      <p>The missing include 25 students from Meadowroot class, 28 from Streamside, 23 from Canopy, and seven supervising teachers, all between the developmental ages of 13 and 15 years, with their adult guides. Families gathered at Keshari's community hall remain in a limbo, awaiting any word of their children's fate.</p>
      <p>Rescue operations have encountered unusual obstacles.</p>
      <p>Multiple flying-type rescuers and canine search specialists have been forced to withdraw from the field, reporting debilitating sensory disruption.</p>
      <p><strong>"There's something in the air there...a frequency, a reverberation—"</strong> Explained Search Captain Idris, shaken after returning from an aborted reconnaissance flight. <strong>"It cuts right through you. Our fliers couldn't maintain altitude and our trackers couldn't distinguish scent from static. We have never seen something like this before."</strong></p>
      <p>The situation worsened when a rescue squadron reported a peculiar sighting.</p>
      <p>Suicune was spotted wandering the outer reaches of Glacien Hollow, but witnesses describe something nothing short of wrong.</p>
      <p><strong>"Her eyes...there were eyes covering her body!"</strong> Reported one rescuer who asked to remain anonymous. <strong>"And where her ribbons should have been white and flowing, there were these black, writhing tendrils. Like something had corrupted her from the inside out—"</strong></p>
      <p>Suicune reportedly attacked without provocation. Seventeen rescuers are confirmed dead.</p>
      <p>The Parliament has now established a perimeter around the affected zone. All civilian rescue attempts have been strictly prohibited. Specialized containment teams are en route from Last Haven, though officials remain tight-lipped about their strategy for approaching both the environmental anomalies and the corrupted legendary.</p>
      <p>The institutional trip was meant to study geological formations and past history, nothing more; now, those frozen ruins may hold answers no one wants to find.</p>
      
      <h3>A Personal Appeal from The Writer</h3>
      <p>I don't normally write like this. You know how much of a lover of gossip I am. But right now, I'm begging.</p>
      <p>If you know anything, anything at all, about what happened in Glacien Hollow, please come forward.</p>
      <p>If you've traveled those routes, if you've heard unusual reports, if you have family among the missing or the fallen rescuers, reach out.</p>
      <p>We need answers. Eighty-three souls are out there in that frozen hell, and every hour that passes is another hour they're alone with whatever has taken root in that place!</p>
      <p>So please, dear reader, contact the Keshari Community Response Line or send word directly to this publication.</p>
      <p>More updates will follow within the next 24 hours as rescue operations continue.</p>
      
      <p class="small-text">Alai Rae</p>
    </section>
    
    <p style="text-align: center; margin-top: 30px;"><a href="https://discord.com/channels/1426570529200017549/1461103415269523588" target="_blank" class="discord-link">View Original</a></p>
  </div>
`

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
