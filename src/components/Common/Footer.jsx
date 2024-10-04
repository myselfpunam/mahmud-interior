import React from 'react';
import { NavLink } from 'react-router-dom';
import Switcher from '../Elements/Switcher';



class Footer extends React.Component {
    render() {

        return (
            <>
                <footer className="site-footer footer-large footer-dark footer-wide">
                    {/* FOOTER BLOCKES START */}
                    <div className="footer-top overlay-wraper bg-cover" >
                        <div className="overlay-main sx-bg-secondry opacity-08" />
                        <div className="container">
                            <div className="row">
                                {/* ABOUT COMPANY */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget_about">
                                        {/*<h4 class="widget-title">About Company</h4>*/}
                                        <div className="logo-footer clearfix p-b15">
                                            <NavLink to={"./"}>
                                                <img src={require('./../../images/logo-light.png')} alt="Mahmud Interior Solution Logo" />
                                            </NavLink>
                                        </div>
                                        <p> Today we can tell you, thanks to your passion.</p>
                                        <ul className="social-icons  sx-social-links">
                                            <li><a href="https://www.youtube.com/" className="fa fa-youtube" target="_blank"></a></li>
                                            <li><a href="https://www.facebook.com" className="fa fa-facebook" target="_blank"></a></li>
                                            <li><a href="https://twitter.com" className="fa fa-twitter" target="_blank"></a></li>
                                            <li><a href="https://www.instagram.com" className="fa fa-instagram" target="_blank"></a></li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="col-lg-3 col-md-6 col-sm-6 footer-col-3">
                                    <div className="widget widget_services inline-links">
                                        <h5 className="widget-title">Useful links</h5>
                                        <ul>
                                            <li><NavLink to={"/about-1"}>About</NavLink></li>
                                            <li><NavLink to={"/services-1"}>Services</NavLink></li>
                                            <li><NavLink to={"/project-grid-3-columns"}>Projects</NavLink></li>
                                            <li><NavLink to={"/blog-grid"}>Blog</NavLink></li>
                                            <li><NavLink to={"/contact-us"}>Contact Us</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* CONTACT US */}
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="widget widget_address_outer">
                                        <h5 className="widget-title">Contact Us</h5>
                                        <ul className="widget_address">
                                            <li>Konapara, Demra, Dhaka</li>
                                            <li>paponshuvo@gmail.com</li>
                                            <li>0181818181</li>
                                            <li>0181818181</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="call-to-action-wrap">
                                <div className="row">
                                    <div className="col-lg-7 col-md-6">
                                        <div className="call-to-action-left">
                                            <h5 className="text-uppercase m-b10 m-t0">Subscribe to our newsletter!</h5>
                                            <span>Never Miss Anything From Mahmud Interior Solution By Signing Up To Our Newsletter.</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-6">
                                        <div className="call-to-action-right">
                                            <div className="widget_newsletter">
                                                <div className="newsletter-bx">
                                                    <form role="search" method="post" action="">
                                                        <div className="input-group">
                                                            <input name="news-letter" className="form-control" placeholder="ENTER YOUR EMAIL" type="text" />
                                                            <span className="input-group-btn">
                                                                <button type="button" className="site-button"><i className="fa fa-paper-plane-o" /></button>
                                                            </span>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* FOOTER COPYRIGHT */}
                    <div className="footer-bottom overlay-wraper">
                        <div className="overlay-main" />
                        <div className="container">
                            <div className="row">
                                <div className="sx-footer-bot-left">
                                    <span className="copyrights-text">© 2024 Mahmud Interior Solution. Designed & Developed By Bird's Nest Cloud.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <Switcher />
            </>
        );
    };
};

export default Footer;