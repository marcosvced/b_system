// eslint-disable-next-line no-unused-vars,camelcase
const b_system = (() => {
  /* ENUMS */
  const GLOBAL = { HEADER_BODY_SCROLL: 120 }
  const CSS_CLASS = {
    HEADER_LIGHT: 'header-light',
    HEADER_TRANSPARENT: 'header-transparent',
    HEADER_FIXED: 'header-fixed',
    BTN_NARROW: 'btn-narrow',
  }
  const SELECTORS = {
    NAVBAR_NAV: '[data-bsystem="navbar-nav"]',
    NARROW_BUTTON_WRAPPER: '[data-bsystem="buttons-wrapper"] button:not(.btn.btn-only-icon)',
    STICKY: '[data-bsystem="sticky"]',
    HEADER_LIGHT: `.${CSS_CLASS.HEADER_LIGHT}`,
    HEADER_TRANSPARENT: `.${CSS_CLASS.HEADER_TRANSPARENT}`,
    HEADER_FIXED: `.${CSS_CLASS.HEADER_FIXED}`,
  }

  const EVENTS = {
    ON_HEADER_BECOMES_NARROWER: 'onHeaderBecomesNarrower',
    ON_TRANSPARENT_HEADER_CHANGE_BACKGROUND: 'onTransparentHeaderChangeBackground',
  }

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

  const system = {
    setBodyTopSpace: () => {
      const header = document.querySelector(`body > header${SELECTORS.HEADER_FIXED}:not(${SELECTORS.HEADER_TRANSPARENT})`)
      if (!header) { return }
      document.querySelector('body').style.paddingTop = `${header.clientHeight}px`
    },
    changeHeaderSizeOnScroll: () => {
      const headerList = document.querySelectorAll(SELECTORS.STICKY)

      if (!headerList) {
        return
      }
      if (headerList.length > 1) {
        throw new Error('There cannot be more than one header with the attribute data-bsystem="sticky" per page.')
      }
      const mainHeader = headerList[0]
      const onScrollOrResize = () => {
        if (window.scrollY > GLOBAL.HEADER_BODY_SCROLL && breakpoints.lg) {
          mainHeader.dispatchEvent(
            new CustomEvent(EVENTS.ON_HEADER_BECOMES_NARROWER, { detail: { isNarrow: true } }),
          )
          mainHeader.classList.add('header-narrow')
          return
        }

        if (window.scrollY < GLOBAL.HEADER_BODY_SCROLL && breakpoints.lg) {
          mainHeader.dispatchEvent(
            new CustomEvent(EVENTS.ON_HEADER_BECOMES_NARROWER, { detail: { isNarrow: false } }),
          )
          mainHeader.classList.remove('header-narrow')
        }
      }

      window.addEventListener('scroll', onScrollOrResize, { passive: true })
      window.addEventListener('resize', onScrollOrResize, { passive: true })
    },
    changeTransparentHeaderOnScroll: () => {
      const headerTransparent = document.querySelector(`${SELECTORS.HEADER_TRANSPARENT}${SELECTORS.HEADER_FIXED}`)
      if (!headerTransparent) {
        return
      }
      const onScroll = () => {
        if (window.scrollY >= GLOBAL.HEADER_BODY_SCROLL) {
          headerTransparent.classList.add(CSS_CLASS.HEADER_LIGHT)
          headerTransparent.dispatchEvent(new CustomEvent(
            EVENTS.ON_TRANSPARENT_HEADER_CHANGE_BACKGROUND,
            { detail: { isTransparent: false } },
          ))
          return
        }
        headerTransparent.classList.remove(CSS_CLASS.HEADER_LIGHT)
        headerTransparent.dispatchEvent(new CustomEvent(
          EVENTS.ON_TRANSPARENT_HEADER_CHANGE_BACKGROUND,
          { detail: { isTransparent: true } },
        ))
      }
      window.addEventListener('scroll', onScroll, { passive: true })
    },
    createHeaderNavDrawer: () => {
      const offCanvasList = document.querySelectorAll(`header .offcanvas${SELECTORS.NAVBAR_NAV}`)

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
    },
    makeHeaderButtonNarrow: () => {
      const header = document.querySelector(SELECTORS.STICKY)
      const buttons = document.querySelectorAll(`header${SELECTORS.STICKY} ${SELECTORS.NARROW_BUTTON_WRAPPER}`)

      if (!header || !buttons || buttons.length <= 0) {
        return
      }

      header.addEventListener(EVENTS.ON_HEADER_BECOMES_NARROWER, (event) => {
        buttons.forEach((button) => {
          if (event.detail.isNarrow) {
            button.classList.add(CSS_CLASS.BTN_NARROW)
            return
          }
          button.classList.remove(CSS_CLASS.BTN_NARROW)
        })
      })
    },
    initSwiper: () => {
      const swiperList = document.querySelectorAll('[data-bsystem="swiper"]')

      swiperList.forEach((swiper) => {
        const target = swiper.dataset.swiperTarget
        const effect = swiper.dataset.swiperEffect
        const nextEl = swiper.dataset.swiperNextEl
        const prevEl = swiper.dataset.swiperPrevEl

        if (!target) {
          throw new Error('A swiper element must have a data-swiper-target defined')
        }

        // eslint-disable-next-line no-undef,no-new
        new Swiper(`[data-swiper-target="${target}"]`, {
          effect,
          grabCursor: true,
          navigation: {
            nextEl: nextEl || '.swiper-button-next',
            prevEl: prevEl || '.swiper-button-prev',
          },
        })
      })
    },
  }

  system.setBodyTopSpace()
  system.changeHeaderSizeOnScroll()
  system.makeHeaderButtonNarrow()
  system.changeTransparentHeaderOnScroll()
  system.initSwiper()

  // Bootstrap functions
  function bootstrap() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl))
  }

  bootstrap()

  const exports = {}
  exports.$breakpoints = breakpoints
  exports.$EVENTS = EVENTS
  return exports
})()
