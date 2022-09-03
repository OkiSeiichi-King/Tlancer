import { Link } from '@inertiajs/inertia-react';
import { useContext } from "react";
import logo from "../images/logo.webp";
import AuthContext from "../store/auth-context";
const TutorNav = () => {
  console.log("navbar rendered");

  const authCTX = useContext(AuthContext);
  console.log("authCTX value: " + JSON.stringify(authCTX));

  return (
    <>
      <style>{`

        .tutors-sup {
            font-family: 'Work Sans', sans-serif;
            color: var(--dark-blue);
            font-weight: 600;
        }

        #tutor-nav-logo {
            text-decoration: none;
        }

        header {
          overflow-x: hidden;
        }

        nav {
            font-family: 'Work Sans', sans-serif;
            z-index: 100;
        }

        .nav-link {
            color: var(--dark-blue);
            font-size: 20px;
        }

        .navbar-toggler:focus {
          border-width: 2px;
        }

        .active {
            font-weight: bold;
            text-decoration: dashed underline;
            text-decoration-color: var(--active-link);
            text-underline-offset: 6px;
        }

        .btn-nav {
            border: 1px solid var(--dark-blue);
            color: var(--dark-blue);
            width: 96px;
            height: 36px;
            font-family: 'Ubuntu', san-serif;
            font-weight: medium;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 15px;
        }



        .nav-btn-container {
          display: flex;
          align-items: center;
        }


        @media (max-width: 1024px) {

          .nav-item:first-of-type {
            padding-top: 3rem;
          }
        }
    `}</style>
      <header className="contianer-fluid">
        <nav className="navbar px-3 navbar-expand-lg navbar-light bg-white fixed-top w-100">
          <div className="container mt-2 mx-auto px-0">
            <div className="d-flex flex-row-reverse align-items-center w-100">
              <Link className="me-lg-auto" id="tutor-nav-logo" to="/tutor">
                <img
                  className="home-logo p-1"
                  src={logo}
                  alt="Tlancer"
                  width={"374"}
                  height={"90"}
                />
                <span className="tutors-sup h4 mx-2">tutors</span>
              </Link>

              <button
                className="navbar-toggler me-auto"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbar"
                aria-controls="navbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>

            <div className="collapse navbar-collapse" id="navbar">
              <ul className="navbar-nav m-auto mb-2 mb-lg-0 text-center">
                <li className="nav-item">
                  <Link
                    to={"/tutor"}
                    className="nav-link text-nowrap"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/tutor/courses"}
                    className="nav-link text-nowrap"
                    aria-current="page"
                  >
                    Courses
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/tutor/attendance"}
                    className="nav-link text-nowrap"
                    aria-current="page"
                  >
                    Attendance
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/tutor/students"}
                    className="nav-link text-nowrap"
                    aria-current="page"
                  >
                    Students
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/tutor/sales"}
                    className="nav-link text-nowrap"
                    aria-current="page"
                  >
                    Sales
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/tutor/analytics"}
                    className="nav-link text-nowrap"
                    aria-current="page"
                  >
                    Analytics
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/tutor/assignments"}
                    className="nav-link text-nowrap"
                    aria-current="page"
                  >
                    Assignments
                  </Link>
                </li>
                <li></li>
              </ul>
              <div className="d-flex align-items-center justify-content-center my-5 my-lg-0 ms-auto ms-lg-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fillRule="currentColor"
                  className="me-3 bi bi-calendar"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fillRule="currentColor"
                  className="me-3 bi bi-chat-left-dots"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fillRule="currentColor"
                  className="me-3 bi bi-bag"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fillRule="currentColor"
                  className="me-3 bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default TutorNav;
