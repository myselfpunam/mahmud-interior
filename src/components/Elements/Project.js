import React from 'react';
import './Project.css'
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
var bgimg1 = require('./../../images/background/cross-line2.png');
const projects = [
  {
      image: require('./../../images/projects/portrait/pic1.jpg'),
      title: 'Modern Kitchen Design',
      address: 'Dhaka, Bangladesh',
      Description: 'Transforming living spaces into functional and aesthetic homes by combining comfort, style, and the latest design trends to create personalized environments that reflect the homeowners taste'
  },
  {
      image: require('./../../images/projects/portrait/pic2.jpg'),
      title: 'Storage Design',
      address: 'Dhaka, Bangladesh',
      Description: 'Crafting modern and ergonomic office layouts that enhance productivity, foster collaboration, and promote well-being while maintaining a professional and sleek aesthetic.'
  },
  {
      image: require('./../../images/projects/portrait/pic3.jpg'),
      title: 'Dinning Space Design',
      address: 'Dhaka, Bangladesh',
      Description: ' Focusing on simplicity, clean lines, and functionality to design clutter-free spaces that evoke calmness and elegance through the use of neutral tones and minimalistic furniture.'
  },
  {
      image: require('./../../images/projects/portrait/pic4.jpg'),
      title: 'Vintage Kitchen Design',
      address: 'Dhaka, Bangladesh.',
      Description: ' Focusing on simplicity, clean lines, and functionality to design clutter-free spaces that evoke calmness and elegance through the use of neutral tones and minimalistic furniture.'
  },
  {
      image: require('./../../images/projects/portrait/pic5.jpg'),
      title: 'Modern Showcase Design',
      address: 'Dhaka, Bangladesh.',
      Description: ' Focusing on simplicity, clean lines, and functionality to design clutter-free spaces that evoke calmness and elegance through the use of neutral tones and minimalistic furniture.'
  },
  {
      image: require('./../../images/projects/portrait/pic6.jpg'),
      title: 'Mordern Space Design',
      address: 'Dhaka, Bangladesh.',
      Description: ' Focusing on simplicity, clean lines, and functionality to design clutter-free spaces that evoke calmness and elegance through the use of neutral tones and minimalistic furniture.'
  }
]

const Project = () => {
  return (
    <section className='shortProject-container pt-4 pb-4'>
      <div className="container pt-5">
        <div className="section-head">
          <div className="sx-separator-outer separator-center">
            <div className="sx-separator bg-white bg-moving bg-repeat-x" style={{ backgroundImage: 'url(' + bgimg1 + ')' }} >
              <h3 className="sep-line-one">All Projects</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {
            projects.map((item,index) => (
              <div key={index} className="col-md-4 mb-4">
            <Card className="project-card">
              <div className="project-image-wrapper">
                <Card.Img
                  variant="top"
                  src={item.image}
                  className="project-image"
                />
                <div className="project-description">
                  <Card.Body>
                    <Card.Title className='text-title'>{item.title}</Card.Title>
                    <Card.Subtitle><FaLocationDot />  {item.address}</Card.Subtitle>
                    <br />
                    <Card.Text>
                      {item.Description}
                    </Card.Text>
                  </Card.Body>
                </div>
              </div>
            </Card>
          </div>
            ))
          }
        </div>
        <NavLink to={"/projects"} className="site-button btn-half"><span> More Projects</span></NavLink>
      </div>
    </section>
  );
};

export default Project;