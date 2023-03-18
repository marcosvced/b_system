const loadAllPages = (routes) => {
  routes.forEach((route) => {
    window.open(`http://${window.location.host}${route}`, '_blank');
  });
};

// eslint-disable-next-line no-unused-vars
function loadPages() {
  const {
    demos,
    quickStart,
  } = window;
  loadAllPages([
    ...quickStart,
    ...demos,
  ]);
}
