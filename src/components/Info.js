import InfoCard from "./info/InfoCard";

function Info() {
  return (
    <div className="container-fluid info-container">
      <div className="container">
        <h1 className="text-center text-white info-heading">
          Your Reliable Plumbing and Electrical Services Provider
        </h1>
        <p className="lead mx-auto text-white mb-5">
          Offering dependable plumbing and electrical solutions, we prioritize
          customer satisfaction, ensuring quality workmanship, efficient
          services, and competitive pricing.
        </p>

        <div class="row justify-content-md-center">
          <div class="col col-md-4">
            <InfoCard 
              heading="Convient Location"
            />
          </div>
          <div class="col col-md-4">
            <InfoCard 
              heading="Multitude of Services"
            />
          </div>
          <div class="col col-md-4">
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
