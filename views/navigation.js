const { QUICK_START } = require('./quick_start/routePaths')
const { DEMOS } = require('./demos/routePaths')

const navigation = [
  {
    label: 'Demos',
    key: 'demos',
    entries: [
      {
        label: 'Home',
        href: DEMOS.HOME,
      },
      {
        label: 'Home 2',
        href: DEMOS.HOME2,
      },
    ],
  },
  {
    label: 'Pages',
    key: 'pages',
  },
  {
    label: 'Modules',
    key: 'modules',
    entries: [
      {
        group: [
          {
            label: 'Basics',
            entries: [
              {
                href: QUICK_START.HEADERS,
                label: 'Headers',
              },
              {
                href: QUICK_START.BASIC_CONTENTS,
                label: 'Basic Contents',
              },
              {
                href: QUICK_START.CTA,
                label: 'CTA',
              },
              {
                href: QUICK_START.SEARCHERS,
                label: 'Searchers',
              },
              {
                href: QUICK_START.CATEGORIES_MENU,
                label: 'Menus',
              },
              {
                href: QUICK_START.ICONS_SOCIAL,
                label: 'Icons Social',
              },
              {
                href: QUICK_START.ICON_DESCRIPTION,
                label: 'Icon + description'
              },
              {
                href: QUICK_START.ICON_SERVICES,
                label: 'Icon Services',
              },
              {
                href: QUICK_START.STATISTICS,
                label: 'Statistics',
              },
              {
                href: QUICK_START.FAQS,
                label: 'FAQs',
              },
              {
                href: QUICK_START.CONTACT_BAR,
                label: 'Contact Bar',
              },
              {
                href: QUICK_START.FEATURED_CONTENTS,
                label: 'Featured Contents',
              },
            ]
          },
        ]
      },
      {
        group: [
          {
            label: 'Marquees',
            entries: [
              {
                href: QUICK_START.MARQUEES.BASIC,
                label: 'Basic',
              },
              {
                href: QUICK_START.MARQUEES.STANDAR,
                label: 'Standard',
              },
              {
                href: QUICK_START.MARQUEES.CTA,
                label: 'With CTA',
              },
              {
                href: QUICK_START.MARQUEES.IMAGE,
                label: 'Image',
              },
              {
                href: QUICK_START.MARQUEES.TEXTIMAGE,
                label: 'Text and image',
              },
              {
                href: QUICK_START.MARQUEES.ILLUSTRATION,
                label: 'Illustration',
              },
              {
                href: QUICK_START.MARQUEES.EXTENDED,
                label: 'Extended',
              },
            ]
          },
          {
            label: 'Cards',
            entries: [
              {
                href: QUICK_START.FEATURED_CARDS,
                label: 'Featured',
              },
              {
                href: QUICK_START.PRODUCT_GRIDS,
                label: 'Product',
              },
            ]
          },
        ]
      },
      {
        group: [
          {
            label: 'Grids',
            entries: [
              {
                href: QUICK_START.BASIC_GRID,
                label: 'Basic',
              },
              {
                href: QUICK_START.SERVICE_GRIDS,
                label: 'Service',
              },
              {
                href: QUICK_START.TEAM_GRIDS,
                label: 'Team',
              },
            ]
          },
          {
            label: 'Carrousels',
            entries: [
              {
                href: QUICK_START.BUSINESS_CASES,
                label: 'Business Cases',
              },
              {
                href: QUICK_START.SERVICES,
                label: 'Service',
              },
              {
                href: QUICK_START.BRANDS,
                label: 'Brands',
              },
              {
                href: QUICK_START.TESTIMONIALS,
                label: 'Testimonials',
              },
              {
                href: QUICK_START.PRICES,
                label: 'Prices',
              },
            ]
          },
        ]
      },
      {
        group: [
          {
            label: 'Portfolio',
            entries: [
              {
                href: QUICK_START.PORTFOLIOS.BASIC,
                label: 'Portfolio Basic',
              },
              {
                href: QUICK_START.PORTFOLIOS.DECOMPOSED,
                label: 'Portfolio Decomposed',
              },
            ]
          },
          {
            label: 'Forms',
            entries: [
              {
                href: QUICK_START.LOGINS,
                label: 'Login',
              },
              {
                href: QUICK_START.CONTACTS,
                label: 'Contact',
              },
            ]
          },
          {
            label: 'Footers',
            entries: [
              {
                href: QUICK_START.FOOTERS.BASIC,
                label: 'Basic',
              },
              {
                href: QUICK_START.FOOTERS.STANDARD,
                label: 'Standard',
              },
              {
                href: QUICK_START.FOOTERS.CORPORATE,
                label: 'Corporate',
              },
              {
                href: QUICK_START.FOOTERS.NEWSLETTER,
                label: 'Newsletter',
              },
            ]
          },
        ]
      }
    ],
  },
  {
    label: 'Components',
    key: 'components',
    entries: [
      {
        href: QUICK_START.BUTTONS,
        label: 'Buttons',
      },
      {
        href: QUICK_START.FORMS,
        label: 'Forms',
      },
      {
        href: QUICK_START.INTERACTION,
        label: 'Interaction',
      },
      {
        href: QUICK_START.CARDS,
        label: 'Cards',
      },
      {
        href: QUICK_START.PRODUCT_CARDS,
        label: 'Product Cards',
      },
      {
        href: QUICK_START.LINKS,
        label: 'Links',
      },
      {
        href: QUICK_START.GRID_CELLS,
        label: 'Grid cells',
      },
      {
        href: QUICK_START.ICON_DESCRIPTION_COMPONENT,
        label: 'Icon + description',
      },
      {
        href: QUICK_START.ACCORDIONS,
        label: 'Accordions',
      },
      {
        href: QUICK_START.ALERTS,
        label: 'Alerts',
      },
      {
        href: QUICK_START.ICONS,
        label: 'Icons',
      },
      {
        href: QUICK_START.FOOTERS.BASIC,
        label: 'Footers',
      },
      {
        href: QUICK_START.TEXTS,
        label: 'Texts',
      },
      {
        href: QUICK_START.ILLUSTRATIONS,
        label: 'Illustrations',
      },
      {
        href: QUICK_START.MICROILLUSTRATIONS,
        label: 'Microillustrations',
      },
      {
        href: QUICK_START.SCENES,
        label: 'Scenes',
      },

    ],
  },
  {
    label: 'Transitions',
    key: 'transitions',
  },
]
module.exports = navigation
