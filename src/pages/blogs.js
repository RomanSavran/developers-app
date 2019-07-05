import React from 'react';
import Link from 'gatsby-link';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/layout';
import HexPic from '../images/radio-1948002.jpg';

const styles = {
    hex: {
        transform: 'rotate(-5deg)'
    }
};

export default function Blogs({ data }) {
    const { edges: posts } = data.allMarkdownRemark;
    return (
        <Layout className="container">
            <SEO
                title="Blogs"
                keywords={[`Platform of trust`, `developers`, 'blogs']}
            />
            <main className="page-content container dark-bg">
                <section className="intro row">
                    <div className="side-content col-md-4">
                        <svg
                            viewBox="0 0 200 200"
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            style={styles.hex}
                        >
                            <defs>
                                <pattern
                                    id="pattern1"
                                    height="100%"
                                    width="100%"
                                    patternContentUnits="objectBoundingBox"
                                >
                                    <image
                                        height="1"
                                        width="1"
                                        preserveAspectRatio="none"
                                        xlinkHref={HexPic}
                                    />
                                </pattern>
                            </defs>
                            <polygon
                                points="148,183.138438763306 52,183.138438763306 4,100 52,16.8615612366939 148,16.8615612366939 196,99.9999999999999 148,183.138438763306"
                                fill="url(#pattern1)"
                            />
                        </svg>
                    </div>
                    <div className="posts col-md-8">
                        <h1>Development Blogs</h1>
                    </div>
                </section>
                <section className="blog-posts row">
                    <div className="side-content col-md-4" />
                    <div className="posts col-md-8">
                        {posts
                            .filter(
                                post => post.node.frontmatter.type === 'blog'
                            )
                            .map(({ node: post }) => {
                                return (
                                    <div
                                        className="blog-post-preview"
                                        key={post.id}
                                    >
                                        <h3>
                                            <Link to={post.frontmatter.path}>
                                                {post.frontmatter.title}
                                            </Link>
                                        </h3>
                                        <h6>{post.frontmatter.date}</h6>
                                        <p>{post.excerpt}</p>
                                    </div>
                                );
                            })}
                    </div>
                </section>
            </main>
        </Layout>
    );
}
export const pageQuery = graphql`
    query IndexQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    excerpt(pruneLength: 250)
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
    }
`;
