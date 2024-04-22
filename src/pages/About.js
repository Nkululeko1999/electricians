import React from "react";
import Navbar from "../components/Navbar";
import imgUrl from "../components/repair/four.jpg";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import AppBreadcrump from "../components/app-breadcrump/AppBreadcrump";



function About() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      <Navbar />
      <AppBreadcrump heading="About" />
      <div className="container about-container">
        <div className="row">
          {/* First Row */}
          <div className="col-lg-3 col-md-4">
            <div className="card text-center mb-3 h-100 about-card">
              <div className="card-body">
                <i class="bi bi-tools fs-3 mb-3"></i>
                <h5 className="card-title">Sercices</h5>
              </div>
              <div className="inner-card d-flex justify-content-center align-items-center">
                <p className="number mb-0">10+ Services</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div
              className={`card text-center mb-3 h-100 about-card ${
                windowWidth < 992 ? "mb-5" : ""
              }`}
            >
              <div className="card-body">
                <i className="bi bi-clock fs-3 mb-3"></i>
                <h5 className="card-title">Hours of Support</h5>
              </div>
              <div className="inner-card d-flex justify-content-center align-items-center">
                <p className="number mb-0">7/7</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="card text-center mb-3 h-100 about-card">
              <div className="card-body">
                <i className="bi bi-people fs-3 mb-3"></i>
                <h5 className="card-title">Reliable Company</h5>
              </div>
              <div className="inner-card d-flex justify-content-center align-items-center">
                <p className="number mb-0">Yes</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="card text-center mb-3 h-100 about-card">
              <div className="card-body">
                <i className="bi bi-check-circle fs-3 mb-3"></i>
                <h5 className="card-title">Completed Projects</h5>
              </div>
              <div className="inner-card d-flex justify-content-center align-items-center">
                <p className="number mb-0">57</p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="row about-info-container">
          <div className="col-md-6">
            <h3 className="mb-4">Our Story</h3>
            <p className="story">
              Welcome to KM Electrical Contruction, your premier destination for
              exceptional electrical and plumbing services in
              Gauteng, Midrand. With years of industry expertise, our
              skilled team delivers top-notch craftsmanship and unparalleled
              customer satisfaction. 
              <br /> <br />
              From electrical repairs to plumbing
              installations, we handle every project with precision and care.
              Our commitment to transparency ensures upfront
              pricing and honest assessments, so you can trust us every step of
              the way. 
              <br /> <br />
              Safety is our priority, and we adhere to the highest
              industry standards to deliver reliable, long-lasting results.
              Whether you're a homeowner, business owner, or property manager,
              count on KM Electrical Construction for all your electrical and plumbing
              needs.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src={imgUrl}
              alt="Our Story"
              className="img-fluid rounded quote-image"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
