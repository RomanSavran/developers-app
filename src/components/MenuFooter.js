// import PropTypes from 'prop-types'
import React from 'react';

import Logo from '../images/platformoftrust-wide-white-rgb.svg';
import Facebook from '../images/facebook-square-brands.svg';
import Twitter from '../images/twitter-square-brands.svg';
import Github from '../images/github-square-brands.svg';
import Linkedin from '../images/linkedin-square-brands.svg';

const MenuFooter = () => (
    <footer className="menu-footer footer font-small pt-3">
        <div className="container-fluid text-center text-md-left">
            <div className="row">
                <div className="footer-logo col-md-3 offset-md-1">
                    <img src={Logo} className="logo__footer" alt="Logo" />
                </div>

                <div className="footer-contact col-md-4 mt-md-0 mt-3">
                    <h5 className="mb-md-3">Platform of Trust Oy</h5>
                    <p>VAT number: FI29800052</p>
                    <p>
                        <a href="https://www.tilaajavastuu.fi/en/data-protection/">
                            Data protection statement
                        </a>
                    </p>
                </div>
                <div className="footer-somelinks col-3 col-lg-3 mb-md-0 mb-3 text-right">
                    <nav className="some-links mt-0">
                        <a
                            href="https://www.facebook.com/platformoftrust"
                            className="some-link facebook"
                        >
                            <img
                                src={Facebook}
                                className="some-icon"
                                alt="Facebook"
                            />
                        </a>
                        <a
                            href="https://twitter.com/PlatformOfTrust"
                            className="some-link twitter"
                        >
                            <img
                                src={Twitter}
                                className="some-icon"
                                alt="Twitter"
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/platform-of-trust/"
                            className="some-link github"
                        >
                            <img
                                src={Linkedin}
                                className="some-icon"
                                alt="Github"
                            />
                        </a>
                        <a
                            href="https://github.com/PlatformOfTrust/"
                            className="some-link linkedin"
                        >
                            <img
                                src={Github}
                                className="some-icon"
                                alt="Linkedin"
                            />
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    </footer>
);

export default MenuFooter;
