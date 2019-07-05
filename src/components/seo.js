import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import favicon16 from '../images/favicon-16x16.png';
import favicon32 from '../images/favicon-32x32.png';
import favicon96 from '../images/favicon-96x96.png';
import favicon128 from '../images/favicon-128.png';
import favicon196 from '../images/favicon-196x196.png';

import appleTouch57 from '../images/apple-touch-icon-57x57.png';
import appleTouch60 from '../images/apple-touch-icon-60x60.png';
import appleTouch72 from '../images/apple-touch-icon-72x72.png';
import appleTouch76 from '../images/apple-touch-icon-76x76.png';
import appleTouch114 from '../images/apple-touch-icon-114x114.png';
import appleTouch120 from '../images/apple-touch-icon-120x120.png';
import appleTouch144 from '../images/apple-touch-icon-144x144.png';
import appleTouch152 from '../images/apple-touch-icon-152x152.png';

import mstile70 from '../images/mstile-70x70.png';
import mstile144 from '../images/mstile-144x144.png';
import mstile150 from '../images/mstile-150x150.png';
import mstile310 from '../images/mstile-310x310.png';
import mstile310x150 from '../images/mstile-310x150.png';

function SEO({ description, lang, meta, keywords, title }) {
    return (
        <StaticQuery
            query={detailsQuery}
            render={data => {
                const metaDescription =
                    description || data.site.siteMetadata.description;
                return (
                    <Helmet
                        htmlAttributes={{
                            lang
                        }}
                        title={title}
                        titleTemplate={`%s | ${data.site.siteMetadata.title}`}
                        link={[
                            {
                                rel: 'icon',
                                type: 'image/png',
                                sizes: '16x16',
                                href: `${favicon16}`
                            },
                            {
                                rel: 'icon',
                                type: 'image/png',
                                sizes: '32x32',
                                href: `${favicon32}`
                            },
                            {
                                rel: 'icon',
                                type: 'image/png',
                                sizes: '96x96',
                                href: `${favicon96}`
                            },
                            {
                                rel: 'icon',
                                type: 'image/png',
                                sizes: '128x128',
                                href: `${favicon128}`
                            },
                            {
                                rel: 'icon',
                                type: 'image/png',
                                sizes: '196x196',
                                href: `${favicon196}`
                            },

                            {
                                rel: 'apple-touch-icon-precomposed',
                                type: 'image/png',
                                sizes: '57x57',
                                href: `${appleTouch57}`
                            },
                            {
                                rel: 'apple-touch-icon-precomposed',
                                type: 'image/png',
                                sizes: '60x60',
                                href: `${appleTouch60}`
                            },
                            {
                                rel: 'apple-touch-icon-precomposed',
                                type: 'image/png',
                                sizes: '72x72',
                                href: `${appleTouch72}`
                            },
                            {
                                rel: 'apple-touch-icon-precomposed',
                                type: 'image/png',
                                sizes: '76x76',
                                href: `${appleTouch76}`
                            },
                            {
                                rel: 'apple-touch-icon-precomposed',
                                type: 'image/png',
                                sizes: '114x114',
                                href: `${appleTouch114}`
                            },
                            {
                                rel: 'apple-touch-icon-precomposed',
                                type: 'image/png',
                                sizes: '120x120',
                                href: `${appleTouch120}`
                            },
                            {
                                rel: 'apple-touch-icon-precomposed',
                                type: 'image/png',
                                sizes: '144x144',
                                href: `${appleTouch144}`
                            },
                            {
                                rel: 'apple-touch-icon-precomposed',
                                type: 'image/png',
                                sizes: '152x152',
                                href: `${appleTouch152}`
                            }
                        ]}
                        meta={[
                            {
                                name: `description`,
                                content: metaDescription
                            },
                            {
                                property: `og:title`,
                                content: title
                            },
                            {
                                property: `og:description`,
                                content: metaDescription
                            },
                            {
                                property: `og:type`,
                                content: `website`
                            },
                            {
                                name: `twitter:card`,
                                content: `summary`
                            },
                            {
                                name: `twitter:creator`,
                                content: data.site.siteMetadata.author
                            },
                            {
                                name: `twitter:title`,
                                content: title
                            },
                            {
                                name: `twitter:description`,
                                content: metaDescription
                            },
                            {
                                name: `msapplication-TileColor`,
                                content: '#ffffff'
                            },
                            {
                                name: `msapplication-TileImage`,
                                content: `${mstile144}`
                            },
                            {
                                name: `msapplication-square70x70logo`,
                                content: `${mstile70}`
                            },
                            {
                                name: `msapplication-square150x150logo`,
                                content: `${mstile150}`
                            },
                            {
                                name: `msapplication-wide310x150logo`,
                                content: `${mstile310x150}`
                            },
                            {
                                name: `msapplication-square310x310logo`,
                                content: `${mstile310}`
                            }
                        ]
                            .concat(
                                keywords.length > 0
                                    ? {
                                          name: `keywords`,
                                          content: keywords.join(`, `)
                                      }
                                    : []
                            )
                            .concat(meta)}
                    />
                );
            }}
        />
    );
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    keywords: []
};

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.array,
    keywords: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string.isRequired
};

export default SEO;

const detailsQuery = graphql`
    query DefaultSEOQuery {
        site {
            siteMetadata {
                title
                description
                author
            }
        }
    }
`;
