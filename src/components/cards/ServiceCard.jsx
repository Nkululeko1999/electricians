import React from "react";
import { Link } from "react-router-dom";



function ServiceCard(props) {
  const { heading, imgSrc, description, link } = props;

  return (
    <div class="info-item shadow rounded h-100">
      <div class="info-img service-box-img rounded-top">
        <img src={imgSrc} class="img-fluid rounded-top w-100" alt="service" />
        <div className="btn-overlay">
          <Link to={link} class="rounded-pill text-white info-btn">
            View More
          </Link>
        </div>
      </div>
      <div class="service-content rounded-bottom bg-light p-4">
        <div>
          <h5 class="mb-4">{heading}</h5>
          <p class="mb-4">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
