#!/usr/bin/env node

/**
 * Module dependencies.
 */

// eslint-disable-next-line import/order
const http = require('http')
const app = require('../app')

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10)

  // eslint-disable-next-line no-restricted-globals
  if (isNaN(port)) {
    // named pipe
    return val
  }

  if (port >= 0) {
    // port number
    return port
  }

  return false
}

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '3000')
app.set('port', port)

/**
 * Create HTTP server.
 */

const server = http.createServer(app)

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port)
// eslint-disable-next-line no-console
console.log('listening on port:', port)
// eslint-disable-next-line no-console
console.log(`http://localhost:${port}`)
