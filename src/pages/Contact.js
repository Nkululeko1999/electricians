import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from 'axios';
import { toast } from "react-toastify"; 
import Footer from "../components/Footer";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const response = await axios.post("http://localhost:5000/api/auto-responder/send-message", formData);
      
      console.log('Success:', response.data);
      toast.success(response.data.message);
    } catch (error) {

      if (error.response) {

        console.error('Server responded with error data:', error.response.data);
        toast.error(error.response.data.message);
        console.error('Status code:', error.response.status);
        console.error('Headers:', error.response.headers);
      } else if (error.request) {
        
        console.error('No response received:', error.request);
      } else {
        
        console.error('Error occurred during request setup:', error.message);
      }
    }
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <div className="container contact-container">
      <h2 className="heading-h2 text-center mb-5">Contact Us <hr className='decorator-line' /></h2>
        <div className="row">
          {/* Column 1 */}
          <div className="col-lg-6 d-flex flex-column">
            <div className="card shadow-sm mb-4 flex-grow-1 contact-card">
              <div className="card-body text-center">
                <i className="bi bi-geo-alt fs-3 mb-3"></i>
                <h3 className="card-title my-3">Our Physical Address</h3>
                <p className="card-text mb-3">123 Main St, City, Country</p>
              </div>
            </div>
            <div
              className="embed-responsive embed-responsive-4by3 flex-grow-1"
              style={{ height: "100%" }}
            >
              <iframe
                className="embed-responsive-item"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.9624865361825!2d28.046014775083407!3d-26.197898563716585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950e9df9fd0b75%3A0x217769c652a24b14!2sSiesta%20Butchery!5e0!3m2!1sen!2sza!4v1707482290136!5m2!1sen!2sza"
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
            <div className="row">
              <div className="col-md-6">
                <div className="card shadow-sm mb-4 contact-card">
                  <div className="card-body text-center">
                    <i className="bi bi-envelope fs-3 mb-3"></i>
                    <h3 className="card-title my-3">Email Us</h3>
                    <p className="card-text mb-3">example@example.com</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card shadow-sm mb-4 contact-card">
                  <div className="card-body text-center">
                    <i className="bi bi-telephone fs-3 mb-3"></i>
                    <h3 className="card-title my-3">Call Us</h3>
                    <p className="card-text mb-3">+1234567890</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="card shadow-sm">
              <div className="card-body">
                <h2 className="card-title my-3">Send Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="3"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <button type="submit" className="submit-btn">
                    Send Message
                  </button>
                </form>
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
