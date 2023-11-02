const express = require('express')
const { render, dir } = require('../../router/routeRender')
const { TRANSITIONS } = require('./routePaths')
const navigation = require('../navigation')

const route = express.Router()

function path(page = 'home', children = []) { return (dir(TRANSITIONS.ROUTE_NAME, page, children)) }

/* BOUNCE */
route.get(TRANSITIONS.BOUNCE, (request, response) => {
  render(response, path('bounce' ), {}, { navigation })
})

route.get(TRANSITIONS.FLASH, (request, response) => {
  render(response, path('flash' ), {}, { navigation })
})



module.exports = route
