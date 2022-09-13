import { Link} from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia'
import {  useState, useEffect } from "react";
import JoinRightWrapper from "./JoinRightWrapper";
import imgSignup from "../../images/Registration/img-signup-1.webp";
import atSign from "../../images/Registration/at-sign.svg";
import Input from "@/Components/Input";
// import JoinNav from './JoinNav';
import JoinNav from './JoinNav';
import padlock from "../../images/Registration/padlock.svg";
import { post } from 'jquery';





const JoinEmail = (props) => {

    // const [isLoading, setIsLoading] = useState(false);
    // const [isValid, setIsValid] = useState(true);

    const [Data, setData] = useState({
        email: '',
        pass:'',
        confirmPass:''
    });

    
    const handleSubmit =  (e) => {
        e.preventDefault();
        Inertia.post('register', Data);
     };
     const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(Data =>({
            ...Data,[name]:value,
        }))
        // console.log(Data)
       }
    

    // const [pass, setPass] = useState("");
    // const [confirmPass, setConfirmPass] = useState("");
    // const [email, setEmail] = useState("");

    /*
    const [tokenHasValue, setTokenHasValue] = useState(true);

    const [isValid, setIsValid] = useState(true);

    console.log("validity: " + isValid);

    function emailChecker(value) {
        return value.includes("@");
    }
    */
   

    return (
        <>


   <JoinNav to='welcome' button='close'/>
     
            <section className="container-fluid registration fade-in d-flex flex-column p-md-5 mb-5">
                <div className="container d-flex flex-column-reverse flex-md-row  align-items-center">
                    <div className="col col-md-7 me-md-5 text-center text-md-start mb-5">
                        <h2 className="account-heading mb-3">Continue to registration</h2>


                        <h3 className="h1 display-5 fw-bold account-form-label">
                            Type in your email and password  to continue
                        </h3>


                        
                        <form onSubmit={handleSubmit}>

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
                                    value={Data.email}
                                    className="d-block text-input"
                                    autoComplete="username"
                                    isFocused={true}
                                    handleChange={handleChange}
                                    placeholder="Enter Email"
                                />

                            </div>

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
                                    name='pass'
                                    value={Data.pass}
                                    onChange={handleChange}
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
                                    name='confirmPass'
                                    value={Data.confirmPass}                                    className="d-block text-input"
                                    type={"password"}
                                    placeholder="Confirm password"
                                    onChange={handleChange}
                                />
                            </div>
                            <h5 className="password-subtitle">
                                Password must include, Letters, numbers, and symbols
                            </h5>




                            <br />
                            {Data.pass !== Data.confirmPass || Data.pass.length < 1 ? (
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
                                <Link href='email-verification'>
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
