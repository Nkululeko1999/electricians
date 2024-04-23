import { infoData } from "../data/InfoData";
import InfoCard from "./info/InfoCard";



function Info() {

  return (
    <div className="container-fluid info-container">
      <div className="container">
        <div className={`animate-div`}>
          <h2 className="text-center info-heading">
            Your Reliable Plumbing and Electrical Services Provider
          </h2>
          <p className="info-text mx-auto mb-5">
            Offering dependable plumbing and electrical solutions, we prioritize
            customer satisfaction, ensuring quality workmanship, efficient
            services, and competitive pricing.
          </p>
        </div>

        <div className="row g-3 justify-content-center">
          {infoData?.map((data) => (
            <div key={data.id} className={`col-12 col-md-4 animate-info-card`}>
              <InfoCard
                heading={data.heading}
                text={data.text}
                btnText={data.btnText}
                link={data.link}
                imgUrl={data.imgUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Info;
