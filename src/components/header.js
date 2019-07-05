import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import MenuFooter from './MenuFooter';
import Logo from '../images/platformoftrust-wide-white-rgb.svg';

const activeStyles = {
    borderBottom: '0.2em dotted rgb(240, 240, 240)',
    borderRadius: '0%'
};

class Header extends React.Component {
    render() {
        return (
            <header className="wrapper">
                <div className="logo">
                    <Link className="navbar-brand" to="/">
                        <img src={Logo} className="logo__header" alt="Logo" />
                    </Link>
                </div>
                <input id="swipe" data-function="swipe" type="checkbox" />
                <label
                    id="menu-toggle"
                    data-function="swipe"
                    htmlFor="swipe"
                    tabIndex="0"
                    role="button"
                    aria-pressed="false"
                >
                    <svg
                        focusable="false"
                        version="1.1"
                        viewBox="0 0 512 512"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect className="st0" width="512" height="400" />
                        <path
                            className="st1"
                            d="m304 256c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm120-48c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm-336 0c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z"
                        />
                    </svg>
                </label>
                <nav className="menus">
                    <nav className="apps">
                        <a
                            className="nav-link"
                            href="http://preview.oftrust.net/"
                        >
                            Platform of Trust
                        </a>
                        <a
                            className="nav-link"
                            href="http://world.oftrust.net/"
                        >
                            MyWorld
                        </a>
                        <Link className="nav-link active" to="/">
                            Developer portal
                        </Link>
                    </nav>
                    <nav className="site">
                        <Link
                            className="nav-link"
                            to="/"
                            activeStyle={activeStyles}
                        >
                            Portal
                        </Link>
                        <Link
                            className="nav-link"
                            to="/use-cases"
                            activeStyle={activeStyles}
                        >
                            Use Cases
                        </Link>
                        <Link
                            className="nav-link"
                            to="/apis"
                            activeStyle={activeStyles}
                        >
                            APIs
                        </Link>
                        <Link
                            className="nav-link"
                            to="/blogs"
                            activeStyle={activeStyles}
                        >
                            Blogs
                        </Link>
                        <Link
                            className="nav-link"
                            to="/guides"
                            activeStyle={activeStyles}
                        >
                            Guides
                        </Link>
                    </nav>
                    <div className="menu-footer">
                        <MenuFooter />
                    </div>
                </nav>
            </header>
        );
    }
}

Header.propTypes = {
    siteTitle: PropTypes.string
};

Header.defaultProps = {
    siteTitle: ``
};

export default Header;
