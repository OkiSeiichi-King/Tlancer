import selfServ from "../../../images/Tutors/tutor-dashboard-image.webp";
import selfServLogo from "../../../images/Tutors/tutorLogo.png";
import chevUp from "../../../images/Tutors/chevron-up.png";
import chevDown from "../../../images/Tutors/chevron-down.png";

const TutorSelfService = (props) => {
  return (
    <>
      <style>{`
    #self-serve-container {
        background: rgba(223,240,255,0.3)
    }
    #self-serve-text-container {
        font-family: 'Ubuntu', san-serif;
        color: var(--dark-blue);
       
    }
    .service-text {
        font-family: 'Work Sans', sans-serif;
        color: #808080;
    }

    .accordion-button {
      --bs-accordion-active-color: var(--dark-blue);
    }
    
    .accordion-button::after {
      --bs-accordion-btn-icon: url(${chevDown});
      --bs-accordion-btn-active-icon: url(${chevUp});
    }

    
   
    `}</style>
      <section
        id="self-serve-container"
        className="container-fluid py-lg-5 p-lg-5"
      >
        <div className="container d-flex flex-column align-items-center flex-md-row my-5 p-lg-5">
          <div className="container">
            <img
              className="img-fluid"
              src={selfServ}
              alt="coffee cup and magazine"
              width="515"
              height="514"
            />
          </div>
          <div id="self-serve-text-container" className="container px-0 my-5">
            <div className="container p-lg-5">
              <div className="container d-flex align-items-center justify-content-center justify-content-lg-start px-0 mb-5">
                <h2 className="pe-2 fw-bold h1">Why</h2>
                <img
                  className="img-fluid pb-1"
                  src={selfServLogo}
                  alt="logo"
                  width={"114"}
                  height={"25"}
                />

                <h2 className="ps-2 fw-bold h1">?</h2>
              </div>

              {/* STart */}
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button ps-0"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Self service dashboard
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body pt-0 ps-0">
                      <p className="service-text text-lg-start">
                        Hackton is the leading online coding tutor for beginners
                        join us today to take a step further.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button ps-0 collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Wide range of users
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body pt-0 ps-0">
                      <p className="service-text text-lg-start">
                        Hackton is the leading online coding tutor for beginners
                        join us today to take a step further.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button ps-0 collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Quick setup
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body pt-0 ps-0">
                      <p className="service-text text-lg-start">
                        Hackton is the leading online coding tutor for beginners
                        join us today to take a step further.
                      </p>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button ps-0 collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        24/7 customer support
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body pt-0 ps-0">
                        <p className="service-text text-lg-start">
                          Hackton is the leading online coding tutor for
                          beginners join us today to take a step further.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* END */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TutorSelfService;
