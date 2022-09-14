import { Link } from '@inertiajs/inertia-react';
import { useState} from "react";
import JoinRightWrapper from "./JoinRightWrapper";
import imgSignup from "../../images/Registration/img-signup-7.webp";
import padlock from "../../images/Registration/padlock.svg";

import JoinNav from './JoinNav';


const JoinPassword = (props) => {

    console.log("passwords rendered");

    const [pass, setPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");


    return (
        <>


<JoinNav to='phone-number' button="back"/>


            <style>{`
      #registration-phone {
        border: none;
        width: 100%;
        font-family: 'Work Sans', sans-serif;
        color: #6b7280;
      }
      #registration-phone:hover, #registration-phone:focus {
        outline: none;
      }
      .password-subtitle {
        font-family: 'Work Sans', sans-serif;
        color: #6b7280;
        font-weight: 400;
      }

      .loading {
        z-index: 10;
        background: rgba(0,0,0,.5);
        position: fixed;
      }
      .loading-box {

      }

    `}</style>


            <section className="container-fluid registration fade-in d-flex flex-column p-md-5 mb-5">
                <div className="container d-flex flex-column-reverse flex-md-row  align-items-center">
                    <div className="col col-md-7 me-md-5 text-center text-md-start mb-5">
                        <h2 className="account-heading mb-3">
                            Passwords are personal, keep you safe online too
                        </h2>
                        <h3 className="h1 display-5 fw-bold account-form-label">
                            Set a password
                        </h3>
                        <form>
                            <div className="w-75 my-3 mt-md-4 p-3 registration-name d-flex flex-row align-items-center registration-input me-5">
                                <img
                                    className="me-3"
                                    src={padlock}
                                    alt="@"
                                    width="24"
                                    height="24"
                                />
                                <input
                                    id="login-password"
                                    onChange={(e) => {
                                        setPass(e.target.value);
                                    }}
                                    className="d-block text-input"
                                    type={"text"}
                                    placeholder="Enter password"
                                />
                            </div>

                            <div className="w-75 my-3 mt-md-4 p-3 registration-name d-flex flex-row align-items-center registration-input me-5">
                                <img
                                    className="me-3"
                                    src={padlock}
                                    alt="padlock icon"
                                    width="24"
                                    height="24"
                                />
                                <input
                                    id="login-confirm-password"
                                    className="d-block text-input"
                                    type={"password"}
                                    placeholder="Confirm password"
                                    onChange={(e) => {
                                        setConfirmPass(e.target.value);
                                    }}
                                />
                            </div>
                            <h5 className="password-subtitle">
                                Password must include, Letters, numbers, and symbols
                            </h5>

                            {pass !== confirmPass || pass.length < 1 ? (
                                <button disabled className="btn-registration btn btn-lg mt-5">
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
                                <Link href='register'>
                                    <button

                                        className="btn-registration btn btn-lg mt-5"
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

export default JoinPassword;
