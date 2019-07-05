import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import SEO from '../components/seo';

import Layout from '../components/layout';

export default function Template({ data }) {
    const post = data.markdownRemark;
    return (
        <Layout>
            <SEO
                title={`${post.frontmatter.title}`}
                keywords={[`Platform of trust`, `developers`, 'use-cases']}
            />
            <article className="usecase-container">
                <div className="usecase">
                    <h1>{post.frontmatter.title}</h1>
                    {post.frontmatter.image && (
                        <Img
                            fluid={post.frontmatter.image.childImageSharp.fluid}
                        />
                    )}
                    <div
                        className="usecase-content"
                        dangerouslySetInnerHTML={{ __html: post.html }}
                    />
                </div>
            </article>
        </Layout>
    );
}

export const pageQuery = graphql`
    query usecaseByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                image {
                    childImageSharp {
                        resize(width: 1500, height: 1500) {
                            src
                        }
                        fluid(maxWidth: 786) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`;
