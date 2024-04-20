import React from "react";
import { Link } from "react-router-dom";

function FAQ() {
  return (
    <div class="faq">
      <div class="container">
        <div class="row">
          <h2 className="text-center faq-heading">
            Frequently Asked Questions
          </h2>
          <div class="col-lg-6 offset-lg-1">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Accordion Item #1
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    This is the first item's accordion body.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Accordion Item #2
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    This is the second item's accordion body.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Accordion Item #3
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    This is the third item's accordion body.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Accordion Item #4
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    This is the fourth item's accordion body.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Accordion Item #5
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    This is the fifth item's accordion body.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingSix">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    Accordion Item #6
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingSix"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    This is the sixth item's accordion body.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingSeven">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                  >
                    Accordion Item #7
                  </button>
                </h2>
                <div
                  id="collapseSeven"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingSeven"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    This is the seventh item's accordion body.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 align-self-center">
            <div class="faq-heading-box">
              <h4>Never Get Stranded, We got you.</h4>
              <h1>Why be stranded? Click once and live comfortably.</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravid risus commodo.
              </p>
              <button class="submit-btn">
                <Link className="text-white" to="/contact-us">
                  Contact Us
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
