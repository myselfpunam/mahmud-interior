import React from 'react';
import { NavLink } from 'react-router-dom';

class Navigation  extends React.Component{

    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            })
        };

        loadScript('./assets/js/mobilenav.js');

    };

    render() {
        return (
            <>
                <ul className="nav navbar-nav">
                    <li className="active">
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/about"}>About us</NavLink>
                    </li>
                    <li>
                        <NavLink to={""}>Pages</NavLink>
                        <ul className="sub-menu">
                            <li>
                                <NavLink to={"/services"}>Services</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/team"}>Team</NavLink>
                            </li>
                            {/* <li><NavLink to={"/our-history"}>Our History</NavLink></li> */}
                        </ul>
                    </li>
                    <li>
                        <NavLink to={"/projects"}>Projects</NavLink>
                        
                    </li>
                    <li>
                        <NavLink to={"/blog"}>Blog</NavLink>
                    </li>
                    <li><NavLink to={"/faq"}>FAQ</NavLink></li>
                    <li><NavLink to={"/contact-us"}>Contact us</NavLink></li>
                </ul>
            </>
        );
    };
};

export default Navigation;