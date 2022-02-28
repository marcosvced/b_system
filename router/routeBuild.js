const fs = require('fs')
// eslint-disable-next-line import/no-extraneous-dependencies
const pretty = require('pretty')

const distPath = `${process.cwd()}/dist`

module.exports = (response, path, html) => {
  if (!fs.existsSync(`${distPath}${path}`)) {
    fs.mkdirSync(`${distPath}${path}/`, { recursive: true })
  }

  const dirDepth = path.split('/').map((value) => (value ? '..' : '')).filter((n) => n).join('/')
  const replacedHtml = html.replace(/\/assets/g, `${dirDepth}/assets`).replace(/href="\//g, `href="${dirDepth}/`)

  fs.writeFileSync(`${distPath}${path}/index.html`, pretty(replacedHtml, { ocd: true }))
  response.send(html)
}
