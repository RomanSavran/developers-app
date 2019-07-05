import React from "react";
import Helmet from "react-helmet";
import Img from 'gatsby-image';
import { graphql, Link } from "gatsby";

import Layout from '../components/layout'

export default function Template({
  data 
}) {
  const post = data.markdownRemark; 
  return (
    <Layout>
        
        <article className="blog-post-container">
            <Helmet title={`CodeStack - ${post.frontmatter.title}`} />
            <div className="blog-post">
                <h1>{post.frontmatter.title} page</h1>
                <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
                <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: post.html }}
                />
            </div>
        </article>
        
    </Layout>
  );
}

export const pageQuery = graphql`
    query PageByPath($path: String!) {
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
`
;