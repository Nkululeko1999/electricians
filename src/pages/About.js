import React from 'react';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
        <Navbar />
        <div className="container about-container">
          <h2 className="about-heading text-center mb-5">About Us <hr className='decorator-line' /></h2>
      <div className="row justify-content-center">
        {/* First Row */}
        <div className="col-lg-2 col-md-4">
          <div className="card text-center mb-3 h-100 about-card">
            <div className="card-body">
              <i className="bi bi-clock-history fs-3 mb-3"></i>
              <h5 className="card-title">Years of Experience</h5>
              <p className="card-text">Insert text here...</p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4">
          <div className="card text-center mb-3 h-100 about-card">
            <div className="card-body">
              <i className="bi bi-clock fs-3 mb-3"></i>
              <h5 className="card-title">Hours of Support</h5>
              <p className="card-text">Insert text here...</p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4">
          <div className="card text-center mb-3 h-100 about-card">
            <div className="card-body">
              <i className="bi bi-people fs-3 mb-3"></i>
              <h5 className="card-title">Reliable Company</h5>
              <p className="card-text">Fast Services Delivered at your Door</p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4">
          <div className="card text-center mb-3 h-100 about-card">
            <div className="card-body">
              <i className="bi bi-check-circle fs-3 mb-3"></i>
              <h5 className="card-title">Completed Projects</h5>
              <p className="card-text">Insert number here...</p>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4">
          <div className="card text-center mb-3 h-100 about-card">
            <div className="card-body">
              <i className="bi bi-people fs-3 mb-3"></i>
              <h5 className="card-title">Expert Team</h5>
              <p className="card-text">Insert number here...</p>
            </div>
          </div>
        </div>
        {/* Second Row */}
        <div className="col-md-6">
          <h3>Our Story</h3>
          <p>Insert text about 6 lines here...</p>
        </div>
        <div className="col-md-6">
          <img src="path_to_your_image" alt="Our Story" className="img-fluid" />
        </div>
        {/* Third Row */}
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-4">
              <img src="path_to_your_image" alt="Image 1" className="img-fluid mb-3" />
            </div>
            <div className="col-md-4">
              <img src="path_to_your_image" alt="Image 2" className="img-fluid mb-3" />
            </div>
            <div className="col-md-4">
              <img src="path_to_your_image" alt="Image 3" className="img-fluid mb-3" />
            </div>
          </div>
        </div>
            <div className="col-md-6">
            <h3>Projects and Services</h3>
            <ul className="list-group">
                <li className="list-group-item"><i className="bi bi-check-circle"></i> Project 1</li>
                <li className="list-group-item"><i className="bi bi-check-circle"></i> Project 2</li>
                <li className="list-group-item"><i className="bi bi-check-circle"></i> Project 3</li>
                <li className="list-group-item"><i className="bi bi-check-circle"></i> Project 4</li>
                {/* Add more list items as needed */}
            </ul>
            </div>
        </div>
        </div>
    </>
  );
}

export default About;
