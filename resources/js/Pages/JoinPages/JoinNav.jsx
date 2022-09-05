import { Link } from '@inertiajs/inertia-react';
import logo from "../../images/logo.webp";
import closeBtn from "../../images/Registration/blueX.svg";
import backBtn from "../../images/Registration/arrow-left.svg";

const JoinNav = (props) => {
  console.log("navbar rendered");
  console.log(props.to);
  return (
    <>
      <style>{`
      .registration-back-btn {
        font-family: 'Ubuntu', san-serif;
        font-weight: 500;
        text-decoration: none;
        color: #00274c;
        font-size: 1.5rem;
      }
      .registration-back-btn:hover {
        color: #00274c;
        opacity: 0.7;
      }
      #registration-back-btn {
        width: 25px;
        height: 25px;
      }
      #registration-close-btn {
        width: 35px;
        height: 35px;
      }


      .reg-logo{
        width: 150px;
        height: 35px;
      }

      @media (min-width: 768px) {

      #registration-close-btn {
        width: 50px;
        height: 50px;
      }
      #registration-back-btn {
        width: 50px;
        height: 50px;
      }
      .reg-logo{
        width: 187px;
        height: 45px;
      }

      }


    `}</style>
      <header className="container-fluid">
        <nav className="container navbar navbar-expand-lg navbar-light bg-white fixed-top w-100 d-flex align-items-center justify-content-between p-2 pt-4">
          {props.button === "close" ? (
            <Link href={route(props.to)}>
              <img
                id="registration-close-btn"
                src={closeBtn}
                alt="close button"
                width={"70"}
                height={"70"}
              />
            </Link>
          ) : (
            <div className="registration-back-btn-container col">
              <Link className="registration-back-btn" href={route(props.to)}>
                <img
                  id="registration-back-btn"
                  src={backBtn}
                  alt="back button"
                  width={"70"}
                  height={"70"}
                />{" "}
                Back
              </Link>
            </div>
          )}
          <Link className="col d-flex" to="/">
            <img
              className="reg-logo ms-auto"
              src={logo}
              alt="Tlancer"
              width={"374"}
              height={"90"}
            />
          </Link>
        </nav>
      </header>
    </>
  );
};

export default JoinNav;
