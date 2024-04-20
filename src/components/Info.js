import InfoCard from "./info/InfoCard";

function Info() {
  
  return (
    <div className="container-fluid info-container">
      <div className="container">
        <div>
          <h1 className="text-center info-heading">
            Your Reliable Plumbing and Electrical Services Provider
          </h1>
          <p className="info-text mx-auto mb-5">
            Offering dependable plumbing and electrical solutions, we prioritize
            customer satisfaction, ensuring quality workmanship, efficient
            services, and competitive pricing.
          </p>
        </div>
        
        <div class="row g-3 justify-content-center">
          <div className="col col-md-4">
            <InfoCard 
              heading="Convient Location"
            />
          </div>
          <div className="col col-md-4">
            <InfoCard 
              heading="Multitude of Services"
            />
          </div>
          <div className="col col-md-4">
            <InfoCard 
              heading="Affordable Solutions"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
