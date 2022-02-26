const srcDirs = require('./dirs')
const routePaths = require('./routePaths')

const defaultOptions = {
  title: 'B_System',
  ...srcDirs,
  ...routePaths,
  layout: `${srcDirs.layout}/default`,
}

const routeRender = {
  dir: (view, page = 'home', children = []) => `${view}/pages/${page}${children ? `/${children.join('/')}` : ''}/index.ejs`,
  render: (view, path, options = {}, extras = {}) => {
    view.render(path, {
      ...defaultOptions,
      ...options,
      ...extras,
    })
  },
}
module.exports = routeRender
