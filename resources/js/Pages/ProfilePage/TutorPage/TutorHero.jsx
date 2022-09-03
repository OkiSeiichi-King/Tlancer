import { Link } from '@inertiajs/inertia-react';
import tutorHero from "../../../images/Tutors/tutorHero.webp";
const TutorHero = () => {
  return (
    <>
      <style>{`
        #tutor-section {
            color: #00274C;
        }
        #tutor-section p {
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

        #tutor-hero-img {
            border-radius: 30px;
          }

        @media (min-width: 1024px) {
          #tutor-hero-img {
            border-radius: 0px;
          }
        }
      `}</style>
      <section id="tutor-section" className="container-fluid py-5 pb-lg-0">
        <div className="container d-flex flex-column-reverse flex-lg-row align-items-center pt-lg-5">
          <div className="col col-lg-7 pe-lg-5 text-start mt-5 my-lg-5">
            <h1 className="tutor-heading fw-500 display-4">
              You know it, You can teach it.{" "}
              <span className="tutor-accent display-4">Become a tutor.</span>
            </h1>
            <p className="my-4 h4">
              Hackton is the leading online coding tutor for beginners join us
              today to take a step further.
            </p>
            <Link
              to={"/tutor/new-tutor"}
              className="btn-get-started btn btn-lg mt-5 me-auto ms-lg-0"
            >
              Get Started{" "}
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
            </Link>
          </div>
          <div className="col col-lg-5 pt-5 p-lg-5 p-lg-9 ps-lg-5">
            <div className="container d-flex">
              <img
                id="tutor-hero-img"
                src={tutorHero}
                alt="woman and open laptop"
                className="img-fluid ms-lg-auto mb-0"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default TutorHero;
