import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div class="container">
        <NavLink to='/' className="navbar-brand me-auto">Logo</NavLink>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h6 class="offcanvas-title" id="offcanvasNavbarLabel">KM EECTRICAL CONSTRUCTION</h6>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
              <li class="nav-item">
                <NavLink to='/' className="nav-link mx-lg-2" aria-current="page">HOME</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to='/services' className="nav-link  mx-lg-2">SERVICES</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to='/about-us' className="nav-link mx-lg-2">ABOUT</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to='/contact-us' className="nav-link mx-lg-2">CONTACT</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <NavLink to='/contact-us' className='quote-button'>Get Started</NavLink>
        <button class="navbar-toggler pe-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar