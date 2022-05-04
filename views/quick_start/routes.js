const express = require('express')
const { render, dir } = require('../../router/routeRender')
const { QUICK_START } = require('./routePaths')
const navigation = require('./navigation')

const route = express.Router()

function path(page = 'home', children = []) { return (dir(QUICK_START.ROUTE_NAME, page, children)) }

/**
 * 1 Home
 * 2 Demos
 * 3 Pages
 * 4 Modules
 * 5 Components
 * 6 Transitions
 */

/* the default path "/" should redirect to Home */
route.get('/', (request, response) => {
  response.redirect(QUICK_START.HOME)
})

/**
 * 1 Home
 */

route.get(QUICK_START.HOME, (request, response) => {
  render(response, path(), {}, { navigation })
})

/**
 * 4 Modules
 */

/* Headers */
route.get(QUICK_START.HEADERS, (request, response) => {
  render(response, path('modules', ['headers']), {}, { navigation })
})

/* Footers. */
route.get(QUICK_START.FOOTERS.BASIC, (request, response) => {
  render(response, path('modules', ['footers', 'basic']), {}, { navigation })
})

route.get(QUICK_START.FOOTERS.STANDARD, (request, response) => {
  render(response, path('modules', ['footers', 'standard']), {}, { navigation })
})

route.get(QUICK_START.FOOTERS.CORPORATE, (request, response) => {
  render(response, path('modules', ['footers', 'corporate']), {}, { navigation })
})

route.get(QUICK_START.FOOTERS.NEWSLETTER, (request, response) => {
  render(response, path('modules', ['footers', 'newsletter']), {}, { navigation })
})

/* Icons Social */
route.get(QUICK_START.ICONS_SOCIAL, (request, response) => {
  render(response, path('modules', ['iconsSocial']), {}, { navigation })
})

/**
 * 5 Components
 */

/* Buttons */
route.get(QUICK_START.BUTTONS, (request, response) => {
  render(response, path('components', ['buttons']), {}, { navigation })
})

/* Alerts */
route.get(QUICK_START.ALERTS, (request, response) => {
  render(response, path('components', ['alerts']), {}, { navigation })
})

/* Icons */
route.get(QUICK_START.ICONS, (request, response) => {
  render(response, path('components', ['icons']), {}, { navigation })
})

/* Links */
route.get(QUICK_START.LINKS, (request, response) => {
  render(response, path('components', ['links']), {}, { navigation })
})

/* Texts */
route.get(QUICK_START.TEXTS, (request, response) => {
  render(response, path('components', ['texts']), {}, { navigation })
})

/* Cards */
route.get(QUICK_START.CARDS, (request, response) => {
  render(response, path('components', ['cards']), {}, { navigation })
})

/* Product cards */
route.get(QUICK_START.PRODUCT_CARDS, (request, response) => {
  render(response, path('components', ['productCards']), {}, { navigation })
})

/* Grid cells */
route.get(QUICK_START.GRID_CELLS, (request, response) => {
  render(response, path('components', ['gridCells']), {}, { navigation })
})

/* Forms */
route.get(QUICK_START.FORMS, (request, response) => {
  render(response, path('components', ['forms']), {}, { navigation })
})

/* Interaction */
route.get(QUICK_START.INTERACTION, (request, response) => {
  render(response, path('components', ['interaction']), {}, { navigation })
})

/* Illustrations page. */
route.get(QUICK_START.ILLUSTRATIONS, (request, response) => {
  render(response, path('components', ['illustrations']), {}, { navigation })
})

/* Microillustrations page. */
route.get(QUICK_START.MICROILLUSTRATIONS, (request, response) => {
  render(response, path('components', ['microillustrations']), {}, { navigation })
})

/* Scenes page. */
route.get(QUICK_START.SCENES, (request, response) => {
  render(response, path('components', ['scenes']), {}, { navigation })
})

// TODO: remove
route.get('/example', (request, response) => {
  render(response, path('example', []), {}, { navigation })
})

module.exports = route
