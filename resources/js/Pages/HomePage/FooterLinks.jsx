const FooterLinks = () => {
  return (
    <>
      <style>{`
        .footer-col {
          padding-left: 0;
        }
        .footer-col li {
            color: #6b7280;
            font-family: 'Work Sans', sans-serif;
            list-style: none;  
            transition: .3s;          
        }
        .footer-col li:hover {
          background: #6b7280;
          color: #fff;
        }
        .top {
            font-family: 'Ubuntu', san-serif;
            color: #00274c;
            font-weight: 500;
        }
      `}</style>
      <div className="container d-flex flex-md-row mb-lg-5 text-center text-md-start">
        <div className="col col-md-8 text-center">
          <p className="top">Products</p>
          <div className="d-flex flex-column flex-md-row">
            <ul className="col footer-col mb-0">
              <li>Overview</li>
              <li>Features</li>
              <li>Solutions</li>
            </ul>
            <ul className="col footer-col">
              <li>Tutorials</li>
              <li>Pricing</li>
              <li>Releases</li>
            </ul>
          </div>
        </div>
        <div className="col col-md-4 text-center">
          <p className="top">Company</p>
          <div className="d-flex flex-column"></div>
          <ul className="footer-col">
            <li>About us</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default FooterLinks;
