import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar';



export default function Header() {
  return (
   <>
     <Navbar />
    <div className='header d-flex align-items-center justify-content-center'>
      <div className='container d-flex align-items-center justify-content-center fs-1 text-white flex-column header-info mb-5'>
          <h1 className='text-center'>KM ELECTRICAL CONSTRUCTION</h1>
          <p className='text-center'>
              Experience top-quality electrical and plumbing services in Gauteng, 
              backed by a commitment to excellence and reliability. Our skilled professionals 
              deliver superior solutions tailored to your needs, ensuring satisfaction and peace of mind.
          </p>
          
            <NavLink to='/contact-us'>
              <button className='get-started-btn'>Get Started</button>
            </NavLink>
      </div>
    </div>
   </>
  )
}
