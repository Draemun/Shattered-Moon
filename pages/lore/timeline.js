const timelineEntries = [
  {
    era: 'Feral Age',
    period: 'Thousands of years before the Shattering',
    body: `The oldest things left from this period aren't written.\n\nWhat survives is a record of pack hierarchies, territory lines, and at the margins of the images drawn in caves, enormous faceless shapes that scholars now understand to be the Legendaries.\n\nWhatever was happening in those territories, the packs waited it out, scattered, and came back.`
  },
  {
    era: 'Harmony Age',
    period: 'Several centuries before the Shattering',
    body: `The Harmony Age doesn't have a starting point.\n\nThe Chroniclers use the name to describe the long stretch between wandering packs and the city-states of the New Age.\n\nCommunities began returning to the same places to bury their dead, trade routes developed, and written law followed. The ancestor organizations of what is now the Guild trace back here, loose trader associations sharing route knowledge and protection.\n\nThe most telling shift is the eating laws.\n\nAt some point in the mid-Harmony period, village codes began prohibiting the consumption of other Pokémon. As trade networks expanded, the category of neighbor expanded with them.\n\nCommunities in the north and east resisted for generations. The transition took centuries and wasn't always peaceful.`
  },
  {
    era: 'New Age',
    period: 'Roughly 230 to 5 years before the Shattering',
    body: `Every major conflict in this period was the same: a legitimate grievance, secondary parties joining for their own reasons, escalation, attrition, then a treaty that settled the surface and left everything underneath untouched.\n\nForty years later, the underneath things surfaced again with different names.\n\nThe Sulrath Conflict started over water rights and ran 18 months across six city-states. The treaty answered only the water question.\n\nThe Cadent Schism was officially about trade policy, actually about whether self-governing communities could coexist with ones large enough to require centralization. That went to negotiation three times.\n\nThe Last War began over northern extraction rights 14 years before the Shattering, ran for 5 years, and ended when continued fighting became less profitable than the trading relationships that had developed during it.\n\nThe treaty held and it was an economic peace, but displaced populations weren't resettled, reparations weren't included, and the internal factions that had formed around the war were sometimes more volatile than anything happening at the borders.\n\nThose tensions came to Last Haven with everyone who survived.`
  },
  {
    era: 'The Shattering',
    period: '5 years ago to Today',
    body: `The first signs weren't recognized: reports of geological anomalies and equipment failures got attributed to stress and investigations found nothing useful. Time went wrong first, then space. The infrastructure the post-war peace had been built on dissolved faster than anyone had contingencies for. No one had planned for the Legendaries turning out to be real, present, and dangerous.\n\nWhat survived was small, distributed, and geographically fortunate.\n\nThe Parliament was assembled in emergency because any other alternatives had already failed. Districts were drawn around who had survived in Last Haven. The Guild was rebuilt around what still functioned, mixing and mashing the older factions while forming new ones.\n\nFor five years, they managed to survive and some dare say, thrive.\n\nThey're avoiding complacency in any possible way.`
  }
];

function renderTimeline() {
  return `
    <div class="container">
      <section class="lore-content-section">
        <h1>TIMELINE</h1>

        <div class="tl-track">
          <div class="tl-line"></div>
          ${timelineEntries.map((e, i) => `
            <div class="tl-node-wrap">
              <button class="tl-node" data-index="${i}" aria-expanded="false">
                <span class="tl-dot"></span>
                <span class="tl-era">${e.era}</span>
              </button>
            </div>
          `).join('')}
        </div>

        <div class="tl-panel" id="tl-panel" hidden>
          <div class="tl-panel-era" id="tl-panel-era"></div>
          <div class="tl-panel-body" id="tl-panel-body"></div>
        </div>
      </section>
    </div>
  `;
}

const timelinePage = renderTimeline();

function initTimeline() {
  const nodes = document.querySelectorAll('.tl-node');
  const panel = document.getElementById('tl-panel');
  const panelEra = document.getElementById('tl-panel-era');
  const panelBody = document.getElementById('tl-panel-body');
  let active = null;

  nodes.forEach(btn => {
    btn.addEventListener('click', () => {
      const i = +btn.dataset.index;
      if (active === i) {
        panel.hidden = true;
        btn.setAttribute('aria-expanded', 'false');
        btn.classList.remove('active');
        active = null;
        return;
      }
      nodes.forEach(n => { n.setAttribute('aria-expanded', 'false'); n.classList.remove('active'); });
      btn.setAttribute('aria-expanded', 'true');
      btn.classList.add('active');
      active = i;
      const entry = timelineEntries[i];
      panelEra.innerHTML = `${entry.era}<span class="tl-panel-period">${entry.period}</span>`;
      panelBody.innerHTML = entry.body.split('\n\n').map(p => `<p>${p.trim()}</p>`).join('');
      panel.hidden = false;
    });
  });
}

document.addEventListener('routeRendered', () => {
  if (document.getElementById('tl-panel')) initTimeline();
});
