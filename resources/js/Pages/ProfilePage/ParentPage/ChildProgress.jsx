import parent_img from "../../../images/Parents/people.webp";
import JoinRightWrapper from "../../JoinPages/JoinRightWrapper";
const ParentLearnMore = () => {
  const submitHandler = (e) => {
    console.log("button clicked :)");
  };
  return (
    <>
      <style>{`
        #parent-learn-more-section {
            color: #00274C;
        }
        #parent-learn-more-section p {
            font-family: 'Work Sans', san-serif;
            font-weight: 400;
            color: #6C757D;
        }
        .tutor-heading {
            font-family: 'Ubuntu', san-serif;
            font-weight: 500;
        }
        .tutor-accent {
            font-family: 'Work Sans', san-serif;
            font-weight: bold;
        }
        .btn-green{
             background: var(--active-link);
             color:white;
             border-color:var(--active-link);
        }
      `}</style>
      <section id="parent-learn-more-section" className="container-fluid">
        <div className="container d-flex flex-column flex-lg-row align-items-center py-5 pt-lg-0 mb-5">
          <div className="col col-lg-5 pe-lg-5">
            <JoinRightWrapper id="people-img" src={parent_img} alt="people" />
          </div>
          <div className="col col-lg-7 pe-lg-5 text-center text-lg-start mt-5 ">
            <h2 className="tutor-heading fw-500 display-4">
              We connect students with the best tutors across the world to help
              them learn.
            </h2>
            <p className="my-4 h4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing
              elit consectetur Lorem ipsum dolor sit amet, consectetur
              adipiscing elit elit consectetur ipsum dolor sit amet, consectetur
              adipiscing elit adipiscing elit consectetur
            </p>
            <button
              onClick={(e) => submitHandler(e)}
              className="btn-get-started btn btn-lg mt-5 mx-auto ms-lg-0 text-nowrap"
            >
              Learn more about us{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-down ms-5"
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
        </div>
      </section>
    </>
  );
};
export default ParentLearnMore;
