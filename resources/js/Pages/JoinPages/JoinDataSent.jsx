import { Link, useNavigate } from '@inertiajs/inertia-react';
import { useRef, useState, useContext } from "react";
import AuthContext from "../../store/auth-context";
import atSign from "../../images/Registration/at-sign.svg";
import padlock from "../../images/Registration/padlock.svg";
import JoinNav from "./JoinNav";
import JoinRightWrapper from "./JoinRightWrapper";
import imgSignup from "../../images/Registration/img-signup-7.webp";
import SignupContext from "../../store/signup-context";
const JoinDataSent = (props) => {
  console.log("data sent rendered");
  const passRef = useRef();
  const emailRef = useRef();
  const navigate = useNavigate();
  const authCTX = useContext(AuthContext);
  const sighupCTX = useContext(SignupContext);
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
          authCTX.login(localStorage.getItem("token"));
          console.log("verified == true");
        } else {
          setIsValid(false);
          setIsLoading(false);
          console.log("not valid values: ", data.data);
        }
        console.log("response data: " + JSON.stringify(data));
        console.log(data.data.verified);

        navigate(`/${sighupCTX.data.account}`);
      }
    } catch (e) {
      console.log("error: " + e);
    }
  };

  return (
    <>
      <style>{`


    `}</style>
      <JoinNav to="/" button="close" />
      <section className="container-fluid registration fade-in d-flex flex-column p-md-5 mb-5">
        <div className="container d-flex flex-column-reverse flex-md-row  align-items-center">
          <div className="col col-md-7 me-md-5 text-center text-md-start mb-5">
            <h2 className="account-heading mb-3">Congratulations!</h2>
            <h3 className="h1 display-5 fw-bold account-form-label">
              You have been successfully registered. Please log in below
            </h3>
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
                <button className="btn-loading btn btn-lg">Loading </button>
              )}
            </div>
          </div>
          <div className="col col-md-5">
            <JoinRightWrapper src={imgSignup} alt="person using laptop" />
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinDataSent;
