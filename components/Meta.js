import React from "react";
import Head from "next/head";
import {useRouter} from "next/router";

const Meta = (props) => {
    const router = useRouter();
    const path = 'asPath' in router ? router.asPath : router.pathname;
    const domain = 'https://www.801labs.org';

    let {
        title = '801 Labs',
        description = '801 Labs is a Salt Lake City based hackerspace created by local information technology, electronics, and information security enthusiasts.',
        image = '/images/801labs-cover.jpg',
        noindex = false
    } = props;
    if (!title.includes('801 Labs')) title += ' | 801 Labs';

    return (
        <Head>
            <title key="title">{title}</title>
            <meta name="description" content="description" key="description"/>
            <link rel="canonical" href={domain + path} key="canonical"/>
            <link rel="icon" href="/favicon.png" sizes="16x16"/>
            <meta property="og:title" content={title} key="og:title"/>
            <meta property="og:description" content={description} key="og:description"/>
            <meta property="og:image" content={domain + image} key="og:image"/>
            <meta property="og:url" content={domain + path} key="og:url"/>
            <meta property="og:site_name" content="801 Labs" key="og:site_name"/>
            <meta name="twitter:card" content="summary_large_image" key="twitter:card"/>
            <meta name="twitter:site" content="@801Labs" key="twitter:site"/>
            <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport"/>
            <meta name="theme-color" content="#6bf0c2" key="theme-color"/>
            <link
                href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;0,900;1,400&family=Tomorrow:wght@400;600;700&display=swap"
                rel="stylesheet" key="fonts"/>
            {noindex && <meta name="robots" content="noindex" key="robots"/>}
            <meta name="google-site-verification" content="QnlAT_0caLTAeL1e8V-RlHWBX7xauM_CnxY_5-ltIF4" />
            <!-- Global site tag (gtag.js) - Google Analytics -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-1LF63NTD3P"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-1LF63NTD3P');
            </script>
        </Head>
    )
}

export default Meta;
