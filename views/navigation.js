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
        href: QUICK_START.CATEGORIES_MENU,
        label: 'Menus',
      },
      {
        href: QUICK_START.HEADERS,
        label: 'Headers',
      },
      {
        href: QUICK_START.SERVICE_GRIDS,
        label: 'Service grid',
      },
      {
        href: QUICK_START.TEAM_GRIDS,
        label: 'Team grids',
      },
      {
        href: QUICK_START.ICONS_SOCIAL,
        label: 'Icons Social',
      },
      {
        href: '#',
        label: 'Forms',
      },
      {
        href: QUICK_START.ICON_DESCRIPTION,
        label: 'Icon + description'
      },
      {
        href: QUICK_START.FEATURED_CARDS,
        label: 'Featured Cards',
      },
      {
        href: QUICK_START.FAQS,
        label: 'FAQs',
      },
      {
        href: QUICK_START.ICON_SERVICES,
        label: 'Icon Services',
      },
      {
        href: QUICK_START.FEATURED_CARDS,
        label: 'Featured Cards',
      },
      {
        href: QUICK_START.STATISTICS,
        label: 'Statistics',
      },
      {
        href: QUICK_START.BUSINESS_CASES,
        label: 'Business Cases',
      },
      {
        href: QUICK_START.CONTACTS,
        label: 'Contact',
      },
      {
        href: QUICK_START.SERVICES,
        label: 'Service',
      },
      {
        href: QUICK_START.FOOTERS.BASIC,
        label: 'Footers',
      },
      {
        href: QUICK_START.FOOTERS.STANDARD,
        label: 'Footers Standard',
      },
      {
        href: QUICK_START.FOOTERS.CORPORATE,
        label: 'Footers Corporate',
      },
      {
        href: QUICK_START.FOOTERS.NEWSLETTER,
        label: 'Footers Newsletter',
      },
      {
        href: QUICK_START.CTA,
        label: 'CTA',
      },
      {
        href: QUICK_START.CONTACT_BAR,
        label: 'Contact Bar',
      },
      {
        href: QUICK_START.BASIC_CONTENTS,
        label: 'Basic Contents',
      },
      {
        href: QUICK_START.MARQUEES.BASIC,
        label: 'Marquee',
      },
      {
        href: QUICK_START.MARQUEES.CTA,
        label: 'Marquee cta',
      },
      {
        href: QUICK_START.MARQUEES.EXTENDED,
        label: 'Marquee extended',
      },
      {
        href: QUICK_START.MARQUEES.ILLUSTRATION,
        label: 'Marquee illustration',
      },
      {
        href: QUICK_START.MARQUEES.IMAGE,
        label: 'Marquee image',
      },
      {
        href: QUICK_START.MARQUEES.STANDAR,
        label: 'Marquee standar',
      },
      {
        href: QUICK_START.MARQUEES.TEXTIMAGE,
        label: 'Marquee textimage',
      },
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
        href: '#',
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
