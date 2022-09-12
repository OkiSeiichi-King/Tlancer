import { Link } from '@inertiajs/inertia-react';
import { useState } from "react";
import JoinNav from "./JoinNav";
import JoinRightWrapper from "./JoinRightWrapper";
import imgSignup from "../../images/Registration/img-signup-5.webp";
import phoneIcon from "../../images/Registration/charm_phone.svg";

const JoinPhoneNumber = () => {
    const [phone, setPhone] = useState('');


    // const finalSubmitHandler = (e) => {
    //     e.preventDefault();
    //     console.log("verify submit started");

    // };
    return (
        <>



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


    `}</style>
            <JoinNav to="welcome" button="" />
            <section className="container-fluid registration fade-in d-flex flex-column p-md-5 mb-5">
                <div className="container d-flex flex-column-reverse flex-md-row  align-items-center">
                    <div className="col col-md-7 me-md-5 text-center text-md-start mb-5">
                        <h2 className="account-heading mb-3">
                            Use a valid phone number close by
                        </h2>
                        <h3 className="h1 display-5 fw-bold account-form-label">
                            Enter Phone Number
                        </h3>
                        <form>
                            <div className="w-75 my-5 p-3 registration-name d-flex flex-row align-items-center registration-input">
                                <img
                                    className="me-3"
                                    src={phoneIcon}
                                    alt="person icon"
                                    width="24"
                                    height="24"
                                />
                                <input
                                    id="registration-phone"
                                    onChange={(e) => {
                                        setPhone(e.target.value)
                                    }}
                                    className="d-block"
                                    type={"number"}
                                    placeholder="Enter phone number"
                                />
                            </div>
                            {!phone ? (
                                <button
                                    disabled
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
                            ) : (
                                <Link href='login'>
                                    <button

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
                            )
                            }

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

export default JoinPhoneNumber;
