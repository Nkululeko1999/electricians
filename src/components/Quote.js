import React from "react";

export default function Quote() {
  return (
    <div className="container-fluid quote-container">
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
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                  ></textarea>
                </div>
                <button type="submit" className="quote-btn">
                  Get a Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
