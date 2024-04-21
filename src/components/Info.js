import InfoCard from "./info/InfoCard";
import repairImg from '../components/repair/three.jpg'
import plumberImg from '../components/plumbing/plumber1.jpg'
import roofImg from '../components/plumbing/roofing.jpg'



function Info() {
  
  return (
    <div className="container-fluid info-container">
      <div className="container">
        <div>
          <h2 className="text-center info-heading">
            Your Reliable Plumbing and Electrical Services Provider
          </h2>
          <p className="info-text mx-auto mb-5">
            Offering dependable plumbing and electrical solutions, we prioritize
            customer satisfaction, ensuring quality workmanship, efficient
            services, and competitive pricing.
          </p>
        </div>
        
        <div class="row g-3 justify-content-center">
          <div className="col-12 col-md-4">
            <InfoCard 
              heading="Convient Location"
              text="With over a decade of industry experience, trust our seasoned
              professionals to handle your plumbing and electrical needs with
              expertise."
              btnText="Our Location"
              link="/contact-us"
              imgUrl={repairImg}
            />
          </div>
          <div className="col-12 col-md-4">
            <InfoCard 
              heading="Multitude of Services"
              text="With over a decade of industry experience, trust our seasoned
              professionals to handle your plumbing and electrical needs with
              expertise."
              btnText="Our Services"
              link="/services"
              imgUrl={plumberImg}
            />
          </div>
          <div className="col-12 col-md-4">
            <InfoCard 
              heading="KM Classic Short Circuit"
              text="With over a decade of industry experience, trust our seasoned
              professionals to handle your plumbing and electrical needs with
              expertise."
              btnText="About Us"
              link="/about-us"
              imgUrl={roofImg}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
