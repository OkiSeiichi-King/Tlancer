import { Link } from '@inertiajs/inertia-react';
import { useState} from "react";
import JoinNav from "./JoinNav";
import JoinRightWrapper from "./JoinRightWrapper";
import imgSignup from "../../images/Registration/img-signup-2.webp";
import personIcon from "../../images/Registration/person-icon.svg";
import { useForm } from '@inertiajs/inertia-react';



const JoinName = (props) => {
    const {data, setData, post, processing, errors, reset} = useForm({
        fName: '',
        lName:''
    });

    const HandleChange = (e) => {
        setData(
            e.target.name,
            e.target.value
        )
    }

    const HandleSubmit = (e) => {
        e.preventDefault();
        post(route('store-name'))
        console.log('working')

    }

    return (
        <>
            <style>{`



    `}</style>
            <JoinNav to="choose-account" button="back" />
            <section className="container-fluid registration fade-in d-flex flex-column p-md-5 mb-5">
                <div className="container d-flex flex-column-reverse flex-md-row  align-items-center">
                    <div className="col col-md-7 me-md-5 text-center text-md-start mb-5">
                        <h2 className="account-heading mb-3">Continue to registration</h2>
                        <h3 className="h1 display-5 fw-bold account-form-label">
                            Type in names
                        </h3>
                        <form onSubmit={HandleSubmit} className="my-5">
                            <div className="w-75 my-3 my-md-5 p-3 registration-name d-flex flex-row align-items-center registration-input">
                                <img
                                    className="me-3"
                                    src={personIcon}
                                    alt="person icon"
                                    width="24"
                                    height="24"
                                />
                                <input
                                    id="registration-first-name"
                                    onChange={HandleChange}
                                    name="fName"
                                    value={data.fName}
                                    className="d-block text-input"
                                    type={"text"}
                                    placeholder="First Name"
                                />
                            </div>

                            <div className="w-75 my-3 my-md-5 p-3 registration-name d-flex flex-row align-items-center registration-input">
                                <img
                                    className="me-3"
                                    src={personIcon}
                                    alt="person icon"
                                    width="24"
                                    height="24"
                                />
                                <input
                                    id="registration-last-name"
                                    className="d-block text-input"
                                    name='lName'
                                    value={data.lName}
                                    onChange={HandleChange}
                                    type={"text"}
                                    placeholder="Last Name"
                                />
                            </div>
                            {!(data.fName) || !(data.lName) ? (
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

export default JoinName;
