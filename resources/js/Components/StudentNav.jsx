import { Link } from '@inertiajs/inertia-react';
import { useContext } from "react";
import logo from "../images/logo.webp";
import AuthContext from "../store/auth-context";
const StudentNav = () => {
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
        #student-nav-logo {
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
              <Link className="me-lg-auto" id="student-nav-logo" to="/student">
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
                    to={"/student"}
                    className="nav-link text-nowrap"
                    aria-current="page"
                  >
                    Explore
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/student/courses"}
                    className="nav-link text-nowrap"
                    aria-current="page"
                  >
                    My Courses
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/student/attendance"}
                    className="nav-link text-nowrap"
                    aria-current="page"
                  >
                    Attendance
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/tutor"}
                    className="nav-link text-nowrap"
                    aria-current="page"
                  >
                    Tutors
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/student/assignments"}
                    className="nav-link text-nowrap"
                    aria-current="page"
                  >
                    Assignments
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to={"/student/orders"}
                    className="nav-link text-nowrap"
                    aria-current="page"
                  >
                    Orders
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default StudentNav;
