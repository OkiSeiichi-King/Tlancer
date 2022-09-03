import tutors from "../../images/tutors.webp";
import logoTutors from "../../images/logoTutors.svg";
import { Link } from '@inertiajs/inertia-react';
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
const Tutors = (props) => {
  const authCTX = useContext(AuthContext);
  const check = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-check-circle me-2"
      viewBox="0 0 16 16"
    >
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
      <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
    </svg>
  );
  return (
    <>
      <style>{`
        #tutors-section {
            background: #f6fbe7;
            color: #00274C;
        }
        #tutors-section p, #tutors-section li {
          font-family: 'Work Sans', sans-serif;
          font-weight: 500;
          font-size: 1.5rem;
        }
        .tutors-heading {
          font-family: 'Work Sans', sans-serif;
          font-weight: 500;
        }
        .tutor-display {
          font-family: 'Ubuntu', san-serif;
          font-weight: 500;
          font-size: 3.35rem;
        }
        li {
          margin: .5rem auto;
        }
        .tutor-span {
          font-family: 'Work Sans', sans-serif;
        }
        .cta-btn {
          background: #0ebe6a;
          color: #fff;
          font-weight: 500;
          font-family: 'Ubuntu', san-serif;
        }


        @media (max-width: 768px) {
          .cta-btn {
            width: 100%;
          }
          .tutor-display {
            font-size: 2.5rem;
          }
          #tutors-section li {
            font-size: 1rem;
            list-style: none;
          }
          #tutors-container {
            position: relative;
          }

          #tutor-title {
            position: absolute;
            top: 1.5rem;
            left: 0;
            right: 0;
            margin: auto;
          }
          #tutor-image-container {
            margin-top: 5rem;
          }

        }
    `}</style>
    {!authCTX.isLoggedIn && (<section id="tutors-section" className="container-fluid p-md-5 mb-5">
      <div id={props.id}></div>
        <div
          id="tutors-container"
          className="container d-flex flex-column-reverse flex-md-row justify-content-center"
        >
          <div className="col col-md-6">
            <div
              id="tutor-title"
              className="d-flex align-items-center justify-content-center justify-content-md-start my-3"
            >
              <img
                className="img-fluid"
                src={logoTutors}
                alt="tlancer"
                width="107"
                height="28"
              />
              <h2 className="h4 ms-2 pt-1 tutors-heading">tutors</h2>
            </div>

            <h3
              id="tutor-heading"
              className="tutor-display my-4 text-center text-md-start"
            >
              You know it, You can teach it.
              <span className="tutor-span fw-bold"> Become a tutor.</span>
            </h3>
            <p className="my-4 pe-md-5 text-center text-md-start">
              Hackton is the leading online coding tutor for beginners join us
              today to take a step further.
            </p>
            <ul className="pt-1 ps-4 tutor-list">
              <li>{check}Upload and manage your courses</li>
              <li>{check}Purus augue in sed nam enim.</li>
              <li>
                {check}
                Sollicitudin sapien non lectus at. Sollicitudin sapien non
                lectus at.
              </li>
            </ul>

                  <li className="nav-btn-container">
                    <Link
                      to="/join"
                      className="btn btn-lg cta-btn"
                    >
                      Sign Up as a Tutor
                    </Link>
                  </li>

          </div>
          <div id="tutor-image-container" className="col col-md-6">
            <img
              className="img-fluid my-3"
              src={tutors}
              alt="tutors using laptops"
              width="919"
              height="723"
            />
          </div>
        </div>
      </section>)}
    </>
  );
};

export default Tutors;
