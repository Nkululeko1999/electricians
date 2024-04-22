import React from "react";
import PulseLoader from "react-spinners/PulseLoader";



export default function LoadingButton() {
  return (
    <button className="d-flex justify-content-center align-items-center submit-btn" disabled>
      <span>Loading</span>
      <PulseLoader
        color="#ffffff"
        margin={1}
        size={18}
        speedMultiplier={1}
        className="ms-3"
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </button>
  );
}
