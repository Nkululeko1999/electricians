import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast } from "react-toastify";

export default function GenerateQuote() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://electricians-api.onrender.com/api/auto-responder/quote", formData);
      toast.success(response.data.message);
      console.log('Success:', response.data);
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
      <div className="container-fluid quote-container" style={{marginTop: "80px", marginBottom: "0", backgroundColor: "#fff"}}>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div
                className="d-flex justify-content-center"
                style={{ height: "100%" }}
              >
                <img
                  src={"../../images/headerImg.jpg"}
                  className="img-fluid quote-image"
                  alt="Electrical Staff"
                />
              </div>
            </div>

            <div className="col">
              <div className="card quote-card h-100 p-4">
                <h3 className="mb-3">Get a Quote</h3>
                <p>Fill out the form below to request a quote:</p>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea className="form-control" id="message" rows="4" name="message" value={formData.message} onChange={handleChange}></textarea>
                  </div>
                  <button type="submit" className="submit-btn">
                    Get a Quote
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
