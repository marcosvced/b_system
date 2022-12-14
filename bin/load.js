const loadAllPages = (routes) => {
    console.log(routes)
    routes.forEach((route) => {
        console.log(route)
        window.open(`http://${window.location.host}${route}`, '_blank')
    })
}

function loadPages() {
    let quickStart = {
        "ROUTE_NAME": "quick_start",
        "HOME": "/home",
        "HEADERS": "/modules/headers",
        "FEATURED_CARDS": "/modules/featureCards",
        "STATISTICS": "/modules/statistics",
        "CATEGORIES_MENU": "/modules/categories-menu",
        "SERVICE_GRIDS": "/modules/serviceGrids",
        "TEAM_GRIDS": "/modules/teamGrids",
        "CONTACTS": "/modules/contacts",
        "SERVICES": "/modules/services",
        "FOOTERS": {
            "BASIC": "/modules/footers/basic",
            "STANDARD": "/modules/footers/standard",
            "CORPORATE": "/modules/footers/corporate"
        },
        "ICON_DESCRIPTION": "/modules/iconsDescription",
        "ICONS_SOCIAL": "/modules/iconSocial",
        "CTA": "/modules/cta",
        "CONTACT_BAR": "/modules/contactBar",
        "MARQUEES": {
            "BASIC": "/modules/marquees/basic",
            "CTA": "/modules/marquees/cta",
            "EXTENDED": "/modules/marquees/extended",
            "ILLUSTRATION": "/modules/marquees/illustration",
            "IMAGE": "/modules/marquees/image",
            "STANDAR": "/modules/marquees/standar",
            "TEXTIMAGE": "/modules/marquees/textImage"
        },
        "BASIC_CONTENTS": "/modules/basicContents",
        "FAQS": "/modules/faqs",
        "ICON_SERVICES": "/modules/iconServices",
        "BUSINESS_CASES": "/modules/businessCases",
        "PORTFOLIOS": {
            "BASIC": "/modules/portfolios/basic",
            "DECOMPOSED": "/modules/portfolio/decomposed"
        },
        "LOGINS": "/modules/login",
        "BRANDS": "/modules/brands",
        "BASIC_GRID": "/modules/basicGrids",
        "TESTIMONIALS": "/modules/testimonials",
        "PRODUCT_GRIDS": "/modules/productCards",
        "SEARCHERS": "/modules/searchers",
        "PRICES": "/modules/prices",
        "FEATURED_CONTENTS": "/modules/featuredContents",
        "DIGITAL_PRODUCTS": "/modules/digitalProducts",
        "BUTTONS": "/components/buttons",
        "ALERTS": "/components/alerts",
        "ICONS": "/components/icons",
        "LINKS": "/components/links",
        "TEXTS": "/components/texts",
        "CARDS": "/components/cards",
        "PRODUCT_CARDS": "/components/productCards",
        "INTERACTION": "/components/interaction",
        "GRID_CELLS": "/components/gridCells",
        "FORMS": "/components/forms",
        "MICROILLUSTRATIONS": "/components/microillustrations",
        "ILLUSTRATIONS": "/components/illustrations",
        "SCENES": "/components/scenes",
        "ICON_DESCRIPTION_COMPONENT": "/components/iconsDescription",
        "ACCORDIONS": "/components/accordions"
    }
    delete quickStart.ROUTE_NAME
    delete quickStart.HOME
    quickStart = Object.values(quickStart).map((value) => {
        if (typeof value !== 'string') {
            return Object.values(value)
        }
        return value
    }).flat(1)

    let demos = {
        "ROUTE_NAME": "demos",
        "STARTUP": "/demos/startup",
        "HOME2": "/demos/home-cta",
        "BRANDING": "/demos/branding",
        "FINANCIAL": "/demos/financial"
    }
    delete demos.ROUTE_NAME
    demos = Object.values(demos).map((value) => {
        if (typeof value !== 'string') {
            return Object.values(value)
        }
        return value
    }).flat(1)
    loadAllPages([
        ...quickStart,
        ...demos
    ])
}
