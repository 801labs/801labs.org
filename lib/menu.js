export default [
    {
        label: 'About',
        props: {
            href: '/about',
        },
        children: [
            {
                label: 'Financial Information',
                props: {
                    href: '/about/financial-information',
                },
            },
            {
                label: 'News',
                props: {
                    href: '/about/news/[page]',
                    as: '/about/news/1',
                }
            }
        ],
    },
    {
        label: 'Learn',
        props: {
            href: '/research-portal/[page]',
            as: '/research-portal/1',
        },
    },
    {
        label: 'Get Involved',
        props: {
            href: '/get-involved',
        },
        children: [
            {
                label: 'Events',
                props: {
                    href: '/get-involved/events',
                },
            },
            {
                label: 'Location and Hours',
                props: {
                    href: '/get-involved/location-and-hours',
                },
            }
        ],
    },
    {
        label: 'Contact Us',
        props: {
            href: '/contact',
        },
    },
    {
        label: 'Donate\u00A0\u003E',
        props: {
            href: '/donate',
        },
    },
]