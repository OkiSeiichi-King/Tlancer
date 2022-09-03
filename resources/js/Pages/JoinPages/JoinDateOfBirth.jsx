import { Link } from '@inertiajs/inertia-react';
import { useState, useContext } from "react";
import JoinNav from "./JoinNav";
import JoinRightWrapper from "./JoinRightWrapper";
import imgSignup from "../../images/Registration/img-signup-3.webp";
import SignupContext from "../../store/signup-context";
const JoinName = (props) => {
  console.log("dob rendered");
  const signupCTX = useContext(SignupContext);
  const [dateValue, setDateValue] = useState();

  return (
    <>
      <style>{`

      .registration-date {
        border-radius: 12px;
        border: 1px solid #d1d5db;
        text-align: center;
        color: #00274c;
      }

    `}</style>
      <JoinNav to="/names" button="back" />
      <section className="container-fluid registration fade-in d-flex flex-column p-md-5 mb-5">
        <div className="container d-flex flex-column-reverse flex-md-row  align-items-center">
          <div className="col col-md-7 me-md-5 text-center text-md-start mb-5">
            <h2 className="account-heading mb-3">Age is just a number</h2>
            <h3 className="h1 display-5 fw-bold account-form-label">
              Pick your birth date
            </h3>

            <form className="my-5">
              <input
                id="join-date"
                onChange={(e) => setDateValue(e.target.value)}
                type={"date"}
                className="registration-date h4 p-3 registration-input d-block mb-5"
                placeholder="DD"
              />

              <Link to={"/location"}>
                <button
                  onClick={() => {
                    signupCTX.actions.dateHandler(dateValue);
                  }}
                  className="btn-registration btn btn-lg"
                >
                  Continue{" "}
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
              </Link>
            </form>
          </div>
          <div className="col col-md-5">
            <JoinRightWrapper src={imgSignup} alt="person using laptop" />
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinName;
