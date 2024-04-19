import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import GeneralForm from "../components/forms/GeneralForm";
import BuildForm from "../components/forms/BuildForm";
import Iframe from "../components/location/Iframe";

function Contact() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [generalNav, setGeneralNav] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const generalNavClick = () => {
    setGeneralNav(true);
  }

  const buildNavClick = () => {
    setGeneralNav(false);
  }

 
  return (
    <>
      <Navbar />
      <div className="container-fluid contact-container">
        <div className="container">
          <h2 className="heading-h2 text-white text-center mb-5">
            Contact Us <hr className="decorator-line bg-light" />
          </h2>
          <div className="row">
            {/* Column 1 */}
            <div className="col-lg-6 d-flex flex-column">
              <div className="card shadow-sm mb-4 flex-grow-1 contact-card address-card rounded-large">
                <div className="card-body text-center">
                  <i className="bi bi-geo-alt fs-3 mb-3"></i>
                  <h3 className="card-title my-3">Our Physical Address</h3>
                  <p className="card-text mb-3">
                    8832 Shukuma Street Midrand, Johhanesburg, 1685
                  </p>
                </div>
              </div>
              <div
                className={`embed-responsive embed-responsive-4by3 flex-grow-1 mt-5 ${
                  windowWidth < 992 ? "mb-4" : ""
                }`}
                style={{ height: "100%" }}
              >
                <Iframe />
              </div>
            </div>

            {/* Column 2 */}
            <div className="col-lg-6">
              <div className="row mb-5">
                <div className="col-md-6">
                  <div className="card shadow-sm mb-4 contact-card email-card rounded-large">
                    <div className="card-body text-center">
                      <i className="bi bi-envelope fs-3 mb-3"></i>
                      <h3 className="card-title my-3">Email Us</h3>
                      <p className="card-text mb-3">
                        moseskhanyelihle3@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card shadow-sm mb-4 contact-card phone-card rounded-large">
                    <div className="card-body text-center">
                      <i className="bi bi-telephone fs-3 mb-3"></i>
                      <h3 className="card-title my-3">Call Us</h3>
                      <p className="card-text mb-3">
                        078 937 6656 / 063 571 7049
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="card relative shadow-sm rounded-large">
                <div className="card-body p-4">
                  <h2 className="card-title my-5">{generalNav? 'Send general inquiry' : `Let's work together`}</h2>
                  {generalNav? 
                  (<GeneralForm />) :
                  (<BuildForm />)}
                </div>

                <div className="contact-nav">
                  <div className={`nav-div ${generalNav? 'active-contact-nav' : ''}`} onClick={generalNavClick}>
                    <span>General Inquiries</span>
                  </div>
                  <div className={`nav-div ${generalNav? '' : 'active-contact-nav'}`} onClick={buildNavClick}>
                    <span>Build with us</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
