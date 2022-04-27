const { QUICK_START } = require('./routePaths')

const navigation = [
  {
    label: 'Demos',
    key: 'demos',
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
        href: '#',
        label: 'Menus',
      },
      {
        href: QUICK_START.HEADERS,
        label: 'Headers',
      },
      {
        href: '#',
        label: 'Contents',
      },
      {
        href: '#',
        label: 'Grids',
      },
      {
        href: '#',
        label: 'Cards',
      },
      {
        href: '#',
        label: 'Forms',
      },
      {
        href: QUICK_START.FOOTERS.BASIC,
        label: 'Footers',
      },
      {
        href: QUICK_START.FOOTERS.ESTANDAR,
        label: 'Footers Estandar',
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
        href: QUICK_START.BASIC_CONTENTS,
        label: 'Basic Contents',
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
        href: QUICK_START.GRIDCELLS,
        label: 'Grid cells',
      },
      {
        href: '#',
        label: 'Icon + description',
      },
      {
        href: '#',
        label: 'Accordions',
      },
      {
        href: '#',
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
    ],
  },
  {
    label: 'Transitions',
    key: 'transitions',
  },
]
module.exports = navigation
