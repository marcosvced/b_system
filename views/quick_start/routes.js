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

/* categories menu page. */
route.get(routePaths.QUICK_START.CATEGORIES_MENU, (request, response) => {
  routeRender.render(response, routeRender.dir(routePaths.QUICK_START.ROUTE_NAME, 'modules', ['categoriesMenu']))
})

/* footers page. */
route.get(routePaths.QUICK_START.FOOTERS.BASIC, (request, response) => {
  routeRender.render(response, routeRender.dir(routePaths.QUICK_START.ROUTE_NAME, 'modules', ['footers', 'basic']))
})

route.get(routePaths.QUICK_START.FOOTERS.CORPORATE, (request, response) => {
  routeRender.render(response, routeRender.dir(routePaths.QUICK_START.ROUTE_NAME, 'modules', ['footers', 'corporate']))
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
route.get(routePaths.QUICK_START.TEXTS, (request, response) => {
  routeRender.render(response, routeRender.dir(routePaths.QUICK_START.ROUTE_NAME, 'components', ['texts']))
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

module.exports = route
