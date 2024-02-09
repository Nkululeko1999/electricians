import Navbar from './Navbar';

export default function Services() {

  return (
    <>
    <Navbar />
    <div className="container services-container">
      <h2 className='text-center service-heading'>Our Services</h2>
      <div className="row">
        {/* Wiring Services */}
        <div className="col-md-3 mb-4">
          <div className="card text-center h-100 service-card">
            <div className="card-body">
              <i className='bi bi-lightning mb-3 service-icons'></i>
              <h3 className='card-title'>Wiring Services</h3>
              <p className="card-text">Professional wiring services for residential and commercial properties.</p>
            </div>
          </div>
        </div>
        {/* Circuit Services */}
        <div className="col-md-3 mb-4">
          <div className="card text-center h-100 service-card">
            <div className="card-body">
              <i className="bi bi-lightning mb-3  service-icons"></i>
              <h3 className='card-title'>Circuit Services</h3>
              <p className="card-text">Expert circuit installation and troubleshooting.</p>
            </div>
          </div>
        </div>
        {/* Lighting Services */}
        <div className="col-md-3 mb-4">
          <div className="card text-center h-100 service-card">
            <div className="card-body">
              <i className="bi bi-lightbulb mb-3  service-icons"></i>
              <h3 className='card-title'>Lighting Services</h3>
              <p className="card-text">Comprehensive lighting solutions for indoor and outdoor spaces.</p>
            </div>
          </div>
        </div>
        {/* Outlet and Switch Services */}
        <div className="col-md-3 mb-4">
          <div className="card text-center h-100 service-card">
            <div className="card-body">
              <i className="bi bi-plug mb-3  service-icons"></i>
              <h3 className='card-title'>Outlet and Switch Services</h3>
              <p className="card-text">Installation and repair of outlets and switches for homes and businesses.</p>
            </div>
          </div>
        </div>
        {/* Drain Cleaning */}
        <div className="col-md-3 mb-4">
          <div className="card text-center h-100 service-card">
            <div className="card-body">
              <i class="bi bi-water service-icons"></i>
              <h3 className='card-title'>Drain Cleaning</h3>
              <p className="card-text">Professional drain cleaning services to keep your plumbing system flowing smoothly.</p>
            </div>
          </div>
        </div>
        {/* Fixture Installation and Repair */}
        <div className="col-md-3 mb-4">
          <div className="card text-center h-100 service-card">
            <div className="card-body">
              <i className="bi bi-tools mb-3  service-icons"></i>
              <h3 className='card-title'>Fixture Installation and Repair</h3>
              <p className="card-text">Installation and repair of fixtures including sinks, toilets, and showers.</p>
            </div>
          </div>
        </div>
        {/* Pipe Repairs and Replacements */}
        <div className="col-md-3 mb-4">
          <div className="card text-center h-100 service-card">
            <div className="card-body">
              <i class="bi bi-sliders service-icons"></i>
              <h3 className='card-title'>Pipe Repairs and Replacements</h3>
              <p className="card-text">Expert pipe repair and replacement services for residential and commercial properties.</p>
            </div>
          </div>
        </div>
        {/* Leak Detection and Repair */}
        <div className="col-md-3 mb-4">
          <div className="card text-center h-100 service-card">
            <div className="card-body">
              <i className="bi bi-droplet mb-3  service-icons"></i>
              <h3 className='card-title'>Leak Detection and Repair</h3>
              <p className="card-text">Professional leak detection and repair services to prevent water damage.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
