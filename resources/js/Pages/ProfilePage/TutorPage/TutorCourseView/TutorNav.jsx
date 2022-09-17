import {Link, usePage} from '@inertiajs/inertia-react';
import logo from '../../../images/logo.webp'
import { Trans } from '@/Pages/Localization/Trans'
import tutorNavAccount from '../images/tutorNavAccount.png'


const localTypes = {
    Eng: "Eng",
    Ka: "Ka",
};

const TutorNav = () => {
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
                                        to={"/tutor/explore"}
                                        className="nav-link text-nowrap"
                                        aria-current="page"
                                    >
                                        {Trans("Explore")}
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
                                    <svg width="57" height="4" viewBox="0 0 57 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 2H57" stroke="#0EBE6A" strokeWidth="3" strokeDasharray="11 11"/>
                                    </svg>
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
                                        href={route("tutor-home")}
                                        className={"nav-link text-nowrap"}
                                    >
                                        {Trans("Tutor")}
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
                                <li className="nav-item">
                                    <Link
                                        to={"/tutor/orders"}
                                        className="nav-link text-nowrap"
                                        aria-current="page"
                                    >
                                        {Trans("Orders")}
                                    </Link>
                                </li>
                                <li></li>
                            </ul>
                            <div className="d-flex align-items-center justify-content-center my-5 my-lg-0 ms-auto ms-lg-4">
                                <div className='d-flex justify-content-center align-items-center'>
                                    <span className='px-1'>
                                        <svg width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M16.875 2.625V4.875M7.125 2.625V4.875M3.375 10.875H20.625M2.625 5.625H21.375V21.375H2.625V5.625Z"
                                                  stroke="#00274C"
                                                  strokeWidth="2"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>

                                    <span className='px-1'>
                                        <svg width="25"
                                             height="24"
                                             viewBox="0 0 25 24"
                                             fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M21.75 21.375V7.875H7.5V16.875H16.5L21.75 21.375Z"
                                                stroke="#00274C"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                            <path
                                                d="M7.5 10.875L3 15.375V2.625H18V7.125"
                                                stroke="#00274C"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                        </svg>
                                    </span>

                                    <span className='px-1'>
                                        <svg width="25"
                                             height="24"
                                             viewBox="0 0 25 24"
                                             fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M4.875 7.125H20.625V21.375H4.875V7.125Z"
                                                stroke="#00274C"
                                                strokeWidth="2.25"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                            <path
                                                d="M9.375 11.625C9.375 13.875 10.875 15.375 12.75 15.375C14.625 15.375 16.125 13.875 16.125 11.625M4.875 7.125L7.125 2.625H18.375L20.625 7.125"
                                                stroke="#00274C"
                                                strokeWidth="2.25"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"/>
                                        </svg>
                                    </span>

                                    <span className='px-1' style={{ marginRight: '15px'}}>
                                        <img alt='tutorNavAccount' src={tutorNavAccount} width='50' height='50' />
                                    </span>
                                </div>

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
