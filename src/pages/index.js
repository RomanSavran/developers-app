import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import EndToEnd from '../images/end-to-end-dx.png';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/global.css';

const IndexPage = ({ data }) => {
    return (
        <Layout>
            <SEO
                title="Developer Portal"
                keywords={[`Platform of trust`, `developers`]}
            />
            <section className="Home page-content">
                <main className="main container">
                    <section className="intro container">
                        <div className="">
                            <h1 className="display-4">
                                Build trusted products
                            </h1>
                            <p className="lead">
                                Platform of Trust gives access to both rich
                                build environment data and customers.​
                            </p>
                            <p>
                                <a href="https://docs.oftrust.net">
                                    View API documentation
                                </a>
                            </p>
                            <p>
                                <Link to="/apis">View APIs</Link>
                            </p>
                            <p>
                                <Link to="/capabilities">
                                    View current capabilities of the platform
                                </Link>
                            </p>
                        </div>
                    </section>

                    <section className="overview container">
                        <div className="">
                            <h2>From Data Products to Applications</h2>
                            <p>
                                An overview of the processes included in the
                                End-to-end Developer eXperience
                            </p>
                            <img
                                src={EndToEnd}
                                className="img__article--full"
                                alt="End-to-end user experience illustration"
                            />
                            <p>
                                From below you'll find getting started guides
                                for the processes.{' '}
                            </p>
                        </div>
                    </section>

                    <section className="guides container">
                        <div className="intro">
                            <h2>What do you want to do next?</h2>
                        </div>

                        <div className="cards row equal">
                            <div className="col-md d-flex">
                                <div className="card">
                                    <div className="card-header">
                                        <h3>CREATE DATA PRODUCTS</h3>
                                    </div>
                                    <div className="card-body">
                                        <p>
                                            Check out getting started package
                                            and add new data products with
                                            integrations for other developers to
                                            consume
                                        </p>
                                    </div>
                                    <Link to="/guides/data-products">
                                        <div className="card-footer">
                                            <p>Learn more </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-md d-flex">
                                <div className="card">
                                    <div className="card-header">
                                        <h3>BUILD APPS</h3>
                                    </div>
                                    <div className="card-body">
                                        <p>
                                            Read the getting started and build
                                            new applications on top of the data
                                            products.
                                        </p>
                                    </div>
                                    <Link to="/guides/build-apps">
                                        <div className="card-footer">
                                            <p>Learn more</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-md d-flex">
                                <div className="card">
                                    <div className="card-header">
                                        <h3>USE STANDARD DATA MODELS</h3>
                                    </div>
                                    <div className="card-body">
                                        <p>
                                            All data exposed by the platform
                                            must be harmonised and use standard
                                            data models. Get familiar and start
                                            using along with Translator
                                            component.{' '}
                                        </p>
                                    </div>
                                    <Link to="/guides/data-models">
                                        <div className="card-footer">
                                            <p>Learn more</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="cards row equal">
                            <div className="col-md d-flex">
                                <div className="card">
                                    <div className="card-header">
                                        <h3>SETUP TRANSLATOR</h3>
                                    </div>
                                    <div className="card-body">
                                        <p>
                                            A Platform Of Trust translator
                                            standardizes the responses from a
                                            data source to the Platform itself.
                                        </p>
                                    </div>
                                    <Link to="/guides/translator">
                                        <div className="card-footer">
                                            <p>Learn more</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-md d-flex">
                                <div className="card">
                                    <div className="card-header">
                                        <h3>MANAGE DIGITAL TWINS</h3>
                                    </div>
                                    <div className="card-body">
                                        <p>
                                            What is digital twin and why should
                                            I care? How to use digital twins in
                                            managing built environment data?
                                        </p>
                                    </div>
                                    <Link to="/guides/twins">
                                        <div className="card-footer">
                                            <p>Learn more</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-md d-flex">
                                <div className="card">
                                    <div className="card-header">
                                        <h3>USE SANDBOX</h3>
                                    </div>
                                    <div className="card-body">
                                        <p>
                                            Read the getting started and build
                                            new applications on top of the data
                                            products.
                                        </p>
                                    </div>
                                    <Link to="/guides/sandbox">
                                        <div className="card-footer">
                                            <p>Learn more</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="outro">
                            <p>
                                We are creating more guides on various topics.
                                We also welcome community driven guides.
                                Checkout how to contribute and see full list of
                                guides.
                            </p>
                            <Link className="nav-link__btn" to="/guides">
                                Full list of guides!{' '}
                            </Link>
                        </div>
                    </section>

                    <section className="love container">
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

                        <Link to="/apis">Visit the API docs! </Link>
                    </section>

                    <section className="use-cases container">
                        <div className="title">
                            <h2>
                                Learn why developers and data providers are
                                choosing Platform of Trust
                            </h2>
                        </div>

                        <div className="cards row equal">
                            <div className="col-md d-flex">
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
                                    <Link to="/use-cases/data-product">
                                        <div className="card-footer">
                                            <p>Learn more </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md d-flex">
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
                                    <Link to="/use-cases/build-application">
                                        <div className="card-footer">
                                            <p>Learn more </p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="join container">
                        <div className="intro">
                            <h2>Stay informed and participate</h2>
                            <p>
                                Our daily communication is based on Slack and
                                mailing list. Subscribe now and stay informed!
                            </p>
                            <a href="https://www.platformoftrust.net/newsletter/">
                                Subscribe{' '}
                            </a>
                        </div>
                    </section>
                </main>
            </section>
        </Layout>
    );
};

export default IndexPage;
