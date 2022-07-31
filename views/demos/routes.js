const express = require('express')
const { render, dir } = require('../../router/routeRender')
const { DEMOS } = require('./routePaths')
const navigation = require('../navigation')

const route = express.Router()

function path(page = 'home', children = []) { return (dir(DEMOS.ROUTE_NAME, page, children)) }

/**
 * 1 Home
 */

/* Home */
route.get(DEMOS.HOME, (request, response) => {
  render(response, path('home'), {}, { navigation })
})

module.exports = route