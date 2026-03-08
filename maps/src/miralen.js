const mapsPage = `
  <div class="container">
    <h1 style="text-align: center; margin-bottom: 40px;">MIRALEN</h1>
    <div class="map-container">
      <img src="maps/png/miralen.png" alt="Miralen" class="map-image" id="mapImg">
    </div>
  </div>
  
  <div id="mapModal" class="map-modal">
    <div class="map-modal-content">
      <span class="map-modal-close" onclick="closeMapModal()">&times;</span>
      <h2 id="modalTitle"></h2>
      <div id="modalBody"></div>
    </div>
  </div>
`

const mapLocations = {
  'Glacien Hollow': { 
    x: '23.94', 
    y: '33.15', 
    lore: '<p>A vast, wind-scoured basin buried deep in Miralen\'s northern reaches.</p><p>Once a thriving region, it\'s now locked in eternal frost and its history has been erased by a cataclysm no one remembers. The Hollow stretches endlessly, layered in fractured ice and veins of ancient permafrost. Ruins lie half-submerged, frozen mid-collapse as if time itself recoiled.</p><p>Some claim to see figures moving beneath the ice, slow and constantly watching.</p>',
    links: [
      { title: 'Echo of Miralen #622 - Glacien Hollow Disaster', page: 'echo-issue-622' }
    ]
  },
  'Moonlit Wastes': { 
    x: '13.46', 
    y: '61.65', 
    lore: '<p>Where Lunala and the Cresselias turned Faraway fell.</p><p>This flat, barren region exists in permanent twilight. The corrupted moon hangs frozen overhead, cycling through broken phases regardless of time.</p><p>Strange Lights float through the air, and the moonlight causes gradual insanity. The ground develops eye-like patterns. At the center lies Cresselia\'s Fall, a crater filled with disintegrating feathers and a corrupted Lunar Wing that induces hallucinations.</p><p>This place feels deeply wrong.</p>',
    links: [
      { title: 'Entity: Faraway', page: 'entity-faraway' }
    ]
  },
  'Lake of Memories': { 
    x: '22.07', 
    y: '63.86', 
    lore: '<p>A vast lake that stretches farther than the eye can see. The water is unnaturally still. Pokémon who stare too long into the lake often lose track of time, or begin to recall things that aren\'t theirs.</p><p>Islands drift slowly across its surface, some hollow, some inhabited, some not existing at all. The lake is sacred to some, cursed to others, and impossible to fully map. No one has ever reached the far shore. Some say there isn\'t one.</p>' 
  },
  'Veldenroot': { 
    x: '40.71', 
    y: '59.59', 
    lore: '<p>Built along the edge of a slow-spreading corruption zone, Veldenroot is a city of watchers and its residents specialize in anomaly tracking. The city itself is quiet as too much noise draws attention from things best left undisturbed.</p><p>Homes are built low to the ground, with thick walls and muted colors. Lanterns burn with filtered light. Its citizens speak in whispers, record what they see, and rarely intervene.</p><p>Independent \'mons now need 5 endorsements to enter this settlement, unless they live here.</p>',
    links: [
      { title: 'Echo of Miralen #27 - Splinter in Veldenroot', page: 'echo-issue-27' }
    ]
  },
  'The Deep Caves': { 
    x: '33.98', 
    y: '71.94', 
    lore: '<p>A sprawling underground network carved by corrupted entities during their hunts.</p><p>The corridors are impossibly long, lined with flickering torches and reversed carvings warning of Integrity. Void Echo deposits pulse behind ore veins. Echo chambers trap sound in infinite loops.</p><p>Who adventures too deep rarely comes back.</p>',
    links: [
      { title: 'Entity: The Alone', page: 'entity-alone' }
    ]
  },
  'Fracture Caves': { 
    x: '49.43', 
    y: '32.56', 
    lore: '<p>Beneath the surface of the Corrupted Plains lies a cave system where reality itself fails to hold. Gravity reverses without warning, time loops in fragments, and navigation becomes a test of memory and will. The walls are embued with void energy, and echoes repeat endlessly, sometimes before you speak.</p><p>Pokémon who enter often lose track of how long they\'ve been inside...or whether they ever left. Those caverns are unstable, disorienting, and deeply tied to the corruption spreading through the Plains.</p>' 
  },
  'The Nether Scar': { 
    x: '53.84', 
    y: '50.93', 
    lore: '<p>The scarred remains of Hoopa\'s portal network.</p><p>Though the portals are sealed, their energy leaked into the land, creating a permanent wound of magma and basalt. Bridges stretch over chasms, and the rocks are carved with warnings and betrayals.</p><p>Void Echoes cluster here more densely than anywhere else. It\'s unstable, hostile, and full of residual power.</p>' 
  },
  'Viewing Platform': { 
    x: '57.04', 
    y: '64.30', 
    lore: '<p>A fenced cave opens into a staircase that descends toward a wide stone platform suspended above a Void pool.</p><p>From here, you can see a Torch Trail winding through the scar, and the jagged entrance to Eyes Corner where The Stalk appears most frequently. At the center of the platform, a carving reads <strong>"Is this fair?"</strong> etched in reverse, as if meant for something beneath. Pokémon who linger here report feeling watched, even when alone. Some say the platform was once used for ritual observation, others claim it was built by Integrity itself.</p><p>No one agrees on its purpose. Everyone agrees it\'s not safe to stay long.</p>' 
  },
  'Grass That Doesn\'t Remember': { 
    x: '58.69', 
    y: '20.22', 
    lore: '<p>A field of grass that stretches across the northern edge of the Corrupted Plains. Pokémon who walk through it often forget why they came, what they were doing, or even who they are.</p><p>The terrain feels familiar and wrong all at once, like a memory you can\'t place. Voices sometimes whisper from the wind, and paths seem to rearrange themselves. This is quiet, eerie, and deceptively peaceful...<strong>until it isn\'t</strong>.</p>' 
  },
  'Virevale': { 
    x: '71.16', 
    y: '43.29', 
    lore: '<p>A lakeside city built on bridges. It thrives on movements of goods, of stories and pokemon passing through.</p><p>It\'s a place of temporary stays and deals, where merchants, messengers, and mercenaries cross paths. Though it answers to the Last Haven, its loyalties shift like the tides. Locals say the lake remembers every secret ever spoken on its shores.</p>' 
  },
  'Keshari': { 
    x: '76.02', 
    y: '78.55', 
    lore: '<p>Nestled in the fertile lowlands, Keshari is a quiet city known for its herbalists, growers, and caretakers. It supplies much of the region\'s food and medicine. Faraways are seen here more often than most places and are left offerings in return. Keshari obeys the Last Haven, but doesn\'t care about politics.</p>' 
  },
  'Last Haven': { 
    x: '82.97', 
    y: '23.74', 
    lore: '<h3>Last Haven (The Guild)</h3><p>Once the headquarters of Team Voidseeker, Last Haven is now the heart of operation in the Shattered Territories. Built from stone, glass, and metal to resist void-corruption, its floors serve distinct purposes: the first floor underground hosts the commons, marketplace, and rental rooms; the second floor holds emergency supply vaults and watch balconies; the third is the communication and mission hub. The fourth floor is sealed and forbidden, where Sekani once listened to the corrupted soothe bell. At night, the ringing still echoes. The fifth floor remains empty.</p><p>Watchtowers guard the perimeter, and an underground tunnel system allows emergency evacuation. Patrols run constantly to monitor entity approach.</p><h3>Bridgetown</h3><p>Built around the Archway\'s upper reaches, Bridgetown is a residential sprawl of suspended walkways, rope bridges, and cliffside dwellings. Pokémon live in elevated homes carved into rock faces or built atop reinforced platforms.</p><p>Communal gardens grow Enigma Berries in hanging baskets, as they are void-resistant. A small field known as the Windpatch serves as a gathering space, while the Echospire channels psychic energy to stabilize the area.</p><p>You\'ll find local vendors selling comfort goods and crafted items, rest stations for travelers, and Guild patrol posts keeping watch from even higher.</p><h3>Archway</h3><p>A towering arch spans the ravine, marking the heart of the Archway Settlement. This is the region\'s oldest surviving structure, now surrounded by elevated platforms, rope lifts, and cliffside stations. Guard posts are stationed at key elevation points and supply crates from Last Haven are dropped in during emergencies.</p><p>The central Archway serves as the main thoroughfare for trade and transit. A sealed tower nearby contains the original Void Echo discovered by Null, guarded at all times. Beneath the bridge, torch trails lead into forbidden caves marked with warnings.</p><p>The settlement is tense and always watching the depths below.</p>',
    links: [
      { title: 'Echo of Miralen #21 - Guild Factions', page: 'echo-issue-21' }
    ]
  }
}
