import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ApisPage = ({ data }) => {
    console.log(data);
    return (
        <Layout>
            <SEO title="API's" keywords={['Platform of Trust', 'APIs']} />
            <section className="APIs page-content">
                <main className="container">
                    <section className="intro container">
                        <div id="introduction" className="container">
                            {data.intro.edges.map(({ node }) => (
                                <div key={node.id}>
                                    <h1>{node.frontmatter.title}</h1>
                                    <p
                                        className="content-fragment"
                                        dangerouslySetInnerHTML={{
                                            __html: node.html
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="guides container">
                        <div className="intro">
                            <h3>Platform Authentication and APIs</h3>
                        </div>

                        <div id="api-descriptions" className="cards row equal">
                            {data.ApiDescs.edges.map(({ node }) => (
                                <div className="col-md-6 d-flex" key={node.id}>
                                    <div className="card">
                                        <div className="card-header">
                                            <h3>{node.frontmatter.title}</h3>
                                        </div>
                                        <div className="card-body">
                                            <div
                                                className="content-fragment"
                                                dangerouslySetInnerHTML={{
                                                    __html: node.html
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section id="libraries" className="container">
                        <div id="introduction" className="container">
                            {data.libraries.edges.map(({ node }) => (
                                <div key={node.id}>
                                    <h1>{node.frontmatter.title}</h1>
                                    <p
                                        className="content-fragment"
                                        dangerouslySetInnerHTML={{
                                            __html: node.html
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            </section>
        </Layout>
    );
};

export const query = graphql`
    query {
        intro: allMarkdownRemark(
            filter: {
                frontmatter: {
                    path: { eq: "/developers/apis#introduction" }
                    section: { eq: "introduction" }
                }
            }
        ) {
            totalCount
            edges {
                node {
                    id
                    html
                    frontmatter {
                        title
                        path
                    }
                }
            }
        }
        ApiDescs: allMarkdownRemark(
            filter: {
                frontmatter: {
                    path: { eq: "/developers/apis#api-descriptions" }
                    section: { eq: "api-descriptions" }
                }
            }
            sort: { order: ASC, fields: [frontmatter___date] }
        ) {
            totalCount
            edges {
                node {
                    id
                    html
                    frontmatter {
                        title
                        path
                        date(formatString: "DD MMMM, YYYY")
                    }
                }
            }
        }
        libraries: allMarkdownRemark(
            filter: {
                frontmatter: {
                    path: { eq: "/developers/apis#libraries" }
                    section: { eq: "libraries" }
                }
            }
        ) {
            totalCount
            edges {
                node {
                    id
                    html
                    frontmatter {
                        title
                        path
                    }
                }
            }
        }
    }
`;

export default ApisPage;
