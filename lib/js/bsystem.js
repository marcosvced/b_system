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
    activeRoute: () => {
        const navItems = document.querySelectorAll('header .navbar-nav .nav-item a:not(.nav-link)')
        const currentLocation = window.location.href
        navItems.forEach((navItem) => {
            const link = navItem.href
            if (link && currentLocation.includes(link)) {
                navItem.classList.add('active')
            } else {
                navItem.classList.remove('active')
            }
        })

        const dropDownMultilevel = document.querySelectorAll('header .navbar-nav .dropdown-item-multilevel')
        dropDownMultilevel.forEach((dm) => {
            const submenuItem = dm.querySelectorAll('.submenu-item')
            const links = []
            submenuItem.forEach((link) => links.push(link.href))

            if (links.includes(currentLocation)) {
                dm.classList.add('active')
            } else {
                dm.classList.remove('active')
            }

        })

        const menuItems = document.querySelectorAll('.offcanvas-body .navbar-nav .nav-item a.nav-link')
        menuItems.forEach((menuItem) => {
            const link = menuItem.href
            const navItem = menuItem.closest('.nav-item')
            const headerKey = navItem.children[0]
            const wrapper = navItem.children[1]

            const parentNavItem = navItem.parentElement.parentElement.parentElement.parentElement
            const header = parentNavItem.children[0]
            const parentWrapper = parentNavItem.children[1]

            if (link && currentLocation.includes(link)) {
                menuItem.classList.add('active')

                // header.classList.remove('collapsed')
                header.classList.add('active')
                // parentWrapper.classList.add('show')

                // headerKey.classList.remove('collapsed')
                headerKey.classList.add('active')
                // wrapper.classList.add('show')

            } else {
                menuItem.classList.remove('active')
            }
        })
    },
    setBodyTopSpace: () => {
        const fontSizeBase = window.getComputedStyle(document.querySelector('html'), null)
            .getPropertyValue('font-size')
        const customSpace = document.querySelector('body').dataset.bSystemTopSpace
        const header = document.querySelector(`body > header${SELECTORS.HEADER_FIXED}:not(${SELECTORS.HEADER_TRANSPARENT})`)
        const contactBar = document.querySelector(`body > div.contact-bar-top`)
        const searcher = document.querySelector(`body > div.searcher.module`)
        const navDrawer = document.querySelector('body > .offcanvas')
        let topSpace = '0'

        if (!header || 'none' === customSpace) {
            return
        }

        if (customSpace && 'number' === typeof Number.parseInt(customSpace)) {
            topSpace = `${Number.parseInt(customSpace) / Number.parseInt(fontSizeBase)}rem`
        } else {
            let clientHeight = header.clientHeight
            if(contactBar) {
                clientHeight = clientHeight + contactBar.clientHeight
            }
            if(searcher) {
                clientHeight = clientHeight + searcher.clientHeight
            }
            topSpace = `${clientHeight / Number.parseInt(fontSizeBase)}rem`
        }

        document.querySelector('body').style.paddingTop = topSpace

        if (contactBar || searcher) {
            let top = 0
            if(contactBar) {
                const size = window.getComputedStyle(contactBar, null)
                    .getPropertyValue('border-bottom-width')
                top = (contactBar.clientHeight + (size ? Number.parseInt(size) : 0)) / Number.parseInt(fontSizeBase)
            }
            if(searcher) {
                top = (contactBar.clientHeight + top) / Number.parseInt(fontSizeBase)
            }

            header.style = `--top: ${top}rem`
        }

        if (navDrawer) {
            navDrawer.style = `--s-min-top: ${topSpace};`
        }
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
            } else if (!system.isNavActive) {
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

        if (!toggleButton) {
            return
        }

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
        const elements = document.getElementsByClassName('categories-menu')
        const offset = 30

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
            const allowTouchMove = swiper.dataset.swiperDraggable ?? false

            if (!target) {
                throw new Error('A swiper element must have a data-swiper-target defined')
            }

            const config = {
                allowTouchMove: true,
                grabCursor: true,
                navigation: {
                    nextEl: nextEl || '.swiper-button-next',
                    prevEl: prevEl || '.swiper-button-prev',
                },
                spaceBetween: space ?? 24,
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


            config.breakpoints = {
                [BREAKPOINTS.sm]: {
                    ...config,
                    slidesPerView: slidesPerViewSm ?? slidesPerView
                },
                [BREAKPOINTS.md]: {
                    ...config,
                    slidesPerView: slidesPerViewMd ?? slidesPerViewSm ?? slidesPerView
                },
                [BREAKPOINTS.lg]: {
                    ...config,
                    slidesPerView: slidesPerViewLg ?? slidesPerViewMd ?? slidesPerViewSm ?? slidesPerView
                },
                [BREAKPOINTS.xl]: {
                    ...config,
                    grabCursor: false,
                    allowTouchMove: false,
                    slidesPerView: slidesPerViewXl ?? slidesPerViewLg ?? slidesPerViewMd ?? slidesPerViewSm ?? slidesPerView
                },
                [BREAKPOINTS.xxl]: {
                    ...config,
                    grabCursor: false,
                    allowTouchMove: false,
                    slidesPerView: slidesPerViewXxl ?? slidesPerViewXl ?? slidesPerViewLg ?? slidesPerViewMd ?? slidesPerViewSm ?? slidesPerView
                }
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
                switchInput.checked = false
                if (isChecked) {
                    window.location.replace(`${window.location.href}?theme=dark`)
                    return
                }
                window.location.replace(window.location.href.replace('?theme=dark', ''))
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
    dropdownMultilevel: () => {
        document.querySelectorAll('.dropdown-menu span')
            .forEach(function (element) {
                element.parentElement.addEventListener('mouseover', function (e) {
                    const minHeight = element.parentElement.parentElement.clientHeight
                    const left = element.parentElement.parentElement.clientWidth / 2
                    let nextEl = this.children[0].nextElementSibling
                    if (nextEl && nextEl.classList.contains('multilevel')) {
                        // prevent opening link if link needs to open dropdown
                        e.preventDefault()
                        nextEl.style = `display: block; --min-height: ${minHeight}px; --left: ${left - 1}px;`
                        if (nextEl.getBoundingClientRect().right >= window.scrollX + window.innerWidth) {
                            nextEl.classList.add('show-left')
                        }
                    }

                })
                element.parentElement.addEventListener('mouseleave', function (e) {
                    let nextEl = this.children[0].nextElementSibling
                    if (nextEl && nextEl.classList.contains('multilevel')) {
                        // prevent opening link if link needs to open dropdown
                        e.preventDefault()
                        nextEl.style = 'display: none;'
                        nextEl.classList.remove('show-left')
                    }
                })
            })
    },
    setDarkModeByQueryParam: () => {
        const theme = new URLSearchParams(window.location.search).get('theme')
        if (theme) {
            document.querySelector('body')
                .removeAttribute('data-b-system-theme')
            document.querySelector('body')
                .setAttribute('data-b-system-theme', theme)
        }

        const switchInput = document.querySelector('#dark-mode-switch')
        if (switchInput) {
            switchInput.checked = 'dark' === theme
        }
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
                offcanvas.hide()
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
    },
    dropdowns: () => {
        const dropdownElementList = [].slice.call(document.querySelectorAll('[data-bs-toggle="dropdown"]'))
        const dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
            return new bootstrap.Dropdown(dropdownToggleEl)
        })
        document.querySelectorAll('[data-bs-toggle="dropdown"]')
            .forEach((dropdown) => {
                const instance = bootstrap.Dropdown.getInstance(dropdown)
                dropdown.parentElement.addEventListener('mouseover', () => {
                    document.querySelectorAll('[data-bs-toggle="dropdown"]')
                        .forEach((element) => bootstrap.Dropdown.getInstance(element)
                            .hide())
                    instance.show()
                })
                dropdown.parentElement.addEventListener('mouseleave', () => {
                    document.querySelectorAll('[data-bs-toggle="dropdown"]')
                        .forEach((element) => bootstrap.Dropdown.getInstance(element)
                            .hide())
                    instance.hide()
                })
            })
    }
}

const b_system = (() => {

    // System
    system.setBodyTopSpace()
    window.addEventListener('resize', () => setTimeout(() => system.setBodyTopSpace(), 350), {passive: true})

    system.activeRoute()
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
    system.dropdownMultilevel()
    system.setDarkModeByQueryParam()

    // Bootstrap functions
    initBootstrap.initTooltip()
    initBootstrap.hideNavOnXlSize()
    initBootstrap.dropdowns()

    // Exports
    return {
        $breakpoints: breakpoints,
        $EVENTS: EVENTS,
        loadAllPages: () => loadAllPages()
    }
})()
