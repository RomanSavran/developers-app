import React from 'react';
import Link from 'gatsby-link';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

import PropTypes from 'prop-types';

const UseCases = ({ data }) => {
    const { edges: posts } = data.allMarkdownRemark;
    return (
        <Layout>
            <main className="page-content container dark-bg">
                <section className="use-cases container">
                    <div className="intro">
                        <h3>Platform Authentication and APIs</h3>
                    </div>

                    <div id="api-descriptions" className="cards row equal">
                        {posts.map(({ node: post }) => (
                            <div className="col-md-6 d-flex" key={post.id}>
                                <div className="card">
                                    <div className="card-header">
                                        <h3>{post.frontmatter.title}</h3>
                                    </div>
                                    <div className="card-body blog-post-preview">
                                        <div
                                            className="content-fragment"
                                            dangerouslySetInnerHTML={{
                                                __html: post.html
                                            }}
                                        />
                                    </div>
                                    <Link to={post.frontmatter.path}>
                                        <div className="card-footer">
                                            <p>Read more </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export const pageQuery = graphql`
    query UseCasesQuery {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { type: { eq: "usecase" } } }
        ) {
            edges {
                node {
                    excerpt(pruneLength: 250)
                    id
                    html
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                        path
                        type
                    }
                }
            }
        }
    }
`;

UseCases.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array.isRequired
        }).isRequired
    }).isRequired
};

export default UseCases;
