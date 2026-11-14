async function loadMd(path) {
  const res = await fetch(path)
  if (!res.ok) return `<p style="color:var(--accent-red)">Failed to load content.</p>`
  const text = await res.text()
  return marked.parse(text).replace(/<table>/g, '<div class="table-wrap"><table>').replace(/<\/table>/g, '</table></div>')
}

function mdPage(wrapperClass, fetchFn) {
  return async function() {
    const html = await fetchFn()
    return `<div class="container"><section class="lore-content-section ${wrapperClass}">${html}</section></div>`
  }
}
