import React from 'react';
import imgUrl from '../repair/one.jpg'



function InfoCard(props) {

    const { heading } = props;

  return (
    <div className="card h-100 info-card">
      <img src={imgUrl} className="" alt="Card" />
      <div className="card-body info-card-body">
        <h3 className="card-title text-white">{heading}</h3>
        <p className="card-text text-white">
            With over a decade of industry experience, trust our seasoned professionals to handle your plumbing 
            and electrical needs with expertise.
        </p>
        <button className="btn-card">Button</button>
      </div>
    </div>
  );
}

export default InfoCard;
