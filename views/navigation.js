const {QUICK_START} = require('./quick_start/routePaths')
const {DEMOS, PAGES} = require('./demos/routePaths')

const navigation = [
    {
        label: 'Demos',
        key: 'demos',
        display: 'grid',
        repeat: '2',
        entries: [
            {
                group: [
                    {
                        label: 'Standar demos',
                        entries: [
                            {
                                label: 'Startup',
                                href: DEMOS.STARTUP,
                            },
                            {
                                label: 'Design Studio',
                                href: DEMOS.HOME2,
                            },
                            {
                                label: 'Branding Agency',
                                href: DEMOS.BRANDING,
                            },
                            {
                                label: 'Marketing Agency',
                                href: '#',
                            },
                            {
                                label: 'Creative Studio',
                                href: '#',
                            },
                            {
                                label: 'Freelance',
                                href: '#',
                            },
                            {
                                label: 'Development Studio',
                                href: '#',
                            },
                            {
                                label: 'Corporate',
                                href: DEMOS.FINANCIAL,
                            },
                            {
                                label: 'Creative Agency',
                                href: '#',
                            },
                        ]
                    }
                ],
            },
            {
                group: [
                    {
                        label: 'Niche demos',
                        entries: [
                            {
                                label: 'Digital Product',
                                href: '#',
                            },
                            {
                                label: 'Modern Shop',
                                href: '#',
                            },
                            {
                                label: 'Classic Shop',
                                href: '#',
                            },
                            {
                                label: 'Legal',
                                href: '#',
                            },
                            {
                                label: 'Furniture',
                                href: '#',
                            },
                            {
                                label: 'Architecture',
                                href: '#',
                            },
                            {
                                label: 'Restaurant',
                                href: '#',
                            },
                            {
                                label: 'Fitness',
                                href: '#',
                            },
                            {
                                label: 'Portfolio',
                                href: '#',
                            },
                        ]
                    }
                ]
            }
        ],
    },
    {
        label: 'Pages',
        key: 'pages',
        display: 'multilevel',
        entries: [
            {
                label: 'About',
                entries: [
                    {
                        href: PAGES.ABOUT_US,
                        label: 'About Us',
                    },
                    {
                        href: PAGES.ABOUT_ME,
                        label: 'About Me',
                    },
                    {
                        href: PAGES.ABOUT_B_SYSTEM,
                        label: 'About B_System',
                    },
                    {
                        href: PAGES.HOW_WE_WORK,
                        label: 'How we work',
                    },
                ]
            },
            {
                label: 'Services',
                entries: [
                    {
                        href: PAGES.OUR_SERVICES,
                        label: 'Our services',
                    },
                    {
                        href: PAGES.WHAT_WE_OFFER,
                        label: 'What we offer',
                    }
                ]
            },
            {
                label: 'Our work',
                entries: [
                    {
                        href: PAGES.PORTFOLIO_CLASSIC_GRID,
                        label: 'Portfolio classic grid',
                    },
                    {
                        href: PAGES.PORTFOLIO_CLASSIC_WIDE,
                        label: 'Portfolio classic wide',
                    },
                    {
                        href: PAGES.PORTFOLIO_GALLERY_WIDE,
                        label: 'Portfolio gallery wide',
                    },
                    {
                        href: PAGES.PORTFOLIO_MASONRY,
                        label: 'Portfolio masonry',
                    },
                    {
                        href: PAGES.PORTFOLIO_MASONRY_PATH,
                        label: 'Portfolio masonry path',
                    },
                    {
                        href: PAGES.PORTFOLIO_PATTERN,
                        label: 'Portfolio pattern',
                    },
                    {
                        href: PAGES.SERVICES_PORTFOLIO,
                        label: 'Services portfolio',
                    }
                ]
            },
            {
                label: 'Our team',
                entries: [
                    {
                        href: PAGES.TEAM_CLASSIC,
                        label: 'Team classic',
                    },
                    {
                        href: PAGES.TEAM_MODERN,
                        label: 'Team modern',
                    }
                ]
            },
            {
                label: 'Product',
                entries: [
                    {
                        href: PAGES.PRODUCT_CLASSIC,
                        label: 'Product classic',
                    },
                    {
                        href: PAGES.PRODUCT_MODERN,
                        label: 'Product modern',
                    },
                ]
            },
            {
                label: 'Customer',
                entries: [
                    {
                        href: PAGES.CUSTOMER_SUPPORT,
                        label: 'Customer Support',
                    },
                    {
                        href: PAGES.TESTIMONIALS,
                        label: 'Testimonials',
                    },
                ]
            },
            {
                label: 'Contact',
                entries: [
                    {
                        href: PAGES.CONTACT_CLASSIC,
                        label: 'Contact classic',
                    },
                    {
                        href: PAGES.PRODUCT_PACKS,
                        label: 'Product packs',
                    },
                ]
            },

        ]
    },
    {
        label: 'Modules',
        key: 'modules',
        display: 'multilevel',
        entries: [
            {
                label: 'Menus',
                entries: [
                    {
                        href: QUICK_START.HEADERS,
                        label: 'Header menus',
                    },
                    {
                        href: QUICK_START.CATEGORIES_MENU,
                        label: 'Categories menu',
                    },
                    {
                        href: QUICK_START.CONTACT_BAR,
                        label: 'Contact menu',
                    },
                ]
            },
            {
                label: 'Headers',
                entries: [
                    {
                        href: QUICK_START.MARQUEES.BASIC,
                        label: 'Marquee basic',
                    },
                    {
                        href: QUICK_START.MARQUEES.STANDAR,
                        label: 'Marquee standard',
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
                        href: QUICK_START.MARQUEES.CTA,
                        label: 'Marquee text',
                    },
                    {
                        href: QUICK_START.MARQUEES.TEXTIMAGE,
                        label: 'Marquee text + image',
                    },
                ]
            },
            {
                label: 'Content',
                entries: [
                    {
                        href: QUICK_START.BASIC_CONTENTS,
                        label: 'Basic Content',
                    },
                    {
                        href: QUICK_START.BUSINESS_CASES,
                        label: 'Business Cases',
                    },
                    {
                        href: QUICK_START.ICON_DESCRIPTION,
                        label: 'Icon description'
                    },
                    {
                        href: QUICK_START.ICON_SERVICES,
                        label: 'Services',
                    },
                    {
                        href: QUICK_START.ICONS_SOCIAL,
                        label: 'Social module',
                    },
                    {
                        href: QUICK_START.CTA,
                        label: 'Call to action',
                    },
                    {
                        href: QUICK_START.FAQS,
                        label: 'FAQs',
                    },
                    {
                        href: QUICK_START.STATISTICS,
                        label: 'Statistics',
                    },
                    {
                        href: QUICK_START.FEATURED_CONTENTS,
                        label: 'Featured content',
                    },
                    {
                        href: QUICK_START.BRANDS,
                        label: 'Brands',
                    },
                ]
            },
            {
                label: 'Grids',
                entries: [
                    {
                        href: QUICK_START.BASIC_GRID,
                        label: 'Basic grid',
                    },
                    {
                        href: QUICK_START.TEAM_GRIDS,
                        label: 'Team grid',
                    },
                    {
                        href: QUICK_START.SERVICE_GRIDS,
                        label: 'Service grid',
                    },
                    {
                        href: QUICK_START.PORTFOLIOS.BASIC,
                        label: 'Portfolio grid',
                    },
                    {
                        href: QUICK_START.PORTFOLIOS.DECOMPOSED,
                        label: 'Portfolio deconstructed',
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
                        href: QUICK_START.SERVICES,
                        label: 'Services',
                    },
                    {
                        href: QUICK_START.PRODUCT_GRIDS,
                        label: 'Product',
                    },
                    {
                        href: QUICK_START.TESTIMONIALS,
                        label: 'Testimonials',
                    },
                    {
                        href: QUICK_START.PRICES,
                        label: 'Prices',
                    },
                    {
                        href: QUICK_START.DIGITAL_PRODUCTS,
                        label: 'Digital Products',
                    },
                ]
            },
            {
                label: 'Forms',
                entries: [
                    {
                        href: QUICK_START.CONTACTS,
                        label: 'Contact',
                    },
                    {
                        href: QUICK_START.LOGINS,
                        label: 'Login',
                    },
                    {
                        href: QUICK_START.SEARCHERS,
                        label: 'Searchers',
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
                        href: QUICK_START.FOOTERS.NEWSLETTER,
                        label: 'Newsletter',
                    },
                    {
                        href: QUICK_START.FOOTERS.CORPORATE,
                        label: 'Corporate',
                    },
                ]
            },
        ],
    },
    {
        label: 'Components',
        key: 'components',
        display: 'grid',
        repeat: 2,
        entries: [
            {
                group: [
                    {
                        label: 'Components',
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
                        ]
                    }
                ]
            },
            {
                group: [
                    {
                        label: 'Brand elements',
                        entries: [
                            {
                                href: QUICK_START.ILLUSTRATIONS,
                                label: 'Illustrations',
                            },
                            {
                                href: QUICK_START.SCENES,
                                label: 'Illustrations Scenes',
                            },
                            {
                                href: QUICK_START.MICROILLUSTRATIONS,
                                label: 'Microillustrations',
                            },
                            {
                                href: QUICK_START.ICONS,
                                label: 'Icons',
                            },
                            {
                                href: QUICK_START.TEXTS,
                                label: 'Texts',
                            },
                        ]
                    }
                ]
            }
        ],
    },
    {
        label: 'Transitions',
        key: 'transitions',
    },
]
module.exports = navigation
