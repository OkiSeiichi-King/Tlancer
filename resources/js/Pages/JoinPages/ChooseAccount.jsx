import { useState, useContext } from "react";
import { Link } from '@inertiajs/inertia-react';
import JoinRightWrapper from "../JoinPages/JoinRightWrapper";
import imgSignup from "../../images/Registration/img-signup.webp";
import logo from "../../images/logo.webp";
import JoinNav from "./JoinNav";
import closeBtn from "../../images/Registration/blueX.svg";
// import backBtn from "../../images/Registration/arrow-left.svg";


const ChooseAccount = (props) => {
    console.log("choose account rendered");

    const [entry, setEntry] = useState("");
    const [isValid, setIsValid] = useState(false);
    console.log("entry: " + entry);
    console.log("isValid: " + isValid);

    return (
        <>
            <style>{`


      .account-form:focus {
        border-color: green;
      }

    `}</style>
    <JoinNav to='account' button='/'/>
            <section className="container-fluid registration fade-in d-flex flex-column p-md-5 mb-5">
                <div className="container d-flex flex-column-reverse flex-md-row align-items-center">
                    <div className="col col-md-7 me-md-5 pe-md-5 text-center text-md-start mb-5">
                        <h2 className="account-heading mb-3">
                            We are glad to have you onboard
                        </h2>
                        <h3 className="h1 display-5 fw-bold account-form-label">
                            Choose account type
                        </h3>
                        <form>
                            <select
                                onChange={(e) => {
                                    setEntry(e.target.value);
                                    setIsValid(true);
                                }}
                                id="account-type"
                                defaultValue={"DEFAULT"}
                                className="form-select account-form my-5 p-3"
                            >
                                <option value="DEFAULT" disabled className="my-5">
                                    Select account type
                                </option>
                                <option value="student" className="my-5">
                                    Student
                                </option>
                                <option value="tutor" className="my-5">
                                    Tutor
                                </option>
                                <option value="parent" className="my-5">
                                    Parent
                                </option>
                            </select>

                            {!isValid ? (
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
                                <Link href="name">
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

export default ChooseAccount;
