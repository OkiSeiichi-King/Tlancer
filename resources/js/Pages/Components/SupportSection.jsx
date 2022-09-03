import JoinRightWrapper from "../pages/JoinPages/JoinRightWrapper";
import supportImg from "../images/Tutors/tutorSupport.webp";
const TutorSupportSection = () => {
  const submitHandler = () => {
    console.log("button clicked :) :)");
  };
  return (
    <>
      <style>{`
      #tutor-support-section {
            color: #00274C;
      }
      #tutor-support-section p {
            font-family: 'Work Sans', san-serif;
            font-weight: 400;
            color: #6C757D;
        }
      `}</style>
      <section
        id="tutor-support-section"
        className="container-fluid pt-5 p-lg-5"
      >
        <div className="container d-flex flex-column-reverse flex-md-row align-items-center">
          <div className="col col-md-7 text-center text-lg-start my-5 my-lg-0">
            <h2 className="tutor-heading fw-bold display-5">
              Need help on how to get started?
            </h2>
            <p className="my-4 h5">
              Find the help you need on the support page
            </p>
            <button
              onClick={(e) => submitHandler(e)}
              className="btn-registration btn btn-lg my-4 px-4 text-nowrap"
            >
              Get Started{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-down ms-sm-5"
                viewBox="0 0 16 16"
                style={{ transform: "rotate(-90deg)" }}
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                />
              </svg>
            </button>
          </div>
          <div className="col col-md-5 ps-md-5">
            <JoinRightWrapper
              id="tutor-support-img"
              src={supportImg}
              alt="man and open laptop next to lamp"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default TutorSupportSection;
