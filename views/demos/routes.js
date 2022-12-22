const express = require('express')
const { render, dir } = require('../../router/routeRender')
const { DEMOS } = require('./routePaths')
const navigation = require('../navigation')

const route = express.Router()

function path(page = 'home', children = []) { return (dir(DEMOS.ROUTE_NAME, page, children)) }

/**
 * 1 Home
 */

/* Startup */
route.get(DEMOS.STARTUP, (request, response) => {
  render(response, path('startup'), {}, { navigation })
})

/* Home 2 */
route.get(DEMOS.HOME2, (request, response) => {
  render(response, path('home-cta'), {}, { navigation })
})

/* Branding */
route.get(DEMOS.BRANDING, (request, response) => {
  render(response, path('branding'), {}, { navigation })
})

/* Financial */
route.get(DEMOS.FINANCIAL, (request, response) => {
  render(response, path('financial'), {}, { navigation })
})

/* Creative Studio */
route.get(DEMOS.CREATIVE_STUDIO, (request, response) => {
  render(response, path('creative-studio'), {}, { navigation })
})

/* Freelance */
route.get(DEMOS.FREELANCE, (request, response) => {
  render(response, path('freelance'), {}, { navigation })
})

/* Development Studio */
route.get(DEMOS.DEVELOPMENT_STUDIO, (request, response) => {
  render(response, path('development-studio'), {}, { navigation })
})

module.exports = route
