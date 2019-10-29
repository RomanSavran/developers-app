import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import SEO from '../components/seo';
import Layout from '../components/layout';

const Template = ({ data }) => {
    const post = data.markdownRemark;
    return (
        <Layout>
            <SEO
                title={`${post.frontmatter.title}`}
                keywords={['Platform of trust', 'developers', 'blogs']}
            />
            <main className="page-content container dark-bg">
                <article className="blog-post-container">
                    <div className="blog-post">
                        <h1>{post.frontmatter.title}</h1>
                        {post.frontmatter.image && (
                            <Img
                                fluid={
                                    post.frontmatter.image.childImageSharp.fluid
                                }
                            />
                        )}
                        <div
                            className="blog-post-content"
                            dangerouslySetInnerHTML={{ __html: post.html }}
                        />
                    </div>
                </article>
            </main>
        </Layout>
    );
};

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
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

Template.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.shape({
                title: PropTypes.string.isRequired,
                image: PropTypes.shape({
                    childImageSharp: PropTypes.shape({
                        fluid: PropTypes.object
                    })
                })
            }).isRequired,
            html: PropTypes.string
        }).isRequired
    }).isRequired
};

export default Template;
