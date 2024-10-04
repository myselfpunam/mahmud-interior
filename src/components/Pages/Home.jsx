import React from 'react';
import Footer from '../Common/Footer';
import Slider from './../Elements/Slider';
import About from './../Elements/About';
import WhatWeDo from './../Elements/WhatWeDo';
import Services from './../Elements/Services';
import Blog from './../Elements/Blog';
import Statistics from './../Elements/Statistics';
import Testimonials from './../Elements/Testimonials';
import Team from '../Elements/Team';
import Project from '../Elements/Project';
import Header from './../Common/Header';

class Home extends React.Component {
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

        loadScript('./assets/js/custom.js');

    };
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    <Slider/>
                    <Project />
                    <WhatWeDo /> 
                    <Services />
                    <About />                   
                    <Team />
                    <Blog />
                    <Statistics/>
                    <Testimonials separatoralignment="separator-center" />
                </div>

                <Footer />
            </>
        );
    };
};

export default Home;