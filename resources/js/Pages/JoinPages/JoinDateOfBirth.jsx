import { Link } from '@inertiajs/inertia-react';
import { useState, useContext } from "react";
import JoinNav from "./JoinNav";
import JoinRightWrapper from "./JoinRightWrapper";
import imgSignup from "../../images/Registration/img-signup-3.webp";
import { useForm } from '@inertiajs/inertia-react';




const JoinName = (props) => {
    // console.log("dob rendered");
    // const [dateValue, setDateValue] = useState();
    const {data, setData, post, processing, errors, reset} = useForm({
        dob: '',
    });

    const HandleChange = (e) => {
        setData(
            e.target.name,
            e.target.value
        )
    }

    const dateSubmitHandler = (e) => {
        e.preventDefault()
        // console.log(dob);
        post(route('store-date'))
    }

    return (

        <>
            <JoinNav to='choose-name' button='back' />


            <style>{`

      .registration-date {
        border-radius: 12px;
        border: 1px solid #d1d5db;
        text-align: center;
        color: #00274c;
      }

    `}</style>

            <section className="mb-5 container-fluid registration fade-in d-flex flex-column p-md-5">
                <div className="container d-flex flex-column-reverse flex-md-row align-items-center">
                    <div className="mb-5 text-center col col-md-7 me-md-5 text-md-start">
                        <h2 className="mb-3 account-heading">Age is just a number</h2>
                        <h3 className="h1 display-5 fw-bold account-form-label">
                            Pick your birth date
                        </h3>

                        <form onSubmit={dateSubmitHandler} className="my-5">
                            <input
                                id="join-date"
                                name='dob'
                                onChange={HandleChange}
                                value={data.dob}
                                type={"date"}
                                className="p-3 mb-5 registration-date h4 registration-input d-block"
                                placeholder="DD"
                            />

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
