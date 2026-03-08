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
