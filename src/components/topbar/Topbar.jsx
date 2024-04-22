import React, { useState } from 'react'



function Topbar() {

    const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="container-fluid px-5 d-none d-lg-block topbar">
        <div className="row gx-0 align-items-center" style={{height: "45px"}}>
            <div className="col-lg-6 text-center text-lg-start mb-lg-0">
                <div className="d-flex justify-content-start items-center flex-wrap relative">
                    <div className='text-white topbar-box'
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    >
                        <i class="bi bi-geo-alt-fill topbar-icons"></i>
                        <span>Our Location</span>
                    </div>
                    {isHovered && <div className='px-3 py-4 location rounded'>
                            <span>8832 Shukuma Street</span> <br />
                            <span>Midrand, Johannesburg</span> <br />
                            <span>1685</span>
                        </div>
                        }
                    <div className='text-white topbar-box'>
                        <i class="bi bi-telephone-forward-fill topbar-icons"></i>
                        <span>078 937 6656 / 063 571 7049</span>
                    </div>
                    <div className='text-white topbar-box'>
                        <i class="bi bi-envelope topbar-icons"></i>
                        <span>moseskhanyelihle3@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 text-center text-lg-end scrolling-text-container">
                <div className="d-flex align-items-center justify-content-start text-white scrolling-text">
                    <span>"Industrial Commercial Domestic"</span>
                    <span>"Faults"</span>    
                    <span>"Maintenance"</span>
                    <span>"Generators"</span>
                    <span>"Appliances"</span>
                    <span>"Compliance Testing"</span>
                    <span>"HV Equipments"</span>
                    <span>"Leads Process"</span>
                    <span>"Line Control Wiring"</span>
                    <span>"Switch Boards"</span>
                    <span>"Pumps"</span>
                    <span>"Lighting"</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar
