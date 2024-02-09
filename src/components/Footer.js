import React from "react";
import footerBgImg from "../components/repair/wiring.jpg";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer
      className="footer"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${footerBgImg})`,
      }}
    >
      <div className="container text-white">
        <div className="row">
          <div className="col-md-3">
            <h5>CONSTRUCTION</h5>
            <address>
              234 Ivory Park
              <br />
              Johannesburg, Gauteng
              <br />
            </address>
            <p className="mb-0"><span>Phone:</span> +277 689 5548 </p>
            <p><span>Email:</span> info@example.com</p>
          </div>
          <div className="col-md-3">
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link className="footer-links">Home</Link>
              </li>
              <li>
                <Link className="footer-links">About us</Link>
              </li>
              <li>
                <Link className="footer-links">Services</Link>
              </li>
              <li>
                <Link className="footer-links">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Our Services</h5>
            <ul className="list-unstyled">
              <li>
                <Link className="footer-links">Electricity Repairs</Link>
              </li>
              <li>
                <Link className="footer-links">Plumbing</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Our Social Pages</h5>
            <ul className="list-unstyled footer-icons-container">
                <li><Link><i className="bi bi-facebook footer-icons"></i></Link></li>
                <li><Link><i className="bi bi-instagram footer-icons"></i></Link></li>
                <li><Link><i className="bi bi-envelope footer-icons"></i></Link></li>
                <li><Link><i className="bi bi-twitter footer-icons"></i></Link></li>
            </ul>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center">
            <p>2024 © Copyright Construction. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
