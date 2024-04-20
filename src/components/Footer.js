import React from "react";
import footerBgImg from "../components/repair/wiring.jpg";
import { Link } from 'react-router-dom';

function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

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
            <h5>KM ELECTRICAL CONSTRUCTION</h5>
            <p className="slogan">The Classic Short Circuit</p>

            <address>
              8832 Shukuma Street
              <br />
              Midrand, Johannesburg
              <br />
              1685
              <br />
            </address>
            <p className="mb-0"><span>Phone:</span> 078 937 6656 / 063 571 7049 </p>
            <p><span>Email:</span> moseskhanyelihle3@gmail.com</p>
          </div>
          <div className="col-md-3 useful-links">
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
                <Link className="footer-links">Industrial Commercial Domestic</Link>
              </li>
              <li>
                <Link className="footer-links">Faults</Link>
              </li>
              <li>
                <Link className="footer-links">Maintenance</Link>
              </li>
              <li>
                <Link className="footer-links">Generators</Link>
              </li>
              <li>
                <Link className="footer-links">Appliances</Link>
              </li>
              <li>
                <Link className="footer-links">Compliance Testing</Link>
              </li>
              <li>
                <Link className="footer-links">HV Equipments</Link>
              </li>
              <li>
                <Link className="footer-links">Leads Process</Link>
              </li>
              <li>
                <Link className="footer-links">Line Control Wiring</Link>
              </li>
              <li>
                <Link className="footer-links">Switch Boards</Link>
              </li>
              <li>
                <Link className="footer-links">Pumps</Link>
              </li>
              <li>
                <Link className="footer-links">Lighting</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Our Social Pages</h5>
            <ul className="list-unstyled footer-icons-container">
                <li><Link><i className="bi bi-facebook footer-icons"></i></Link></li>
                <li><Link><i className="bi bi-instagram footer-icons"></i></Link></li>
                <li><Link><i className="bi bi-envelope footer-icons"></i></Link></li>
            </ul>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center">
            <p>{currentYear} © Copyright Construction. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
