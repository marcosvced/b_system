const loadAllPages = (routes) => {
    console.log(routes)
    routes.forEach((route) => {
        console.log(route)
        window.open(`http://${window.location.host}${route}`, '_blank')
    })
}

function loadPages() {
    let quickStart = window.quickStart

    let demos = window.demos
    loadAllPages([
        ...quickStart,
        ...demos
    ])
}
