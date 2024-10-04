import React from 'react';
import Banner from './../Elements/Banner';
import Team from '../Elements/Team';
import WhatWeDo from '../Elements/WhatWeDo';
import Statistics from '../Elements/Statistics';
import Footer from '../Common/Footer';
import Header from '../Common/Header';

var bnrimg = require('./../../images/banner/1.jpg')

class AboutPage extends React.Component {
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
                    <Banner title="Mahmud's Interior Solution" pagename="About 1" description="The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized." bgimage={bnrimg}/>
                    <WhatWeDo /> 
                    <Statistics />
                    <Team />
                </div>
                <Footer />
            </>
        );
    };
};

export default AboutPage;