const GLOBAL = {HEADER_BODY_SCROLL: 120}
const CSS_CLASS = {
    HEADER_LIGHT: 'header-light',
    HEADER_TRANSPARENT: 'header-transparent',
    HEADER_FIXED: 'header-fixed',
    BTN_NARROW: 'btn-narrow',
}
const SELECTORS = {
    NARROW_BUTTON_WRAPPER: '[data-b-system-wrapper="buttons"] button:not(.btn.btn-only-icon)',
    STICKY: '[data-b-system-header-position="sticky"]',
    HEADER_LIGHT: `.${CSS_CLASS.HEADER_LIGHT}`,
    HEADER_TRANSPARENT: '[data-b-system-header="transparent"]',
    HEADER_FIXED: `.${CSS_CLASS.HEADER_FIXED}`,
    BODY_DARK: 'body[data-b-system-theme="dark"]',
}
const EVENTS = {
    ON_HEADER_BECOMES_NARROWER: 'onHeaderBecomesNarrower',
    ON_TRANSPARENT_HEADER_CHANGE_BACKGROUND: 'onTransparentHeaderChangeBackground',
    ON_MOBILE_NAV_TOGGLE: 'onMobileNavToggle'
}
const BREAKPOINTS = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
}

const breakpoints = (() => {
    const current = {}
    const onResize = () => {
        Object.entries(BREAKPOINTS)
            .forEach(([key, value]) => {
                current[key] = window.innerWidth >= value
            })
    }

    // eslint-disable-next-line no-undef
    window.addEventListener('resize', onResize, {passive: true})
    onResize()

    return current
})()
const system = {
    isNavActive: false,
    isTransparentChangedToLight: false,
    setBodyTopSpace: () => {
        const header = document.querySelector(`body > header${SELECTORS.HEADER_FIXED}:not(${SELECTORS.HEADER_TRANSPARENT})`)
        if (!header) {
            return
        }
        document.querySelector('body').style.paddingTop = `${header.clientHeight}px`
    },
    changeHeaderSizeOnScroll: () => {
        const headerList = document.querySelectorAll(SELECTORS.STICKY)

        if (!headerList) {
            return
        }
        if (headerList.length > 1) {
            throw new Error('There cannot be more than one header with the attribute data-b-system-header-position="sticky" per page.')
        }
        const mainHeader = headerList[0]
        const onScrollOrResize = () => {
            if (window.scrollY > GLOBAL.HEADER_BODY_SCROLL && breakpoints.lg) {
                mainHeader.dispatchEvent(
                    new CustomEvent(EVENTS.ON_HEADER_BECOMES_NARROWER, {detail: {isNarrow: true}}),
                )
                mainHeader.classList.add('header-narrow')
                return
            }

            if (window.scrollY < GLOBAL.HEADER_BODY_SCROLL && breakpoints.lg) {
                mainHeader.dispatchEvent(
                    new CustomEvent(EVENTS.ON_HEADER_BECOMES_NARROWER, {detail: {isNarrow: false}}),
                )
                mainHeader.classList.remove('header-narrow')
            }
        }

        window.addEventListener('scroll', onScrollOrResize, {passive: true})
        window.addEventListener('resize', onScrollOrResize, {passive: true})
    },
    changeTransparentHeaderOnScroll: () => {
        const headerTransparent = document.querySelector(`${SELECTORS.HEADER_TRANSPARENT}${SELECTORS.HEADER_FIXED}`)
        if (!headerTransparent) {
            return
        }
        let previousStatus = system.isTransparentChangedToLight
        const onScroll = () => {
            system.isTransparentChangedToLight = window.scrollY >= GLOBAL.HEADER_BODY_SCROLL

            if (system.isTransparentChangedToLight) {
                headerTransparent.classList.add(CSS_CLASS.HEADER_LIGHT)
            } else if(!system.isNavActive){
                headerTransparent.classList.remove(CSS_CLASS.HEADER_LIGHT)
            }

            const event = new CustomEvent(EVENTS.ON_TRANSPARENT_HEADER_CHANGE_BACKGROUND, {detail: {isTransparent: !system.isTransparentChangedToLight}})
            document.dispatchEvent(event)
        }
        window.addEventListener('scroll', onScroll, {passive: true})
        onScroll()
    },
    createHeaderNavDrawer: () => {
        // const offCanvasList = document.querySelectorAll(`header .offcanvas${SELECTORS.NAVBAR_NAV}`)
        //
        // if (!offCanvasList) {
        //     return
        // }
        //
        // offCanvasList.forEach((offCanvas) => {
        //     const nav = selector.findFromFather(offCanvas, 'header nav.navbar ul.navbar-nav')
        //     if (!nav) {
        //         throw new Error('There is no nav element in the header')
        //     }
        //
        //     const offCanvasBody = document.createElement('div')
        //     offCanvasBody.classList.add('offcanvas-body')
        //     offCanvasBody.append(nav.cloneNode(true))
        //     offCanvas.appendChild(offCanvasBody)
        // })

        const headerTransparent = document.querySelector(`${SELECTORS.HEADER_TRANSPARENT}${SELECTORS.HEADER_FIXED}`)
        const toggleButton = document.querySelector('header .navbar-toggler')
        const icon = document.querySelector('header .navbar-toggler > i')

        toggleButton.onclick = () => {
            system.isNavActive = !system.isNavActive
            const event = new CustomEvent(EVENTS.ON_MOBILE_NAV_TOGGLE, {detail: {isActive: system.isNavActive}})
            document.dispatchEvent(event)

            if (system.isNavActive) {
                icon.classList.remove('icon-menu')
                icon.classList.add('icon-blade')

                if (headerTransparent && !system.isTransparentChangedToLight) {
                    headerTransparent.classList.add(CSS_CLASS.HEADER_LIGHT)
                }

                return
            }
            icon.classList.remove('icon-blade')
            icon.classList.add('icon-menu')

            if (headerTransparent && !system.isTransparentChangedToLight) {
                headerTransparent.classList.remove(CSS_CLASS.HEADER_LIGHT)
            }
        }

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
    emailValidation: () => {
        const regx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        const validateEmail = (email) => email.match(regx)

        const inputs = document.querySelectorAll('input[data-b-system="validate-email"]')

        inputs.forEach((input) => {
            input.addEventListener('blur', () => {
                if (input.value === '' || validateEmail(input.value)) {
                    input.classList.remove('is-invalid')
                    return
                }
                input.classList.add('is-invalid')
            }, {passive: true})
        })
    },
    showHidePassword: () => {
        const inputPasswordList = document.querySelectorAll('input[type=password]')
        inputPasswordList.forEach((input) => {
            input.nextElementSibling.addEventListener('click', () => {
                if (input.type === 'password') {
                    input.setAttribute('type', 'text')
                    input.nextElementSibling.firstElementChild.classList.remove('icon-eye')
                    input.nextElementSibling.firstElementChild.classList.add('icon-blade')
                    return
                }
                input.nextElementSibling.firstElementChild.classList.remove('icon-blade')
                input.nextElementSibling.firstElementChild.classList.add('icon-eye')
                input.setAttribute('type', 'password')
            })
        })
    },
    addOffsetToCategoriesMenu: () => {
        const elements = document.getElementsByClassName('bs-categories-menu')
        const offset = 30;

        const onScroll = () => {
            Array.prototype.forEach.call(elements, (element) => {
                const hasHorizontalScrollbar = (element.scrollWidth - element.scrollLeft - offset) > element.clientWidth
                const parent = element.parentElement

                if (hasHorizontalScrollbar) {
                    if (!parent.classList.contains('offset')) {
                        parent.classList.add('offset')
                    }
                } else {
                    parent.classList.remove('offset')
                }
            })
        }

        Array.prototype.forEach.call(elements, (element) => {
            element.addEventListener('scroll', onScroll)
        })
        onScroll()
    },
    initSwiper: () => {
        const swiperList = document.querySelectorAll('[data-b-system="swiper"]')
        swiperList.forEach((swiper) => {
            const target = swiper.dataset.swiperTarget
            const effect = swiper.dataset.swiperEffect
            const nextEl = swiper.dataset.swiperNext
            const prevEl = swiper.dataset.swiperPrev
            const slidesPerView = swiper.dataset.swiperItemXs ?? swiper.dataset.swiperItems
            const slidesPerViewSm = swiper.dataset.swiperItemSm
            const slidesPerViewMd = swiper.dataset.swiperItemMd
            const slidesPerViewLg = swiper.dataset.swiperItemLg
            const slidesPerViewXl = swiper.dataset.swiperItemXl
            const slidesPerViewXxl = swiper.dataset.swiperItemXxl
            const loop = swiper.dataset.swiperLoop
            const space = swiper.dataset.swiperSpace

            if (!target) {
                throw new Error('A swiper element must have a data-swiper-target defined')
            }

            const config = {
                grabCursor: true,
                navigation: {
                    nextEl: nextEl || '.swiper-button-next',
                    prevEl: prevEl || '.swiper-button-prev',
                },
                spaceBetween: space ?? 24,
                slidesPerView,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    renderBullet: (index, className) => `<span class="${className}"></span>`,
                },
            }
            if (loop) {
                config.loop = true
                config.loopFillGroupWithBlank = true
            }


            if (slidesPerViewSm || slidesPerViewMd || slidesPerViewLg || slidesPerViewXl || slidesPerViewXxl) {
                if (slidesPerViewSm) {
                    config.breakpoints = {
                        ...config.breakpoints,
                        [BREAKPOINTS.sm]: {slidesPerView: slidesPerViewSm}
                    }
                }
                if (slidesPerViewMd) {
                    config.breakpoints = {
                        ...config.breakpoints,
                        [BREAKPOINTS.md]: {slidesPerView: slidesPerViewMd}
                    }
                }
                if (slidesPerViewLg) {
                    config.breakpoints = {
                        ...config.breakpoints,
                        [BREAKPOINTS.lg]: {slidesPerView: slidesPerViewLg}
                    }
                }
                if (slidesPerViewXl) {
                    config.breakpoints = {
                        ...config.breakpoints,
                        [BREAKPOINTS.xl]: {slidesPerView: slidesPerViewXl}
                    }
                }
                if (slidesPerViewXxl) {
                    config.breakpoints = {
                        ...config.breakpoints,
                        [BREAKPOINTS.xxl]: {slidesPerView: slidesPerViewXxl}
                    }
                }
            }

            // eslint-disable-next-line default-case
            switch (effect) {
                case 'cards':
                    config.effect = 'cards'
                    break
                case 'centered':
                    config.centeredSlides = true
                    break
                default:
                    break
            }
            // eslint-disable-next-line no-undef,no-new
            new Swiper(`[data-swiper-target="${target}"]`, {...config})
        })
    },
    darkModeSwitch: () => {
        const switchInput = document.querySelector('#dark-mode-switch')
        if (switchInput) {
            switchInput.checked = false
            switchInput.onclick = ($event) => {
                const isChecked = $event.target.checked
                const body = document.querySelector('body')
                if (isChecked) {
                    body.setAttribute('data-b-system-theme', 'dark')
                    return
                }
                body.removeAttribute('data-b-system-theme')
            }
        }
    },
    stickyBannerBottomPosition: () => {
        const banner = document.querySelector('#sticky-banner')
        if (!banner) {
            return
        }
        window.addEventListener('scroll', (evt) => {
            if (evt.target.scrollingElement.scrollTop > 100) {
                banner.style.bottom = `${32 / 16}rem`
            } else {
                banner.style.bottom = `${88 / 16}rem`
            }

        }, {passive: true})
    },
}
const initBootstrap = {
    initTooltip: () => {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl))
    },
    hideNavOnXlSize: () => {
        const headerTransparent = document.querySelector(`${SELECTORS.HEADER_TRANSPARENT}${SELECTORS.HEADER_FIXED}`)
        const querySelector = document.querySelector('#offcanvasNavbar')
        const offcanvas = new bootstrap.Offcanvas(querySelector)
        const icon = document.querySelector('header .navbar-toggler > i')

        window.addEventListener('resize', () => {
            if (b_system.$breakpoints.xl) {
                offcanvas.hide();
                system.isNavActive = false
                icon.classList.remove('icon-blade')
                icon.classList.add('icon-menu')

                if (headerTransparent && !system.isTransparentChangedToLight) {
                    headerTransparent.classList.remove(CSS_CLASS.HEADER_LIGHT)
                }

                const event = new CustomEvent(EVENTS.ON_MOBILE_NAV_TOGGLE, {detail: {isActive: system.isNavActive}})
                document.dispatchEvent(event)
            }
        })
    }
}

const b_system = (() => {

    // System
    system.setBodyTopSpace()
    system.changeHeaderSizeOnScroll()
    system.makeHeaderButtonNarrow()
    system.changeTransparentHeaderOnScroll()
    system.emailValidation()
    system.showHidePassword()
    system.addOffsetToCategoriesMenu()
    system.initSwiper()
    system.darkModeSwitch()
    system.stickyBannerBottomPosition()
    system.createHeaderNavDrawer()

    // Bootstrap functions
    initBootstrap.initTooltip()
    initBootstrap.hideNavOnXlSize()


    // Exports
    return {
        $breakpoints: breakpoints,
        $EVENTS: EVENTS
    }
})()
