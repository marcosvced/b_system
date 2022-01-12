const express = require('express')

const router = express.Router()

const srcDirs = {
  assets: '/assets/',
  image: '/assets/img/',
  layout: `${process.cwd()}/lib/layouts/`,
  component: `${process.cwd()}/lib/components/`,
}

const TITLE = 'B_System'

const ROUTES_NAMES = {
  QUICK_START: 'quick_start',
}

const ROUTES_PATHS = {
  QUICK_START: {
    HOME: '/home',
    HEADERS: '/headers',
    FOOTERS: {
      BASIC: '/footers/basic',
      CORPORATE: '/footers/corporate',
    },
  },
}

/**
 * @param {string} view
 * @param {string} page
 * @param {array} children
 * @returns {string}
 */
function dir(view, page = 'home', children = []) {
  return `${view}/pages/${page}${children ? `/${children.join('/')}` : ''}/index.ejs`
}

/**
 * @param {Response} view
 * @param {string} path
 * @param {object} extras
 */
function render(view, path, extras = {}) {
  view.render(path, {
    title: TITLE,
    ...srcDirs,
    ...ROUTES_PATHS,
    ...extras,
  })
}

/* home page. */
router.get(ROUTES_PATHS.QUICK_START.HOME, (req, res) => {
  render(res, dir(ROUTES_NAMES.QUICK_START))
})

/* headers page. */
router.get(ROUTES_PATHS.QUICK_START.HEADERS, (req, res) => {
  render(res, dir(ROUTES_NAMES.QUICK_START, 'modules', ['headers']))
})

/* footers page. */
router.get(ROUTES_PATHS.QUICK_START.FOOTERS.BASIC, (req, res) => {
  render(res, dir(ROUTES_NAMES.QUICK_START, 'modules', ['footers', 'basic']))
})

module.exports = router
