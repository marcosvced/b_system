const canSearch = () => {
  const wrapper = document.querySelector('.header-wrapper.header-fixed');
  if (!wrapper) {
    return;
  }
  const searchButton = document.querySelector('#searcher-button');
  searchButton.addEventListener('click', () => {
    wrapper.firstElementChild.classList.add('show');
  });

  const closeButton = document.querySelector('.collapsed-content #close-searcher');
  closeButton.addEventListener('click', () => {
    wrapper.firstElementChild.classList.remove('show');
  });
};

const transformHeader = (purchaseButtonType) => {
  const img = document.querySelector('header img.logo');
  const purchaseButton = document.querySelector('header button.btn.btn-fit');

  let isNavActive = false;
  let isHeaderTransparent = true;

  document.addEventListener(b_system.$EVENTS.ON_MOBILE_NAV_TOGGLE, (evt) => {
    const isDark = !!document.querySelector('body[data-b-system-theme="dark"]');
    const { detail: nav } = evt;
    isNavActive = nav.isActive;
    if (isNavActive) {
      if (!isDark) {
        img.src = '/assets/img/logo-dark.svg';
      }
    } else {
      if (isHeaderTransparent) {
        img.src = '/assets/img/logo-light.svg';
      }
    }
  });
  document.addEventListener(b_system.$EVENTS.ON_TRANSPARENT_HEADER_CHANGE_BACKGROUND, (evt) => {
    const { detail: header } = evt;
    const isDark = !!document.querySelector('body[data-b-system-theme="dark"]');

    isHeaderTransparent = header.isTransparent;

    if (header.isTransparent && !isNavActive) {
      img.src = '/assets/img/logo-light.svg';
      if (purchaseButtonType !== 'primary') {
        purchaseButton.classList.remove('btn-primary');
        purchaseButton.classList.add('btn-glass');
      }
    } else {

      if (!isDark) {
        img.src = '/assets/img/logo-dark.svg';
      }
      if (purchaseButtonType !== 'primary') {
        purchaseButton.classList.remove('btn-glass');
        purchaseButton.classList.add('btn-primary');
      }
    }
  });
};
