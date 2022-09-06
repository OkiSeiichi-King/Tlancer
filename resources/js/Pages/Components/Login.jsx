import { Link, useForm /*useNavigate*/ } from "@inertiajs/inertia-react";
import Input from "@/Components/Input";
import JoinRightWrapper from "@/pages/JoinPages/JoinRightWrapper";
import imgLogin from "@/images/Registration/img-login.webp";
import atSign from "@/images/Registration/at-sign.svg";
import padlock from "@/images/Registration/padlock.svg";
import JoinNav from "@/pages/JoinPages/JoinNav";
import InputError from "@/Components/InputError";
import Button from "@/Components/Button";
const Login = (props) => {
    console.log("login rendered");

    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    /*TODO: must changed from quote_en/quote_ka by localization*/

    const quote = props.quote.quote_en;

    console.log(quote);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <>
            <style>{`
      .login-btn-container, .login-btn-container span {
        color: #00274c;
      }

      @keyframes loading {
        0%{
          opacity: 1;
        }
        50%{
          opacity: 0;
        }
        100%{
          opacity: 1;
        }
      }

      .btn-loading {
        background: #fff;
        animation: loading 2s infinite;
        font-weight: bold;
      }
      .quote-container {
        position: relative;
        bottom: 1rem;
        width: 100%;
      }

      .quote-container h4 {
        font-family: 'Ubuntu', san-serif;
        font-weight: 500;
        color: #00274c;
      }

        .text-input {
        border: none;
        width: 100%;
      }

        .text-input:hover, .text-input:focus {
        outline: none;
        border: none;
      }

      .quote-container p {
        font-family: 'Work Sans', san-serif;
        font-weight: 500;
        color: #808080;
      }

      @media (min-width: 768px) {
        .quote-container {
        bottom: 3rem;
        width: 50%;
      }
      }

    `}</style>
            {/*TODO: instead of react router link, we pass to JoinNav route name from ./routes/web.php
            TODO: remove this comment after acknowledged */}
            <JoinNav to="welcome" button="close" />

            <section className="container-fluid registration fade-in d-flex flex-column p-md-5 mb-5">
                <div className="container d-flex flex-column-reverse flex-md-row align-items-center">
                    <div className="col col-md-7 me-md-5 pe-md-5 text-center text-md-start mb-5">
                        <h2 className="account-heading mb-3">Welcome back!</h2>
                        <h3 className="h1 display-5 fw-bold account-form-label">
                            Login
                        </h3>

                        <form className="my-5" onSubmit={submit}>
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
                                    src={padlock}
                                    alt="padlock icon"
                                    width="24"
                                    height="24"
                                />
                                <label
                                    className="d-none"
                                    htmlFor="login-password"
                                >
                                    Enter password
                                </label>
                                <Input
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="d-block text-input"
                                    placeholder="Enter password"
                                    autoComplete="current-password"
                                    handleChange={onHandleChange}
                                />
                            </div>

                            <InputError
                                message={errors.email}
                                className="mt-0 mb-5"
                            />

                            <div className="my-4 login-btn-container">
                                <Button
                                    className="btn-registration btn-lg"
                                    processing={processing}
                                >
                                    Log in
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
                                </Button>
                            </div>
                        </form>
                    </div>
                    <div className="col col-md-5">
                        <JoinRightWrapper
                            src={imgLogin}
                            alt="person using laptop"
                        />
                        {/*TODO: need to implement Localization for double language*/}
                        <div className="quote-container">
                            <h4>Quote of the day</h4>
                            <p>{quote}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
