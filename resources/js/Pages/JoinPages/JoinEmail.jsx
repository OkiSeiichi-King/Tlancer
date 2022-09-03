import { useNavigate, Link } from '@inertiajs/inertia-react';
import { useContext, useState, useEffect } from "react";
import JoinNav from "./JoinNav";
import JoinRightWrapper from "./JoinRightWrapper";
import imgSignup from "../../images/Registration/img-signup-1.webp";
import SignupContext from "../../store/signup-context";
import padlock from "../../images/Registration/padlock.svg";
import atSign from "../../images/Registration/at-sign.svg";
import AuthContext from "../../store/auth-context";

const JoinEmail = (props) => {
  console.log("email rendered");
  // const passRef = useRef();
  // const confirmPassRef = useRef();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [tokenVal, setTokenVal] = useState("");
  const [tokenHasValue, setTokenHasValue] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const signupCTX = useContext(SignupContext);
  const authCTX = useContext(AuthContext);
  const navigate = useNavigate();

  console.log("validity: " + isValid);

  function emailChecker(value) {
    return value.includes("@");
  }

  useEffect(() => {
    if (emailChecker(email) && pass === confirmPass && pass.length > 3) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [email, pass, confirmPass]);

  const submitHandler = async (e) => {
    e.preventDefault();

    signupCTX.actions.passwordHandler(confirmPass);
    signupCTX.actions.emailHandler(email);
    const body = {
      email: email,
      password: confirmPass,
    };
    const settings = {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const url = "https://tlancer.herokuapp.com/api/signup-tmp";
    setIsLoading(true);
    console.log(
      "join email fetch started with body of: " + JSON.stringify(body)
    );
    try {
      const signUpResponse = await fetch(url, settings);

      if (signUpResponse.ok) {
        console.log("join email fetch POST successfully sent");
        setIsLoading(false);
        const responseData = await signUpResponse.json();
        console.log("responseData: " + JSON.stringify(responseData));
        if (responseData.message === "User email already exist") {
          setTokenHasValue(false);
          console.log("user already exists error");
        }
        if (responseData.data.token) {
          setTokenVal(responseData.data.token);
          console.log("token value: " + tokenVal);
          authCTX.login(responseData.data.token);
          signupCTX.actions.tokenHandler(responseData.data.token);
          // authCTX.userLogIn();
          localStorage.setItem("token", responseData.data.token);
          navigate("/verify-account");
        }
      } else {
        const responseError = signUpResponse.json();
        console.log("error response: " + responseError.response.status);

        let errorMessage = "";
        if (
          responseError &&
          responseError.error &&
          responseError.error.message
        ) {
          errorMessage = responseError.error.message;

          throw new Error(errorMessage);
        }
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <style>{`

      .registration-email {
        border-radius: 12px;
        border: 1px solid #d1d5db;
      }


    `}</style>
      <JoinNav joinData={props.joinData} to="/" button="close" />
      <section className="container-fluid registration fade-in d-flex flex-column p-md-5 mb-5">
        <div className="container d-flex flex-column-reverse flex-md-row  align-items-center">
          <div className="col col-md-7 me-md-5 text-center text-md-start mb-5">
            <h2 className="account-heading mb-3">Continue to registration</h2>

            {tokenHasValue ? (
              <h3 className="h1 display-5 fw-bold account-form-label">
                Type in your email and password to continue
              </h3>
            ) : (
              <h3 className="h1 display-5 fw-bold text-danger">
                User email already exists
              </h3>
            )}

            <form>
              <div className="w-75 my-3 mt-md-4 p-3 registration-name d-flex flex-row align-items-center registration-input me-5">
                <img
                  className="me-3"
                  src={atSign}
                  alt="@"
                  width="24"
                  height="24"
                />
                <input
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  id="join-email-input"
                  className="d-block text-input"
                  type={"email"}
                  placeholder="Enter your email"
                />
              </div>
              <br />
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
                  required
                  onChange={(e) => setPass(e.target.value)}
                  // ref={passRef}
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
                  className="d-block text-input"
                  type={"password"}
                  placeholder="Confirm password"
                  // ref={confirmPassRef}
                  onChange={(e) => setConfirmPass(e.target.value)}
                  required
                />
              </div>
              <h5 className="password-subtitle mb-5">
                Password must include, Letters, numbers, and symbols
              </h5>
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
                <Link to={"/success"}>
                  <button
                    onClick={submitHandler}
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
                </Link>
              )}
              {}
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
