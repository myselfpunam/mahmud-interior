import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ScrolToTop from './Elements/ScrolToTop';
import AboutPage from './Pages/AboutPage';
import ServicesPage from './Pages/ServicesPage';
import TeamPage from './Pages/TeamPage';
import ProjectPage from './Pages/ProjectPage';
import BlogPage from './Pages/BlogPage';
import FAQPage from './Pages/FAQPage';
import ContactPage from './Pages/ContactPage';
import ErrorPage from './Pages/ErrorPage';


class Components extends React.Component {
    render() {
        return (
            <BrowserRouter basename="/">
                <ScrolToTop/>
                <div className="page-wraper">
                        <Routes>
                        
                            <Route path='/' element={<Home/>} />                       
                            <Route path='/about' element={<AboutPage/>} />
                            <Route path='/services' element={<ServicesPage/>} />
                            <Route path='/team' element={<TeamPage/>} />
                            {/* <Route path='/our-history' element={<OurHistory/>} /> */}
                            <Route path='/projects' element={<ProjectPage/>} />
                            <Route path='/blog' element={<BlogPage/>} />
                            <Route path='/faq' element={<FAQPage/>} />
                            <Route path='/contact-us' element={<ContactPage/>} />
                            
                            <Route path='*' element={<ErrorPage/>} />
                        </Routes>
                </div>
            </BrowserRouter>
        );
    };
};

export default Components;