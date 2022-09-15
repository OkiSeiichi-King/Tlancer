import { Link } from '@inertiajs/inertia-react';
import { useState } from "react";
import JoinNav from "./JoinNav";
import JoinRightWrapper from "./JoinRightWrapper";
import imgSignup from "../../images/Registration/img-signup-5.webp";
import phoneIcon from "../../images/Registration/charm_phone.svg";
import { useForm } from '@inertiajs/inertia-react';

const JoinPhoneNumber = () => {
    // const [phone, setPhone] = useState('');

    const {data, setData, post, processing, errors, reset} = useForm({
        phone: '',
    });

    const HandleChnange = (e) => {
        setData(
            e.target.name,
            e.target.value
        )
    }
    const submit = (e) => {
        e.preventDefault();
        post(route('store-number'))
        console.log("verify submit started");

    };
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
            <JoinNav to="choose-location" button="back" />
            <section className="mb-5 container-fluid registration fade-in d-flex flex-column p-md-5">
                <div className="container d-flex flex-column-reverse flex-md-row align-items-center">
                    <div className="mb-5 text-center col col-md-7 me-md-5 text-md-start">
                        <h2 className="mb-3 account-heading">
                            Use a valid phone number close by
                        </h2>
                        <h3 className="h1 display-5 fw-bold account-form-label">
                            Enter Phone Number
                        </h3>
                        <form onSubmit={submit}>
                            <div className="flex-row p-3 my-5 w-75 registration-name d-flex align-items-center registration-input">
                                <img
                                    className="me-3"
                                    src={phoneIcon}
                                    alt="person icon"
                                    width="24"
                                    height="24"
                                />
                                <input
                                    id="registration-phone"
                                    name='phone'
                                    value={data.phone}
                                    onChange={HandleChnange}
                                    className="d-block"
                                    type={"number"}
                                    placeholder="Enter phone number"
                                />
                            </div>
                            {!data.phone ? (
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
