const express = require('express')
const { render, dir } = require('../../router/routeRender')
const { PAGES } = require('./routePaths')
const navigation = require('../navigation')

const route = express.Router()

function path(page = 'home', children = []) { return (dir(PAGES.ROUTE_NAME, page, children)) }


/* About Us */
route.get(PAGES.ABOUT_US, (request, response) => {
  render(response, path('about-us'), {}, { navigation })
});

/* About Me */
route.get(PAGES.ABOUT_ME, (request, response) => {
  render(response, path('about-me'), {}, { navigation })
});

/* About B_System */
route.get(PAGES.ABOUT_B_SYSTEM, (request, response) => {
  render(response, path('about-b-system'), {}, { navigation })
});

/* Ho we work */
route.get(PAGES.HOW_WE_WORK, (request, response) => {
  render(response, path('how-we-work'), {}, { navigation })
});

/* Our services */
route.get(PAGES.OUR_SERVICES, (request, response) => {
  render(response, path('our-services'), {}, { navigation })
});

/* what we offer */
route.get(PAGES.WHAT_WE_OFFER, (request, response) => {
  render(response, path('what-we-offer'), {}, { navigation })
});

/* Team Classic */
route.get(PAGES.TEAM_CLASSIC, (request, response) => {
  render(response, path('team-classic'), {}, { navigation })
});

/* Team Modern */
route.get(PAGES.TEAM_MODERN, (request, response) => {
  render(response, path('team-modern'), {}, { navigation })
});

/* Product classic */
route.get(PAGES.PRODUCT_CLASSIC, (request, response) => {
  render(response, path('product-classic'), {}, { navigation })
});

/* Product modern */
route.get(PAGES.PRODUCT_MODERN, (request, response) => {
  render(response, path('product-modern'), {}, { navigation })
});

/* Portfolio Classic Grid */
route.get(PAGES.PORTFOLIO_CLASSIC_GRID, (request, response) => {
  render(response, path('portfolio-classic-grid'), {}, { navigation })
});

/* Portfolio Classic Grid */
route.get(PAGES.PORTFOLIO_CLASSIC_WIDE, (request, response) => {
  render(response, path('portfolio-classic-wide'), {}, { navigation })
});

/* Portfolio Classic Grid */
route.get(PAGES.PORTFOLIO_GALLERY_WIDE, (request, response) => {
  render(response, path('portfolio-gallery-wide'), {}, { navigation })
});

/* Portfolio Masonry */
route.get(PAGES.PORTFOLIO_MASONRY, (request, response) => {
  render(response, path('portfolio-masonry'), {}, { navigation })
});

/* Portfolio Masonry Path */
route.get(PAGES.PORTFOLIO_MASONRY_PATH, (request, response) => {
  render(response, path('portfolio-masonry-path'), {}, { navigation })
});

/* portfolio_pattern */
route.get(PAGES.PORTFOLIO_PATTERN, (request, response) => {
  render(response, path('portfolio-pattern'), {}, { navigation })
});

/* services_portfolio */
route.get(PAGES.SERVICES_PORTFOLIO, (request, response) => {
  render(response, path('services-portfolio'), {}, { navigation })
});

/* customer_support*/
route.get(PAGES.CUSTOMER_SUPPORT, (request, response) => {
  render(response, path('customer-support'), {}, { navigation })
});

/* testimonials*/
route.get(PAGES.TESTIMONIALS, (request, response) => {
  render(response, path('testimonials'), {}, { navigation })
});

/* CONTACT_CLASSIC */
route.get(PAGES.CONTACT_CLASSIC, (request, response) => {
  render(response, path('contact-classic'), {}, { navigation })
});

/* PRODUCT_PACKS */
route.get(PAGES.PRODUCT_PACKS, (request, response) => {
  render(response, path('product-packs'), {}, { navigation })
});

module.exports = route
