import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const DeveloperPage = () => {
    return (
        <Layout>
            <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
            <section className="Home fullwidth page-content">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">
                            Build trusted products in minutes
                        </h1>
                        <p className="lead">
                            Platform of Trust gives access to both rich build
                            environment data and customers.​
                        </p>
                        <form>
                            <label htmlFor="signup">
                                Be productive in minutes - sign up for an
                                account
                            </label>
                            <div
                                className="form-group row"
                                style={{ maxWidth: '20em' }}
                            >
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Sign up
                                </button>
                            </div>
                            <div
                                className="form-group row"
                                style={{ maxWidth: '20em' }}
                            >
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Explore getting started!
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <main className="container">
                    <h2>What do you want to do next?</h2>
                    <section className="container row equal">
                        <div className="col-sm d-flex">
                            <div className="card">
                                <div className="card-header">
                                    <h3>REGISTER DATA PRODUCT</h3>
                                </div>
                                <div className="card-body">
                                    <p>
                                        Check out getting started package and
                                        add new data products with integrations
                                        for other developers to consume
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <Link to="/getstarted/data-products">
                                        Learn more >>{' '}
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm d-flex">
                            <div className="card">
                                <div className="card-header">
                                    <h3>REGISTER APPLICATION</h3>
                                </div>
                                <div className="card-body">
                                    <p>
                                        Read the getting started and build new
                                        applications on top of the data
                                        products.
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <Link to="/getstarted/build-apps">
                                        Learn more >>{' '}
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm d-flex">
                            <div className="card">
                                <div className="card-header">
                                    <h3>REGISTER TRANSLATOR</h3>
                                </div>
                                <div className="card-body">
                                    <p>
                                        Register new translator to Platform of
                                        Trust. You can use registered
                                        translators in data products.{' '}
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <Link to="/getstarted/register-translator">
                                        Lets do it! >>{' '}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="container row equal">
                        <div className="container row">
                            <h2>Practical getting started packages</h2>
                        </div>
                        <div className="col-sm d-flex">
                            <div className="card">
                                <div className="card-header">
                                    <h3>HOW TO CREATE DATA PRODUCTS</h3>
                                </div>
                                <div className="card-body">
                                    <p>
                                        Check out getting started package and
                                        add new data products with integrations
                                        for other developers to consume
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <Link to="/getstarted/data-products">
                                        Learn more >>{' '}
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm d-flex">
                            <div className="card">
                                <div className="card-header">
                                    <h3>HOW TO BUILD APPS</h3>
                                </div>
                                <div className="card-body">
                                    <p>
                                        Read the getting started and build new
                                        applications on top of the data
                                        products.
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <Link to="/getstarted/build-apps">
                                        Learn more >>{' '}
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm d-flex">
                            <div className="card">
                                <div className="card-header">
                                    <h3>HOW TO REGISTER TRANSLATOR</h3>
                                </div>
                                <div className="card-body">
                                    <p>
                                        Register new translator to Platform of
                                        Trust. You can use registered
                                        translators in data products.{' '}
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <Link to="/getstarted/register-translator">
                                        Lets do it! >>{' '}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="container">
                        <h2>
                            Get started with the Platform of Trust APIs in
                            minutes
                        </h2>
                        <p>
                            Try out the most commonly used APIs instantly. Just
                            select API, preferred code example and hit "run".
                            The response with headers is printed below.
                        </p>
                        <div className="container row">
                            <div className="col-md-6">
                                <div className="bd-clipboard">
                                    <button
                                        className="btn-clipboard"
                                        title=""
                                        data-original-title="Copy to clipboard"
                                    >
                                        Copy
                                    </button>
                                </div>
                                <figure className="highlight">
                                    <pre>
                                        <code
                                            className="language-html"
                                            data-lang="html"
                                        >
                                            <span className="nt">&lt;link</span>
                                            <br />
                                            <span className="na"> rel=</span>
                                            <span className="s">
                                                "stylesheet"
                                            </span>
                                            <span className="na"> href=</span>
                                            <br />
                                            <span className="s">
                                                "https://foo.com.min.css"
                                            </span>
                                            <span className="nt">&gt;</span>
                                        </code>
                                    </pre>
                                </figure>
                            </div>
                            <div className="col-md-3">
                                <button className="btn btn-primary btn-block">
                                    Login API
                                </button>
                                <button className="btn btn-primary btn-block">
                                    Context API
                                </button>
                                <button className="btn btn-primary btn-block">
                                    Identity API
                                </button>
                                <button className="btn btn-primary btn-block">
                                    Product API
                                </button>
                                <button className="btn btn-primary btn-block">
                                    Broker API
                                </button>
                                <Link to="/developers/apis">
                                    Read more about APIs >>{' '}
                                </Link>
                            </div>
                        </div>
                    </section>
                    <section className="container">
                        <h2>We love developers</h2>
                        <p>
                            Developer experience is at the forefront of
                            everything we do. We strive to make products that
                            are both delightful and get out of your way, so that
                            you can focus on what you do best - building great
                            apps and data products.{' '}
                        </p>

                        <p>
                            Take a deep dive into API documentation including
                            code examples for Python, Node.js, Java and shell
                            (curl)
                        </p>
                        <button className="btn btn-primary btn-block">
                            Visit the docs
                        </button>
                    </section>
                    <section className="container row">
                        <h2>
                            Become part of a growth story and ecosystem of trust
                        </h2>
                        <p>
                            Jotain talous insentiivejä (developerin managerille)
                        </p>
                    </section>
                    <section className="container row">
                        <h2>
                            Learn why developers and data providers are choosing
                            Platform of Trust
                        </h2>
                        <div className="container row equal">
                            <div className="col-sm d-flex">
                                <div className="card">
                                    <div className="card-header">
                                        <h3>DATA PRODUCT USE CASE</h3>
                                    </div>
                                    <div className="card-body">
                                        <p>
                                            Check out getting started package
                                            and add new data products with
                                            integrations for other developers to
                                            consume
                                        </p>
                                    </div>
                                    <div className="card-footer">
                                        <Link to="/use-cases/data-product">
                                            Learn more >>{' '}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm d-flex">
                                <div className="card">
                                    <div className="card-header">
                                        <h3>APP USE CASE</h3>
                                    </div>
                                    <div className="card-body">
                                        <p>
                                            Read the getting started and build
                                            new applications on top of the data
                                            products.
                                        </p>
                                    </div>
                                    <div className="card-footer">
                                        <Link to="/use-cases/build-application">
                                            Learn more >>{' '}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="container">
                        <h2>Start building today</h2>
                        <form>
                            <label htmlFor="signup-2">
                                Sign up for an account today
                            </label>
                            <div
                                className="form-group row"
                                style={{ maxWidth: '20em' }}
                            >
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Sign up
                                </button>
                            </div>
                        </form>
                    </section>
                </main>
            </section>
        </Layout>
    );
};

export const query = graphql`
    query {
        allMarkdownRemark(
            filter: { frontmatter: { type: { eq: "content" } } }
        ) {
            totalCount
            edges {
                node {
                    id
                    html
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                        type
                    }
                }
            }
        }
    }
`;

export default DeveloperPage;
