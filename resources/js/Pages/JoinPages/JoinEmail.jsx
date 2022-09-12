import {useNavigate, Link, InertiaLink, useForm} from '@inertiajs/inertia-react';
import { useContext, useState, useEffect } from "react";
import JoinRightWrapper from "./JoinRightWrapper";
import imgSignup from "../../images/Registration/img-signup-1.webp";
import atSign from "../../images/Registration/at-sign.svg";
import Input from "@/Components/Input";


const JoinEmail = (props) => {

    console.log(props);
    const {data, setData, post, processing, errors, reset} = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const [Page, setPage] = useState(0);

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    const [isLoading, setIsLoading] = useState(false);
    const [isValid, setIsValid] = useState(true);

/*

    const [email, setEmail] = useState("");
    const [tokenHasValue, setTokenHasValue] = useState(true);

    const [isValid, setIsValid] = useState(true);

    console.log("validity: " + isValid);

    function emailChecker(value) {
        return value.includes("@");
    }

    useEffect(() => {
        if (emailChecker(email)) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }, [email]);

    const submitHandler =  (e) => {
        e.preventDefault();

    };*/

    return (
        <>
            <section className="container-fluid registration fade-in d-flex flex-column p-md-5 mb-5">
                <div className="container d-flex flex-column-reverse flex-md-row  align-items-center">
                    <div className="col col-md-7 me-md-5 text-center text-md-start mb-5">
                        <h2 className="account-heading mb-3">Continue to registration</h2>


                        <h3 className="h1 display-5 fw-bold account-form-label">
                            Type in your email and password to continue
                        </h3>


                        <form>

                            <div className="w-75 my-3 my-md-5 p-3 registration-name d-flex flex-row align-items-center registration-input form-group">
                                <img
                                    className="me-3"
                                    src={atSign}
                                    alt="@"
                                    width="24"
                                    height="24"
                                />
                                <label className="d-none" htmlFor="login-email">
                                    Enter email
                                </label>
                                <Input
                                    type="text"
                                    name="email"
                                    value={data.email}
                                    className="d-block text-input"
                                    autoComplete="username"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                    placeholder="Enter Email"
                                />

                            </div>

                            <div className="w-75 my-3 my-md-5 p-3 registration-name d-flex flex-row align-items-center registration-input form-group">
                                <img
                                    className="me-3"
                                    src={atSign}
                                    alt="@"
                                    width="24"
                                    height="24"
                                />
                                <label className="d-none" htmlFor="login-email">
                                    Enter email
                                </label>

                                <Input
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="d-block text-input"
                                    handleChange={onHandleChange}
                                    placeholder="Enter Password"
                                />

                            </div>

                            <div className="w-75 my-3 my-md-5 p-3 registration-name d-flex flex-row align-items-center registration-input form-group">
                                <img
                                    className="me-3"
                                    src={atSign}
                                    alt="@"
                                    width="24"
                                    height="24"
                                />
                                <label className="d-none" htmlFor="login-email">
                                    Enter email
                                </label>

                                <Input
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="d-block text-input"
                                    required
                                    placeholder="Confirm Password"
                                />
                            </div>


                            <br />
                            {isLoading ? (
                                <div className="d-flex align-items-center w-25 h5">
                                    <strong className="visually-hidden">Loading...</strong>
                                    <div
                                        className="spinner-border mx-auto"
                                        role="status"
                                        aria-hidden="true"
                                    ></div>
                                </div>
                            ) : !isValid ? (
                                <button disabled className="btn-registration btn btn-lg">
                                    <span>Continue </span>
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
                                <InertiaLink href='name'>
                                    <button
                                        // onClick={submitHandler}
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
                                </InertiaLink>
                            )}
                        </form>
                    </div>
                    <div className="col col-md-5">
                        <JoinRightWrapper
                            id="email-img"
                            src={imgSignup}
                            alt="person using laptop"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default JoinEmail;
