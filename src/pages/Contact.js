import React, { useState } from "react";
import Navbar from "../components/Navbar";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Select Subject",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <>
      <Navbar />
      <div className="container my-5 py-5">
        <div className="row">
          {/* Column 1 */}
          <div className="col-lg-6 d-flex flex-column">
            <div className="card shadow-sm mb-4 flex-grow-1">
              <div className="card-body">
                <i className="bi bi-geo-alt fs-3 mb-3"></i>
                <h3 className="card-title">Our Physical Address</h3>
                <p className="card-text">123 Main St, City, Country</p>
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
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-6">
                <div className="card shadow-sm mb-4">
                  <div className="card-body">
                    <i className="bi bi-envelope fs-3 mb-3"></i>
                    <h3 className="card-title">Email Us</h3>
                    <p className="card-text">example@example.com</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card shadow-sm mb-4">
                  <div className="card-body">
                    <i className="bi bi-telephone fs-3 mb-3"></i>
                    <h3 className="card-title">Call Us</h3>
                    <p className="card-text">+1234567890</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="card shadow-sm">
              <div className="card-body">
                <h3 className="card-title">Contact Form</h3>
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
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>
                    <select
                      className="form-select"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    >
                      <option>Select Subject</option>
                      <option>General Inquiry</option>
                      <option>Technical Support</option>
                      <option>Feedback</option>
                    </select>
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
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
