import React from 'react';
import Banner from './../Elements/Banner';
import Footer from '../Common/Footer';
import Header from '../Common/Header';
import Projects from '../Elements/Project';

var bnrimg = require('./../../images/banner/3.jpg');

class ProjectPage extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    <Banner title="Our Projects" pagename="Projects" description="The essence of interior design will always be about people and how they live. It is about the realities of what makes for an attractive, civilized." bgimage={bnrimg}/>
                    
                    <Projects/>         
                </div>

                <Footer />
            </>
        );
    };
};

export default ProjectPage;