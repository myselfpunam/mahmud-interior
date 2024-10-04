import React from 'react';
import Banner from './../Elements/Banner';
import ClientsLogo from './../Elements/ClientsLogo';
import WhatWeDo from '../Elements/WhatWeDo';
import Services from '../Elements/Services';
import Footer from '../Common/Footer';
import Header from '../Common/Header';

var bnrimg = require('./../../images/banner/6.jpg');

class Service1 extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    <Banner title="Services We Provide" pagename="Services" description="The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized." bgimage={bnrimg}/>
                    <Services />
                    <WhatWeDo />
                    <ClientsLogo bgcolor="bg-gray" />
                </div>
                <Footer />
            </>
        );
    };
};

export default Service1;