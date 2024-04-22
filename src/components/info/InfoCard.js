import React from "react";
import { Link } from "react-router-dom";



function InfoCard(props) {
  const { imgUrl, heading, text, btnText, link } = props;

  return (
    <div class="info-item shadow rounded h-100">
      <div class="info-img rounded-top">
        <img src={imgUrl} class="img-fluid rounded-top w-100" alt="service" />
      </div>
      <div class="service-content rounded-bottom p-4">
        <div>
          <h5 class="mb-4">{heading}</h5>
          <p class="">{text}</p>
        </div>
      </div>
      <Link to={link}
            class="rounded-pill text-white info-btn info-link text-center"
          >
            {btnText}
          </Link>
    </div>
  );
}

export default InfoCard;
