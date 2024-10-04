import React from 'react';
import Navigation from './Navigation';
import { NavLink } from 'react-router-dom';
// import './Header2.css'
import { FaFacebook } from "react-icons/fa";
class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = { logo: require('./../../images/logo-light.png') };
    }

    state = { isSearchActive: false };

    handleSearchToggle = () => {
        this.setState({ isSearchActive: !this.state.isSearchActive });
    };

    componentDidMount() {

        const handleScroll = () => {
            const offset = window.scrollY;

            const stickyheader = document.querySelector('.sticky-header ');

            if (offset >= 100) {
                stickyheader.classList.add('is-fixed');
                stickyheader.classList.add('color-fill');

            } else {
                stickyheader.classList.remove('is-fixed');
                stickyheader.classList.remove('color-fill');
            }
        }

        window.addEventListener('scroll', handleScroll);

        window.updateTopMostParent = (logopath) => {
            this.setState({ logo: logopath });
        };
    }

    render() {

        const isSearchActive = this.state.isSearchActive;

        return (
            <>
                <header className="site-header nav-wide nav-transparent mobile-sider-drawer-menu">
                    <div className="top-bar sx-bg-secondry">
                        <div className="container">
                            <div className="d-flex justify-content-between ">
                                <ul className="list-unstyled e-p-bx text-white">
                                    <li><span>Mail us:</span> mahmudInterior@gmail.com</li>
                                    <li><span>Call us:</span>01818181818</li>
                                </ul>
                                <ul className="list-unstyled text-white social-bx d-flex flex-wrap align-content-center">
                                    <li><a href="https://www.facebook.com" target="_blank"><FaFacebook /></a></li>
                                    <li><a href="https://www.instagram.com" target="_blank"><i className="fa fa-instagram" /></a></li>
                                    <li><a href="https://twitter.com" target="_blank"><i className="fa fa-twitter" /></a></li>
                                    <li><a href="https://www.google.com" target="_blank"><i className="fa fa-google" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="sticky-header main-bar-wraper navbar-expand-lg">
                        <div className="main-bar">
                            <div className="container clearfix">
                                <div className="logo-header">
                                    <div className="logo-header-inner logo-header-one">
                                        <NavLink to={"/"}>
                                            <img src={this.state.logo} alt="Inteshape" />
                                        </NavLink>
                                    </div>
                                </div>
                                {/* NAV Toggle Button */}
                                <button id="mobile-side-drawer" data-target=".header-nav" data-toggle="collapse" type="button" className="navbar-toggler collapsed">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar icon-bar-first" />
                                    <span className="icon-bar icon-bar-two" />
                                    <span className="icon-bar icon-bar-three" />                      </button>
                                
                                {/* MAIN NAVIGATION */}
                                <div className="header-nav nav-dark navbar-collapse collapse justify-content-center collapse">
                                    <Navigation />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </header>

            </>
        );
    };
};

export default Header;

