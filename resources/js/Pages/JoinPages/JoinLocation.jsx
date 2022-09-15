import { Link } from '@inertiajs/inertia-react';
import { useState} from "react";
import JoinNav from "./JoinNav";
import JoinRightWrapper from "./JoinRightWrapper";
import imgSignup from "../../images/Registration/img-signup-4.webp";
import { useForm } from '@inertiajs/inertia-react';



const JoinLocation = (props) => {
    const {data, setData, post, processing, errors, reset} = useForm({
        location: '',
    });
    // const [loc, setLoc] = useState();
    // console.log("location: " + loc);
    const [locIsValid, setLocIsValid] = useState(false);

    const HandleChange = (e) => {
        setData(
            e.target.name,
            e.target.value
        )
        setLocIsValid(true)
    }


    const submit = (e) => {
        e.preventDefault();
        post(route('store-location'))
        // console.log(loc);
    }

    return (


            <>

            <JoinNav to='choose-dob' button='back'/>

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

                        <form onSubmit={submit}>
                            <select
                                id="join-location"
                                name='location'
                                onChange={HandleChange}
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

export default JoinLocation;
