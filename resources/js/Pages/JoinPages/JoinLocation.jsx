import { Link } from '@inertiajs/inertia-react';
import { useState} from "react";
import JoinNav from "./JoinNav";
import JoinRightWrapper from "./JoinRightWrapper";
import imgSignup from "../../images/Registration/img-signup-4.webp";
import backBtn from "../../images/Registration/arrow-left.svg";
import logo from "../../images/logo.webp";



const JoinLocation = (props) => {
    console.log("location rendered");
    const [loc, setLoc] = useState();
    console.log("location: " + loc);
    const [locIsValid, setLocIsValid] = useState(false);


    const locationSubmitHandler = () => {
        console.log(loc);
    }

    return (
        <>



            {/* Nav */}
            <style>{`
      .registration-back-btn {
        font-family: 'Ubuntu', san-serif;
        font-weight: 500;
        text-decoration: none;
        color: #00274c;
        font-size: 1.5rem;
      }
      .registration-back-btn:hover {
        color: #00274c;
        opacity: 0.7;
      }
      #registration-back-btn {
        width: 25px;
        height: 25px;
      }
      #registration-close-btn {
        width: 35px;
        height: 35px;
      }


      .reg-logo{
        width: 150px;
        height: 35px;
      }

      @media (min-width: 768px) {

      #registration-close-btn {
        width: 50px;
        height: 50px;
      }
      #registration-back-btn {
        width: 50px;
        height: 50px;
      }
      .reg-logo{
        width: 187px;
        height: 45px;
      }

      }


    `}</style>

            <>

            <JoinNav to='date-of-birth' button='back'/>

                <header className="container-fluid">
                    <nav className="container navbar navbar-expand-lg navbar-light bg-white fixed-top w-100 d-flex align-items-center justify-content-between p-2 pt-4">



                        <div className="registration-back-btn-container col">
                            <Link href='date-of-birth' className="registration-back-btn" >
                                <img
                                    id="registration-back-btn"
                                    src={backBtn}
                                    alt="back button"
                                    width={"70"}
                                    height={"70"}
                                />{" "}
                                Back
                            </Link>
                        </div>
                        <Link className="col d-flex">
                            <img
                                className="reg-logo ms-auto"
                                src={logo}
                                alt="Tlancer"
                                width={"374"}
                                height={"90"}
                            />
                        </Link>
                    </nav>
                </header>
            </>
            {/* End Nav */}
            <style>{`


    `}</style>

            <section className="container-fluid registration fade-in d-flex flex-column p-md-5 mb-5">
                <div className="container d-flex flex-column-reverse flex-md-row  align-items-center">
                    <div className="col col-md-7 me-md-5 text-center text-md-start mb-5">
                        <h2 className="account-heading mb-3">
                            We want to find you a tutor close to you
                        </h2>
                        <h3 className="h1 display-5 fw-bold account-form-label">
                            Pick your location
                        </h3>

                        <form>
                            <select
                                id="join-location"
                                onChange={(e) => {
                                    setLoc(e.target.value);
                                    setLocIsValid(true);
                                }}
                                defaultValue={"DEFAULT"}
                                className="form-select account-form my-5 p-3"
                            >
                                <option value="DEFAULT" disabled>
                                    Region
                                </option>
                                <option value="1">Region One</option>
                                <option value="2">Region Two</option>
                                <option value="3">Region Three</option>
                            </select>
                            {!locIsValid ? (
                                <button disabled className="btn-registration btn btn-lg">
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
                            ) : (
                                <Link href='/phone-number'>
                                    <button
                                        onClick={locationSubmitHandler}
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
                            )}
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

export default JoinLocation;
