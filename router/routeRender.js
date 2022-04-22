const srcDirs = require('./dirs')
const build = require('./routeBuild')

const quickStartPaths = require('../views/quick_start/routePaths')

const defaultOptions = {
  title: 'B_system',
  ...srcDirs,
  ...quickStartPaths,
  layout: `${srcDirs.layout}/default`,
}

const routeRender = {
  dir: (view, page, children = []) => `${view}/pages/${page}${children ? `/${children.join('/')}` : ''}/index.ejs`,
  render: (response, path, options = {}, extras = {}) => {
    response.render(path, {
      ...defaultOptions,
      ...options,
      ...extras,
      activeRoute: response.req.route.path,
    }, (error, html) => {
      if (error) {
        throw new Error(error)
      }
      build(response, response.req.route.path, html)
    })
  },
}

module.exports = routeRender
