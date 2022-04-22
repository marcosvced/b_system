// eslint-disable-next-line no-unused-vars
const bsystem = (() => {
  /* ENUMS */
  const GLOBAL = { HEADER_BODY_SCROLL: 120 }
  const DATA_ATTR = {
    NAVBAR_NAV: '[data-bsystem="navbar-nav"]',
    NARROW_BUTTON_WRAPPER: '[data-bsystem="buttons-wrapper"] button:not(.btn.btn-only-icon)',
    STICKY: '[data-bsystem="sticky"]',
  }
  const EVENTS = {
    ON_HEADER_BECOMES_NARROWER: 'onHeaderBecomesNarrower',
    ON_TRANSPARENT_HEADER_CHANGE_BACKGROUND: 'onTransparentHeaderChangeBackground',
  }

  /* MEDIA QUERIES */

  const breakpoints = (() => {
    const breakpointList = {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1400,
    }

    const current = {}
    const onResize = () => {
      Object.entries(breakpointList)
        .forEach(([key, value]) => {
          // eslint-disable-next-line no-undef
          current[key] = window.innerWidth >= value
        })
    }

    // eslint-disable-next-line no-undef
    window.addEventListener('resize', onResize, { passive: true })
    onResize()

    return current
  })()

  /* SELECTOR */
  const selector = (() => {
    const selectors = {}

    selectors.find = (selection) => document.querySelector(selection)
    selectors.findAll = (selection) => document.querySelectorAll(selection)
    selectors.findFromFather = (child, selection) => child.parentElement.querySelector(selection)
    selectors.findAllFromFather = (child, selection) => child.parentElement
      .querySelectorAll(selection)
    return selectors
  })()

  /*
   * HEADER
   */

  // When the body is scrolled the header with data-sys attribute 'narrower' becomes narrower
  function changeHeaderSizeOnScroll() {
    const headerList = selector.findAll(DATA_ATTR.STICKY)

    if (!headerList) {
      return
    }
    if (headerList.length > 1) {
      throw new Error('There cannot be more than one header with the attribute data-bsystem="sticky" per home.')
    }
    const mainHeader = headerList[0]
    const onScrollOrResize = () => {
      if (window.scrollY >= GLOBAL.HEADER_BODY_SCROLL && breakpoints.lg) {
        mainHeader.dispatchEvent(
          new CustomEvent(EVENTS.ON_HEADER_BECOMES_NARROWER, { detail: { isNarrow: true } }),
        )
        mainHeader.classList.add('header-narrow')
        return
      }

      mainHeader.dispatchEvent(
        new CustomEvent(EVENTS.ON_HEADER_BECOMES_NARROWER, { detail: { isNarrow: false } }),
      )
      mainHeader.classList.remove('header-narrow')
    }

    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize, { passive: true })
  }

  // When the body is scrolled the transparent header changes color
  function changeTransparentHeaderOnScroll() {
    const headerTransparent = selector.find('.header-transparent.header-fixed')

    if (!headerTransparent) {
      return
    }

    window.addEventListener('scroll', () => {
      if (window.scrollY >= GLOBAL.HEADER_BODY_SCROLL) {
        headerTransparent.classList.remove('header-transparent')
        headerTransparent.classList.add('header-light')

        headerTransparent.dispatchEvent(
          new CustomEvent(
            EVENTS.ON_TRANSPARENT_HEADER_CHANGE_BACKGROUND,
            { detail: { isTransparent: false } },
          ),
        )
        return
      }
      headerTransparent.classList.remove('header-light')
      headerTransparent.classList.add('header-transparent')

      headerTransparent.dispatchEvent(
        new CustomEvent(
          EVENTS.ON_TRANSPARENT_HEADER_CHANGE_BACKGROUND,
          { detail: { isTransparent: true } },
        ),
      )
    })
  }

  function createHeaderNavDrawer() {
    const offCanvasList = selector.findAll(`header .offcanvas${DATA_ATTR.NAVBAR_NAV}`)

    if (!offCanvasList) {
      return
    }

    offCanvasList.forEach((offCanvas) => {
      const nav = selector.findFromFather(offCanvas, 'header nav.navbar ul.navbar-nav')
      if (!nav) {
        throw new Error('There is no nav element in the header')
      }

      const offCanvasBody = document.createElement('div')
      offCanvasBody.classList.add('offcanvas-body')
      offCanvasBody.append(nav.cloneNode(true))
      offCanvas.appendChild(offCanvasBody)
    })
  }

  function makeHeaderButtonNarrow() {
    const header = selector.find(DATA_ATTR.STICKY)
    const buttons = selector.findAll(`header${DATA_ATTR.STICKY} ${DATA_ATTR.NARROW_BUTTON_WRAPPER}`)

    if (!header || !buttons || buttons.length <= 0) {
      return
    }

    header.addEventListener(EVENTS.ON_HEADER_BECOMES_NARROWER, (event) => {
      buttons.forEach((button) => {
        if (event.detail.isNarrow) {
          button.classList.add('btn-narrow')
          return
        }
        button.classList.remove('btn-narrow')
      })
    })
  }

  // Bootstrap functions
  function bootstrap() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl))
  }

  bootstrap()

  changeHeaderSizeOnScroll()
  changeTransparentHeaderOnScroll()
  createHeaderNavDrawer()
  makeHeaderButtonNarrow()

  const exports = {}
  exports.$breakpoints = breakpoints
  exports.$selector = selector
  exports.$EVENTS = EVENTS
  return exports
})()
