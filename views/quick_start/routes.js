const express = require('express')
const { render, dir } = require('../../router/routeRender')
const { QUICK_START } = require('./routePaths')
const navigation = require('../navigation')

const route = express.Router()

function path(page = 'home', children = []) { return (dir(QUICK_START.ROUTE_NAME, page, children)) }

/**
 * 1 Pages
 * 2 Modules
 * 3 Components
 * 4 Transitions
 */

/* the default path "/" should redirect to Home */
route.get('/', (request, response) => {
  response.redirect(QUICK_START.BUTTONS)
})

/**
 * 2 Modules
 */

/* Headers */
route.get(QUICK_START.CATEGORIES_MENU, (request, response) => {
  render(response, path('modules', ['categoriesMenu']), {}, { navigation })
})

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

/* CTAs */
route.get(QUICK_START.CTA, (request, response) => {
  render(response, path('modules', ['cta']), {}, { navigation })
})

/* Headers */
/* Contact bar */
route.get(QUICK_START.CONTACT_BAR, (request, response) => {
  render(response, path('modules', ['contactBar']), {}, { navigation })
})

/* Service grids. */
route.get(QUICK_START.SERVICE_GRIDS, (request, response) => {
  render(response, path('modules', ['serviceGrids']), {}, { navigation })
})

/* Basic contents. */
/* Basic Contents */
route.get(QUICK_START.BASIC_CONTENTS, (request, response) => {
  render(response, path('modules', ['basicContents']), {}, { navigation })
})

/* Team Grids */
route.get(QUICK_START.TEAM_GRIDS, (request, response) => {
  render(response, path('modules', ['teamGrids']), {}, { navigation })
})

/* Busness Cases */
route.get(QUICK_START.BUSINESS_CASES, (request, response) => {
  render(response, path('modules', ['businessCases']), {}, { navigation })
})

/* Marquees. */
route.get(QUICK_START.MARQUEES.BASIC, (request, response) => {
  render(response, path('modules', ['marquees', 'basic']), {}, { navigation })
})

route.get(QUICK_START.MARQUEES.CTA, (request, response) => {
  render(response, path('modules', ['marquees', 'cta']), {}, { navigation })
})

route.get(QUICK_START.MARQUEES.EXTENDED, (request, response) => {
  render(response, path('modules', ['marquees', 'extended']), {}, { navigation })
})

route.get(QUICK_START.MARQUEES.ILLUSTRATION, (request, response) => {
  render(response, path('modules', ['marquees', 'illustration']), {}, { navigation })
})

route.get(QUICK_START.MARQUEES.IMAGE, (request, response) => {
  render(response, path('modules', ['marquees', 'image']), {}, { navigation })
})

route.get(QUICK_START.MARQUEES.STANDAR, (request, response) => {
  render(response, path('modules', ['marquees', 'standar']), {}, { navigation })
})

route.get(QUICK_START.MARQUEES.TEXTIMAGE, (request, response) => {
  render(response, path('modules', ['marquees', 'textImage']), {}, { navigation })
})

/**
 * 3 Components
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

module.exports = route
