import { Link, /*useNavigate*/ } from '@inertiajs/inertia-react';
import { useState, useContext, useRef } from "react";
import JoinRightWrapper from "../pages/JoinPages/JoinRightWrapper";
import imgLogin from "../images/Registration/img-login.webp";
import atSign from "../images/Registration/at-sign.svg";
import padlock from "../images/Registration/padlock.svg";
import JoinNav from "../pages/JoinPages/JoinNav";
import AuthContext from "../store/auth-context";
// import SignUpContext from "../../store/signup-context";

// import LoginButton from "../../Components/LoginButton";
const Login = () => {
  console.log("login rendered");
  const passRef = useRef();
  const emailRef = useRef();
  //const navigate = useNavigate();
  const authCTX = useContext(AuthContext);
  // const sighupCTX = useContext(SignUpContext);
  const [isValid, setIsValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("login fetch started");
    const loginData = {
      email: emailRef.current.value,
      password: passRef.current.value,
    };
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    };
    console.log(JSON.stringify(loginData));
    try {
      setIsLoading(true);
      const formResponse = await fetch(
        "https://tlancer.herokuapp.com/api/login",
        settings
      );
      if (!formResponse.ok) {
        setIsLoading(false);
        throw new Error("error during submission");
      } else {
        const data = await formResponse.json();
        setIsLoading(false);
        if (data.success) {
          authCTX.userLogIn();
          authCTX.setName(data.data.first_name);
          authCTX.setAccount(data.data.type);
          authCTX.login(localStorage.getItem("token"));
          console.log("verified == true");
        } else {
          setIsValid(false);
          setIsLoading(false);
          console.log("not valid values: " + data.data);
        }
        console.log("response data: " + JSON.stringify(data));
        console.log(data.data.verified);
        /*navigate(`/${data.data.type}`);*/
      }
    } catch (e) {
      console.log("error: " + e);
    }
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
      <JoinNav to="/" button="close" />
      <section className="container-fluid registration fade-in d-flex flex-column p-md-5 mb-5">
        <div className="container d-flex flex-column-reverse flex-md-row align-items-center">
          <div className="col col-md-7 me-md-5 pe-md-5 text-center text-md-start mb-5">
            <h2 className="account-heading mb-3">Welcome back!</h2>
            <h3 className="h1 display-5 fw-bold account-form-label">Login</h3>

            <form className="my-5">
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
                <input
                  id="login-email"
                  className="d-block text-input form-control"
                  type={"text"}
                  placeholder="Enter email"
                  ref={emailRef}
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
                <label className="d-none" htmlFor="login-password">
                  Enter password
                </label>
                <input
                  id="login-password"
                  className="d-block text-input form-control"
                  type={"password"}
                  placeholder="Enter password"
                  ref={passRef}
                />
              </div>
              {!isValid && (
                <p className="text-danger">Invalid username or password</p>
              )}
            </form>

            <div className="my-4 login-btn-container">
              {!isLoading ? (
                <Link
                  onClick={submitHandler}
                  className="btn-registration btn btn-lg"
                  to={"/"}
                >
                  Login{" "}
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
                </Link>
              ) : (
                <div className="d-flex align-items-center w-25 h5">
                  <strong className="visually-hidden">Loading...</strong>
                  <div
                    className="spinner-border mx-auto"
                    role="status"
                    aria-hidden="true"
                  ></div>
                </div>
              )}
            </div>
          </div>
          <div className="col col-md-5">
            <JoinRightWrapper src={imgLogin} alt="person using laptop" />
            <div className="quote-container">
              <h4>Quote of the day</h4>
              <p>
                Hackton is the leading online coding tutor for beginners join us
                today to take a step further.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
