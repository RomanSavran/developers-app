import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';

const Template = ({ data }) => {
    return (
        <Layout>
            <section>
                <h1>WordPress Blog POC</h1>
                <h4>Posts from katalysti.fi :-) </h4>
                {data.allWordpressPost.edges.slice(0, 5).map(({ node }) => (
                    <div key={node.id} className="card flex-md-row mb-4 shadow-sm h-md-250">
                        <div
                            className="card-body d-flex flex-column align-items-start">
                            <h3>{node.title}</h3>
                            <div
                                dangerouslySetInnerHTML={{ __html: node.excerpt }}/>
                        </div>
                    </div>
                ))}
            </section>
        </Layout>
    );
};

export const pageQuery = graphql`
query {
    allWordpressPost {
        edges {
            node {
                id
                title
                excerpt
                content
            }
        }
    }
}
`;

Template.propTypes = {
    data: PropTypes.shape({
        allWordpressPost: PropTypes.shape({
            edges: PropTypes.array.isRequired
        }).isRequired
    }).isRequired
};

export default Template;
