/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const { createFilePath, createFileNode } = require(`gatsby-source-filesystem`)

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    const blogTemplate = path.resolve(`src/templates/blog-template.js`);
    const pageTemplate = path.resolve(`src/templates/page-template.js`);
    const usecaseTemplate = path.resolve(`src/templates/usecase-template.js`);
    const apiTemplate = path.resolve(`src/templates/api-template.js`);
    return graphql(`
    {
        blogs: allMarkdownRemark(
            filter: { frontmatter: { type: { eq: "blog" } } }
            sort: { order: DESC, fields: [frontmatter___date] }
        ) {
            edges {
                node {
                    excerpt(pruneLength: 250)
                    html
                    id
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                        path
                        type
                    }
                }
            }
        }
        pages: allMarkdownRemark(
            filter: { frontmatter: { type: { eq: "page" } } }
            sort: { order: DESC, fields: [frontmatter___date] }
        ) {
            edges {
                node {
                    excerpt(pruneLength: 250)
                    html
                    id
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                        path
                        type
                    }
                }
            }
        }
        usecases: allMarkdownRemark(
            filter: { frontmatter: { type: { eq: "usecase" } } }
            sort: { order: DESC, fields: [frontmatter___date] }
        ) {
            edges {
                node {
                    excerpt(pruneLength: 250)
                    html
                    id
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                        path
                        type
                    }
                }
            }
        }
        apis: allMarkdownRemark(
            filter: { frontmatter: { type: { eq: "api" } } }
            sort: { order: DESC, fields: [frontmatter___date] }
        ) {
            edges {
                node {
                    excerpt(pruneLength: 250)
                    html
                    id
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                        path
                        type
                        documentation
                        version
                        modified
                        runkit
                        uptime
                    }
                }
            }
        }
    }
    `).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors);
        }
        
        result.data.blogs.edges.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.path,
                component: blogTemplate,
                context: {} // additional data can be passed via context
            });
        });

        result.data.pages.edges.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.path,
                component: pageTemplate,
                context: {} // additional data can be passed via context
            });
        });

        result.data.usecases.edges.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.path,
                component: usecaseTemplate,
                context: {} // additional data can be passed via context
            });
        });

        result.data.apis.edges.forEach(({ node }) => {
            createPage({
                path: node.frontmatter.path,
                component: apiTemplate,
                context: {} // additional data can be passed via context
            });
        });
    });

};
