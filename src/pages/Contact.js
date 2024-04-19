import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";
import GeneralForm from "../components/forms/GeneralForm";
import BuildForm from "../components/forms/BuildForm";

function Contact() {

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
      <div className="container-fluid contact-container">
        <div className="container">
          <h2 className="heading-h2 text-white text-center mb-5">
            Contact Us <hr className="decorator-line bg-light" />
          </h2>
          <div className="row">
            {/* Column 1 */}
            <div className="col-lg-6 d-flex flex-column">
              <div className="card shadow-sm mb-4 flex-grow-1 contact-card address-card">
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
                <iframe
                  className="embed-responsive-item"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114759.26815675989!2d27.968254248509137!3d-25.993376120793346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956e17f65959cd%3A0x3ac640ff52ccc755!2sMidrand%2C%201685!5e0!3m2!1sen!2sza!4v1713559601596!5m2!1sen!2sza"
                  style={{ border: 0, height: "100%", width: "100%" }}
                  allowFullScreen=""
                  loading="lazy"
                  title="location"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Column 2 */}
            <div className="col-lg-6">
              <div className="row mb-5">
                <div className="col-md-6">
                  <div className="card shadow-sm mb-4 contact-card email-card">
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
                  <div className="card shadow-sm mb-4 contact-card phone-card">
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
              <div className="card relative shadow-sm">
                <div className="card-body">
                  <h2 className="card-title my-5">Send general inquiry</h2>
                  {/* <GeneralForm />  */}
                  <BuildForm />
                </div>

                <div className="contact-nav">
                  <div class="nav-div active-contact-nav">
                    <span>General Inquiries</span>
                  </div>
                  <div class="nav-div">
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
