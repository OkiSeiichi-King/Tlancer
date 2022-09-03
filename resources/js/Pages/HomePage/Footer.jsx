import footerLogo from "../../images/footer/footerLogo.svg";
import facebook from "../../images/footer/facebook.svg";
import linkedin from "../../images/footer/linkedin.svg";
import twitter from "../../images/footer/twitter.svg";
import github from "../../images/footer/github.svg";
import dribble from "../../images/footer/dribble.svg";
import mysteryicon from "../../images/footer/mysteryicon.svg";
const Footer = () => {
  return (
    <>
      <style>{`
        #copyright {
            font-family: 'Work Sans', sans-serif;
            font-size: .8rem;
            font-weight: 500;
            color: #6b7280;
        }
        
      `}</style>

      <footer className="container-fluid bg-white">
        <div className="container">
          <hr />
          <div className="d-flex flex-column flex-md-row align-items-md-end mt-4 mb-5">
            <div className="col col-md-3">
              <a href="/">
                <img src={footerLogo} alt="tlancer" width="107" height="28" />
              </a>
            </div>
            <div id="copyright" className="col col-md-6">
              © 2022 Tlancer. All rights reserved.
            </div>
            <div className="col col-md-3 d-flex justify-content-between mt-3">
              <a href="/">
                <img
                  className="mx-2"
                  src={twitter}
                  alt="twitter"
                  width="24"
                  height="24"
                />
              </a>
              <a href="/">
                <img
                  className="mx-2"
                  src={linkedin}
                  alt="linkedin"
                  width="24"
                  height="24"
                />
              </a>
              <a href="/">
                <img
                  className="mx-2"
                  src={facebook}
                  alt="facebook"
                  width="24"
                  height="24"
                />
              </a>
              <a href="/">
                <img
                  className="mx-2"
                  src={github}
                  alt="github"
                  width="24"
                  height="24"
                />
              </a>
              <a href="/">
                <img
                  className="mx-2"
                  src={mysteryicon}
                  alt="mysteryicon"
                  width="24"
                  height="24"
                />
              </a>
              <a href="/">
                <img
                  className="mx-2"
                  src={dribble}
                  alt="dribble"
                  width="24"
                  height="24"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
