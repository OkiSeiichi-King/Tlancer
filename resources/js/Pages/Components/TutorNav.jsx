import {Link, usePage} from '@inertiajs/inertia-react';
import { useContext } from "react";
import logo from "../images/logo.webp";
import AuthContext from "@/store/auth-context";
import { Trans } from "../Localization/Trans";


const localTypes = {
    Eng: "Eng",
    Ka: "Ka",
};

const TutorNav = () => {
  console.log("navbar rendered");

  const authCTX = useContext(AuthContext);
  console.log("authCTX value: " + JSON.stringify(authCTX));

    let auth = usePage().props.auth;

    const languageBtn = (
        <li id="lang-btn-list-item" className="d-flex dropdown">
            <button
                className="nav-link dropdown-toggle border-0"
                type="button"
                href="#"
                id="navbardrop"
                data-bs-toggle="dropdown"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-globe me-1"
                    viewBox="0 0 16 16"
                >
                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                </svg>
                {auth.locale}
            </button>
            <ul className="dropdown-menu">
                <a className="dropdown-item" href={route("language", "en")}>
                    {localTypes.Eng}
                </a>
                <a className="dropdown-item" href={route("language", "ka")}>
                    {localTypes.Ka}
                </a>
            </ul>
        </li>
    );

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
                      {Trans("Home")}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href={route("tutor-courses")}
                    className="nav-link text-nowrap"
                    aria-current="page"
                  >
                    {Trans("My Courses")}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/tutor/attendance"}
                    className="nav-link text-nowrap"
                    aria-current="page"
                  >
                    {Trans("Attendance")}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/tutor/students"}
                    className="nav-link text-nowrap"
                    aria-current="page"
                  >
                    {Trans("Students")}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/tutor/sales"}
                    className="nav-link text-nowrap"
                    aria-current="page"
                  >
                    {Trans("Sales")}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/tutor/analytics"}
                    className="nav-link text-nowrap"
                    aria-current="page"
                  >
                    {Trans("Analytics")}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/tutor/assignments"}
                    className="nav-link text-nowrap"
                    aria-current="page"
                  >
                    {Trans("Assignments")}
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
                  <div className="collapse navbar-collapse" id="navbar">
                   <ul className="navbar-nav m-auto mb-2 mb-lg-0 text-center">
                    {languageBtn}
                   </ul>
                  </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default TutorNav;
