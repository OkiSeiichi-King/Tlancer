const Testimonies = (props) => {
  return (
    <>
      <style>{`   

      #testimonials {
        color: #00274c;
      }     
      .yellow {
        color: #FBBC04;
      }  
      .green {
        color: #aadd22;
        transform: rotate(180deg);
      }
      
      .big-quote {
          width: 2rem;
          height: 2rem;
      }

      .card-text-test {
        font-family: 'Work Sans', sans-serif;
      }
      .inspired {
        font-family: 'Work Sans', sans-serif;
        font-weight: 500;
      }
      
      .blue-quote {
          position: relative;
          top: 1rem;
          right: 1rem;
          color: #2EC5CE;
          opacity: .5;
      }
     
      .card-title.h5 {
        width: 60%;
      }
      @media (min-width: 768px) {
        .big-quote {
          width: 4rem;
          height: 4rem;
        }
        
      }
      @media (min-width: 1024px) {
        .big-quote {
          width: 6rem;
          height: 6rem;
      }
      #putin {
        position: relative;
        top: 8rem;
      }
      @media (max-width: 768px) {
        .card-text-test {
          width: 130%;
        }
        
      }
      
      }
      `}</style>
      <section id="testimonials" className="container-fluid bg-white my-5">
      <div id={props.id}></div>
        <div id="testimonials-target" className="link-target"></div>
        <div className="container p-md-5 bg-white">
          {/* ______ Top Row */}
          <div className="row mb-3 mb-md-5">
            <div className="col-2 text-center col-md-4 px-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-quote big-quote yellow"
                viewBox="0 0 16 16"
              >
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
              </svg>
            </div>
            <div className="col-10 col-md-4 px-0 pe-2">
              <h2 className="h1 ms-md-5 fw-bold">
                Testimonies from Our Customers
              </h2>
              <p className="ms-md-5 inspired">Get inspired by these stories.</p>
            </div>
            <div className="col-md-4"></div>
          </div>
          {/* ______ Middle Row With Individual Quotes*/}
          <div className="row justify-content-center">
            <div className="d-flex px-0 flex-column flex-lg-row gx-lg-5">
              {/* ______ Card 1*/}
              <div className="col-lg-2"></div>
              <div className="col col-lg-4 mt-md-5 px-0 px-md-5">
                <div
                  id="putin"
                  className="border-0 shadow pt-2 pb-4 ps-4 pe-2 my-3 card "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="blue-quote bi bi-quote"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                  </svg>
                  <div className="card-text">
                    <p className="lh-lg fw-bold text-opacity-75 mb-4 card-text-test">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                      aliquam, purus sit amet luctus venenatis, lectus magna
                      fringilla urna, porttitor rhoncus dolor purus non enim
                      praesent elem
                    </p>
                  </div>
                  <div className="fw-bold card-title h5">Putin</div>
                  <div className="text-secondary card-subtitle h6">
                    Back-end developer at Fintech
                  </div>
                </div>
              </div>
              {/* ______ Card 2*/}
              <div className="col col-lg-6 px-0 px-md-5">
                <div
                  id="riley"
                  className="border-0 shadow pt-2 pb-4 ps-4 pe-2 mt-3 card "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="blue-quote bi bi-quote"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                  </svg>
                  <div className="card-text">
                    <p className="lh-lg fw-bold text-opacity-75 mb-4 card-text-test">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                      aliquam, purus sit amet luctus venenatis, lectus magna
                      fringilla urna, porttitor rhoncus dolor purus non enim
                      praesent elem
                    </p>
                  </div>
                  <div className="fw-bold card-title h5">Riley</div>
                  <div className="text-secondary card-subtitle h6">
                    Developer at microsoft
                  </div>
                </div>
              </div>
            </div>

            {/* ______ Huey's Row*/}
            <div className="row px-0 mb-md-5">
              {/* ______ Card 3*/}
              <div className="col-md-6 col-lg-6"></div>
              <div className="col-md-5 col-lg-4 px-0 px-md-5">
                <div
                  id="huey"
                  className="border-0 shadow pt-2 pb-4 ps-4 pe-2 mt-3 mb-5 card "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="blue-quote bi bi-quote"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                  </svg>
                  <div className="card-text">
                    <p className="lh-lg fw-bold text-opacity-75 mb-md-4 card-text-test">
                      Enrolling with Hackton academy is the best decision I have
                      made.
                    </p>
                  </div>
                  <div className="fw-bold card-title h5">Huey</div>
                  <div className="text-secondary card-subtitle h6">
                    Instructor at Hackton academy
                  </div>
                </div>
              </div>
              <div className="col-md-1 col-lg-2"></div>
            </div>
          </div>
          {/* ______ Bottom Row */}
          <div className="row mt-md-5">
            <div className="col-10 col-md-5 col-md-6 mb-4 mb-md-5 ps-2">
              <h2 className="h1 fw-bold">
                Every year 1000+ students register with us and lot more get
                certified
              </h2>
              <p className="h5 card-text-test">
                Hackton academy is the place to be to learn coding join hackton
                today
              </p>
            </div>
            <div className="col-2 col-md-6 text-center pe-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-quote big-quote green"
                viewBox="0 0 16 16"
              >
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonies;
