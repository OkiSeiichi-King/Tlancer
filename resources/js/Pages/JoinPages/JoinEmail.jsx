import {Link, useForm} from '@inertiajs/inertia-react';
import JoinRightWrapper from "./JoinRightWrapper";
import imgSignup from "../../images/Registration/img-signup-1.webp";
import atSign from "../../images/Registration/at-sign.svg";
import Input from "@/Components/Input";
import JoinNav from './JoinNav';
import padlock from "../../images/Registration/padlock.svg";
import Button from "@/Components/Button";
import {Trans} from "@/Pages/Localization/Trans";
import InputError from "@/Components/InputError";
import React from "react";


const JoinEmail = () => {

    // Request fix

    const {data, setData, post, processing, errors, reset} = useForm({
        email: '',
        password: '',
        password_confirmation: '',
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('register'));
    };

    return (
        <>
            <JoinNav to='welcome' button='close'/>

            <section className="container-fluid registration fade-in d-flex flex-column p-md-5 mb-5">
                <div className="container d-flex flex-column-reverse flex-md-row  align-items-center">
                    <div className="col col-md-7 me-md-5 text-center text-md-start mb-5">
                        <h2 className="account-heading mb-3">Continue to registration</h2>

                        <h3 className="h1 display-5 fw-bold account-form-label">
                            Type in your email and password to continue
                        </h3>

                        <form onSubmit={submit}>
                            <div
                                className="w-75 my-3 my-md-5 p-3 registration-name d-flex flex-row align-items-center registration-input form-group">
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
                            <InputError message={errors.email} className="mt-2"/>

                            <div
                                className="w-75 my-3 mt-md-4 p-3 registration-name d-flex flex-row align-items-center registration-input me-5">
                                <img
                                    className="me-3"
                                    src={padlock}
                                    alt="@"
                                    width="24"
                                    height="24"
                                />
                                <Input
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="d-block text-input"
                                    autoComplete="new-password"
                                    handleChange={onHandleChange}
                                    placeholder="Enter password"
                                    required
                                />
                            </div>
                            <InputError message={errors.password} className="mt-2"/>

                            <div
                                className="w-75 my-3 mt-md-4 p-3 registration-name d-flex flex-row align-items-center registration-input me-5">
                                <img
                                    className="me-3"
                                    src={padlock}
                                    alt="padlock icon"
                                    width="24"
                                    height="24"
                                />
                                <Input
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="d-block text-input"
                                    placeholder="Confirm password"
                                    handleChange={onHandleChange}
                                    required
                                />
                            </div>
                            <InputError message={errors.password_confirmation} className="mt-2"/>

                            <h5 className="password-subtitle">
                                Password must include, Letters, numbers, and symbols
                            </h5>

                            <br/>
                            {data.password !== data.password_confirmation || data.password.length < 8 ? (
                                <button disabled className="btn-registration btn btn-lg mt-5">
                                    {Trans("Continue")}
                                    <i className="bi bi-arrow-right ms-5"></i>
                                </button>
                            ) : (
                                <Button processing={processing} className="btn-registration btn btn-lg mt-5">
                                    {Trans("Continue")}
                                    <i className="bi bi-arrow-right ms-5"></i>
                                </Button>
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
