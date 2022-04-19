const express = require('express')
const routePaths = require('../../router/routePaths')
const routeRender = require('../../router/routeRender')

const route = express.Router()

/* the default path "/" should redirect to Home */
route.get('/', (request, response) => {
  response.redirect(routePaths.QUICK_START.HOME)
})

/* home page. */
route.get(routePaths.QUICK_START.HOME, (request, response) => {
  routeRender.render(response, routeRender.dir(routePaths.QUICK_START.ROUTE_NAME))
})

/* headers page. */
route.get(routePaths.QUICK_START.HEADERS, (request, response) => {
  routeRender.render(response, routeRender.dir(routePaths.QUICK_START.ROUTE_NAME, 'modules', ['headers']))
})

/* footers page. */
route.get(routePaths.QUICK_START.FOOTERS.BASIC, (request, response) => {
  routeRender.render(response, routeRender.dir(routePaths.QUICK_START.ROUTE_NAME, 'modules', ['footers', 'basic']))
})

route.get(routePaths.QUICK_START.FOOTERS.CORPORATE, (request, response) => {
  routeRender.render(response, routeRender.dir(routePaths.QUICK_START.ROUTE_NAME, 'modules', ['footers', 'corporate']))
})

/* Marquees page. */
route.get(routePaths.QUICK_START.MARQUEES.BASIC, (request, response) => {
  routeRender.render(response, routeRender.dir(routePaths.QUICK_START.ROUTE_NAME, 'modules', ['marquees', 'basic']))
})

route.get(routePaths.QUICK_START.MARQUEES.CTA, (request, response) => {
  routeRender.render(response, routeRender.dir(routePaths.QUICK_START.ROUTE_NAME, 'modules', ['marquees', 'cta']))
})

route.get(routePaths.QUICK_START.MARQUEES.EXTENDED, (request, response) => {
  routeRender.render(response, routeRender.dir(routePaths.QUICK_START.ROUTE_NAME, 'modules', ['marquees', 'extended']))
})

route.get(routePaths.QUICK_START.MARQUEES.ILLUSTRATION, (request, response) => {
  routeRender.render(response, routeRender.dir(routePaths.QUICK_START.ROUTE_NAME, 'modules', ['marquees', 'illustration']))
})

route.get(routePaths.QUICK_START.MARQUEES.IMAGE, (request, response) => {
  routeRender.render(response, routeRender.dir(routePaths.QUICK_START.ROUTE_NAME, 'modules', ['marquees', 'image']))
})

route.get(routePaths.QUICK_START.MARQUEES.STANDAR, (request, response) => {
  routeRender.render(response, routeRender.dir(routePaths.QUICK_START.ROUTE_NAME, 'modules', ['marquees', 'standar']))
})

route.get(routePaths.QUICK_START.MARQUEES.TEXT, (request, response) => {
  routeRender.render(response, routeRender.dir(routePaths.QUICK_START.ROUTE_NAME, 'modules', ['marquees', 'text']))
})

route.get(routePaths.QUICK_START.MARQUEES.TEXTIMAGE, (request, response) => {
  routeRender.render(response, routeRender.dir(routePaths.QUICK_START.ROUTE_NAME, 'modules', ['marquees', 'textImage']))
})

/* Buttons page. */
route.get(routePaths.QUICK_START.BUTTONS, (request, response) => {
  routeRender.render(response, routeRender.dir(routePaths.QUICK_START.ROUTE_NAME, 'components', ['buttons']))
})

/* Alerts page. */
route.get(routePaths.QUICK_START.ALERTS, (request, response) => {
  routeRender.render(response, routeRender.dir(routePaths.QUICK_START.ROUTE_NAME, 'components', ['alerts']))
})

/* Icons page. */
route.get(routePaths.QUICK_START.ICONS, (request, response) => {
  routeRender.render(response, routeRender.dir(routePaths.QUICK_START.ROUTE_NAME, 'components', ['icons']))
})

/* Links page. */
route.get(routePaths.QUICK_START.LINKS, (request, response) => {
  routeRender.render(response, routeRender.dir(routePaths.QUICK_START.ROUTE_NAME, 'components', ['links']))
})

/* Texts page. */
route.get(routePaths.QUICK_START.TEXT, (request, response) => {
  routeRender.render(response, routeRender.dir(routePaths.QUICK_START.ROUTE_NAME, 'components', ['text']))
})

/* Cards page. */
route.get(routePaths.QUICK_START.CARDS, (request, response) => {
  routeRender.render(response, routeRender.dir(routePaths.QUICK_START.ROUTE_NAME, 'components', ['cards']))
})

/* Product cards page. */
route.get(routePaths.QUICK_START.PRODUCT_CARDS, (request, response) => {
  routeRender.render(response, routeRender.dir(routePaths.QUICK_START.ROUTE_NAME, 'components', ['productCards']))
})

/* Grid Cells page. */
route.get(routePaths.QUICK_START.GRIDCELLS, (request, response) => {
  routeRender.render(response, routeRender.dir(routePaths.QUICK_START.ROUTE_NAME, 'components', ['gridCells']))
})

/* Interaction page. */
route.get(routePaths.QUICK_START.INTERACTION, (request, response) => {
  routeRender.render(response, routeRender.dir(routePaths.QUICK_START.ROUTE_NAME, 'components', ['interaction']))
})

/* Illustrations page. */
route.get(routePaths.QUICK_START.ILLUSTRATIONS, (request, response) => {
  routeRender.render(response, routeRender.dir(routePaths.QUICK_START.ROUTE_NAME, 'components', ['illustrations']))
})

/* Microillustrations page. */
route.get(routePaths.QUICK_START.MICROILLUSTRATIONS, (request, response) => {
  routeRender.render(response, routeRender.dir(routePaths.QUICK_START.ROUTE_NAME, 'components', ['microillustrations']))
})

/* Scenes page. */
route.get(routePaths.QUICK_START.SCENES, (request, response) => {
  routeRender.render(response, routeRender.dir(routePaths.QUICK_START.ROUTE_NAME, 'components', ['scenes']))
})

module.exports = route
