async function lorePage() {
  const [beginning, fiveYearsAgo, nowadays] = await Promise.all([
    loadMd('content/lore/beginning.md'),
    loadMd('content/lore/five-years-ago.md'),
    loadMd('content/lore/nowadays.md')
  ])
  return `
  <div class="container">
    <section class="lore-content-section">${beginning}</section>
    <section class="lore-content-section">${fiveYearsAgo}</section>
    <section class="lore-content-section">${nowadays}</section>
    <section class="warning-section">
      <h2 class="warning-title">⚠ WARNING TO ALL EXPLORATION TEAMS</h2>
      <div class="warning-content">
        <p class="warning-intro">The Shattered Territories are not a challenge to overcome, they are a tomb that's still filling.</p>
        <div class="warning-rules">
          <p>If you see structures made of impossible materials, <strong class="danger">RUN</strong>.</p>
          <p>If you hear sounds that don't belong, <strong class="danger">HIDE</strong>.</p>
          <p>If you meet someone who seems wrong, <strong class="danger">DON'T TRUST THEM.</strong></p>
          <p>And if you ever, <em><strong>EVER</strong></em> see the moon begin to crack…</p>
          <p class="final-warning"><em>Leave this region and never return.</em></p>
        </div>
        <div class="warning-footer">
          <p><em>Because Arceus is always watching.<br>And he's so very bored of what he built.</em></p>
        </div>
      </div>
    </section>
    <p style="text-align: center; margin-top: 30px;"><a href="https://discord.com/channels/1426570529200017549/1427583349756661782" target="_blank" class="discord-link">View Original</a></p>
  </div>
  `
}
