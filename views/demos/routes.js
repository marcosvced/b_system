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
});

/* Home 2 */
route.get(DEMOS.HOME2, (request, response) => {
  render(response, path('home-cta'), {}, { navigation })
});

/* Branding */
route.get(DEMOS.BRANDING, (request, response) => {
  render(response, path('branding'), {}, { navigation })
});

/* Digital Product */
route.get(DEMOS.DIGITAL_PRODUCT, (request, response) => {
  render(response, path('digital-product'), {}, { navigation })
});

/* Creative Studio */
route.get(DEMOS.CREATIVE_STUDIO, (request, response) => {
  render(response, path('creative-studio'), {}, { navigation })
});

/* Freelance */
route.get(DEMOS.FREELANCE, (request, response) => {
  render(response, path('freelance'), {}, { navigation })
});

/* Development Studio */
route.get(DEMOS.DEVELOPMENT_STUDIO, (request, response) => {
  render(response, path('development-studio'), {}, { navigation })
});

/* Corporative */
route.get(DEMOS.CORPORATIVE, (request, response) => {
  render(response, path('corporative'), {}, { navigation })
});

/* Creative Agency */
route.get(DEMOS.CREATIVE_AGENCY, (request, response) => {
  render(response, path('creative-agency'), {}, { navigation })
});

/* Furniture */
route.get(DEMOS.FURNITURE, (request, response) => {
  render(response, path('furniture'), {}, { navigation })
});

/* Modern Shop */
route.get(DEMOS.MODERN_SHOP, (request, response) => {
  render(response, path('modern-shop'), {}, { navigation })
});

/* Classic Shop */
route.get(DEMOS.CLASSIC_SHOP, (request, response) => {
  render(response, path('classic-shop'), {}, { navigation })
});

/* Legal */
route.get(DEMOS.LEGAL, (request, response) => {
  render(response, path('legal'), {}, { navigation })
});

/* Fitness */
route.get(DEMOS.FITNESS, (request, response) => {
  render(response, path('fitness'), {}, { navigation })
});

/* Architecture */
route.get(DEMOS.ARCHITECTURE, (request, response) => {
  render(response, path('architecture'), {}, { navigation })
});

/* Restaurant */
route.get(DEMOS.RESTAURANT, (request, response) => {
  render(response, path('restaurant'), {}, { navigation })
});
module.exports = route
