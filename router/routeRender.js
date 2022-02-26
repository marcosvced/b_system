const srcDirs = require('./dirs')
const routePaths = require('./routePaths')
const build = require('./routeBuild')

const defaultOptions = {
  title: 'B_System',
  ...srcDirs,
  ...routePaths,
  layout: `${srcDirs.layout}/default`,
}

const routeRender = {
  dir: (view, page = 'home', children = []) => `${view}/pages/${page}${children ? `/${children.join('/')}` : ''}/index.ejs`,
  render: (response, path, options = {}, extras = {}) => {
    response.render(path, {
      ...defaultOptions,
      ...options,
      ...extras,
    }, (error, html) => {
      build(response, response.req.route.path, html)
    })
  },
}

module.exports = routeRender
