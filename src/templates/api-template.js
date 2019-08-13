import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import SEO from '../components/seo';
import Layout from '../components/layout';

const tempBreakpoint = '820px';

const StyledApiProfile = styled.section`
    max-width: 940px;
    width: 90%;
    min-height: 80vh;
`;
const StyledApiHeader = styled.div`
    display: flex;
    flex-direction: column;
`;
const StyledHeaderBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    &:last-child {
        align-items: flex-end;
        @media (max-width: ${tempBreakpoint}) {
            align-items: flex-start;
            flex-direction: column;
        }
    }
    * {
        color: white;
    }

    // flex-direction: column;
    // &:first-child { flex: 2; }
    // &:last-child { flex: 1; }
`;
const StyledMeta = styled.div`
    @media (max-width: ${tempBreakpoint}) {
        // display: flex;
        // flex-direction: column;
        span {
            display: block;
        }
    }
    p {
        margin: 0 !important;
    }
`;

const StyledButtons = styled.div`
    display: flex;
    button {
        margin: 0 0 0 1rem !important;
        font-size: 1rem !important;
        // a { text-decoration: none!important; ; }
    }
    @media (max-width: ${tempBreakpoint}) {
        flex-direction: column;
        width: 100%;
        button {
            margin: 1rem 0 0 0 !important;
        }
    }
`;
const StyledH1 = styled.h1`
    margin-top: 0 !important;
`;
const StyledPercent = styled.p`
    text-align: right;
    font-size: 1.5rem;
    color: white !important;
    span {
        font-size: 3rem;
    }
`;
const StyledMain = styled.main`
    padding-top: 4rem;
    p,
    li {
        color: white !important;
    }
`;

const Template = ({ data }) => {
    const post = data.markdownRemark;
    return (
        <Layout>
            <SEO
                title={`${post.frontmatter.title}`}
                keywords={['Platform of trust', 'developers', 'api']}
            />
            <StyledApiProfile>
                <StyledApiHeader>
                    <StyledHeaderBlock>
                        <StyledH1>{post.frontmatter.title}</StyledH1>
                        <StyledPercent>
                            <span>{post.frontmatter.uptime} </span>uptime
                        </StyledPercent>
                    </StyledHeaderBlock>
                    <StyledHeaderBlock>
                        <StyledMeta>
                            <p>
                                <span>
                                    <strong>Version: </strong>
                                    {post.frontmatter.version}{' '}
                                </span>{' '}
                                <span>
                                    <strong>Modified: </strong>
                                    {post.frontmatter.modified}
                                </span>
                            </p>
                        </StyledMeta>
                        <StyledButtons>
                            <button className="btn btn-primary">
                                <a href={post.frontmatter.runkit}>
                                    Try out with RunKit
                                </a>
                            </button>
                            <button className="btn btn-secondary">
                                <a href={post.frontmatter.documentation}>
                                    See API-documentarion
                                </a>
                            </button>
                        </StyledButtons>
                    </StyledHeaderBlock>
                </StyledApiHeader>
                <StyledMain
                    className="api-content"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                />
            </StyledApiProfile>
        </Layout>
    );
};

export const pageQuery = graphql`
    query apis($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
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
                # image {
                #     childImageSharp {
                #         resize(width: 1500, height: 1500) {
                #             src
                #         }
                #         fluid(maxWidth: 786) {
                #             ...GatsbyImageSharpFluid
                #         }
                #     }
                # }
            }
        }
    }
`;

Template.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.shape({
                title: PropTypes.string.isRequired,
                uptime: PropTypes.string,
                version: PropTypes.string,
                modified: PropTypes.string,
                runkit: PropTypes.string,
                documentation: PropTypes.string
            }).isRequired,
            html: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
};

export default Template;
