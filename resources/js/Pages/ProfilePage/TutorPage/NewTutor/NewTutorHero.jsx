import photo from "../../../../images/Tutors/no-profile-photo.png";
// import tutorLoggedWithCoursesImage from '../images/tutorLoggedWithCoursesImage.png'
const NewTutorHero = (props) => {
  return (
    <>
      <style>{`
    #new-tutor-section {
        margin-top: 8rem;
    }

    #new-tutor-section button {
      text-align: left;
    }

    .hero-subtitle {
        font-family: 'Work Sans', sans-serif;
        color: var(--dark-blue);
        font-weight: 500;
        font-size: 24px;
    }
    .btn-complete-setup {
        font-family: 'Ubuntu', san-serif;
        font-weight: 500;
        color: var(--active-link);
    }
    .btn-complete-setup:hover {
        color: var(--dark-blue);
    }

    .need-help-button {
        font-family: 'Work Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: -0.01em;
        color: #6C757D;
    }

    .tutor-with-course-notification-card{
        background: #FFFFFF;
        border: 1px solid #D1D5DB;
        box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.03);
        border-radius: 12px;
    }

    .tutor-with-courses-reminder-text{
        font-family: 'Work Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 15x;
        line-height: 28px;
        color: #00274C;
        margin-left: 12px;
    }

    .tutor-new-course-view-calendar-text {
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 20px;
        display: flex;
        align-items: flex-end;
        text-align: center;
        letter-spacing: -0.01em;
        color: #0EBE6A;
    }

  `}</style>
      <section id="new-tutor-section" className="container-fluid">
        <div className="container mb-5 pt-5">
          <div className='row'>
              <div className="col col-md-9">
                <h1 className="account-form-label mb-5">
                  Hi, {props.userName}
                </h1>
                <p className="hero-subtitle mb-0">
                  Complete your account setup today
                  {/*  You are doing great!*/}
                </p>
                <button className="btn-complete-setup text-start btn ms-auto ms-lg-0 ps-0 h5">
                   Complete account setup
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-down ms-sm-5"
                    viewBox="0 0 16 16"
                    style={{ transform: "rotate(-90deg)" }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                    />
                  </svg>
                </button>
                  {/*<div className='d-flex justify-content-start align-items-center mt-2 need-help-button'>*/}
                  {/*    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                  {/*        <path d="M12 21.375C17.1777 21.375 21.375 17.1777 21.375 12C21.375 6.82233 17.1777 2.625 12 2.625C6.82233 2.625 2.625 6.82233 2.625 12C2.625 17.1777 6.82233 21.375 12 21.375Z" stroke="#6C757D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>*/}
                  {/*        <path d="M8.625 10.125C8.625 8.625 10.125 7.125 12 7.125C13.875 7.125 15.375 8.676 15.375 10.125C15.375 12.375 13.125 12.375 12 13.125" stroke="#6C757D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>*/}
                  {/*        <circle cx="11.5" cy="16.5" r="1.5" fill="#6C757D"/>*/}
                  {/*    </svg>*/}
                  {/*      Need help?*/}
                  {/*</div>*/}
              </div>
              <div className="col col-md-3 p-lg-5">
                <img
                  className="img-fluid me-lg-auto mb-5 mb-lg-0"
                  src={photo}
                  alt="no profile"
                />
              </div>
             {/*TUTOR WITH COURSE NOTIFICATION AREA*/}
            {/*  <div className='col-lg-12 d-flex justify-content-between align-items-center tutor-with-course-notification-card py-3'>*/}
            {/*    <div className='d-flex justify-content-evenly align-items-center'>*/}
            {/*        <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
            {/*            <rect width="43" height="43" rx="10" fill="#FFE8EA"/>*/}
            {/*            <path d="M18.625 28.375C18.625 32.875 25.375 32.875 25.375 28.375M22 12.625C18.298 12.625 15.625 14.875 15.625 17.875V22.375L12.625 27.625H31.375L28.375 22.375V17.875C28.375 14.875 26.626 12.625 22 12.625Z" stroke="#FD4E5D" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>*/}
            {/*        </svg>*/}

            {/*        <p className='mb-0 tutor-with-courses-reminder-text'>You have a class in <span className='fw-bold'>20 Minutes Time</span></p>*/}
            {/*    </div>*/}
            {/*    <div className='d-flex align-items-center'>*/}
            {/*        <p className='mb-0 tutor-new-course-view-calendar-text'>view calendar</p>*/}
            {/*        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
            {/*            <path d="M7 11C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13L7 11ZM22.7071 12.7071C23.0976 12.3166 23.0976 11.6834 22.7071 11.2929L16.3431 4.92893C15.9526 4.53841 15.3195 4.53841 14.9289 4.92893C14.5384 5.31946 14.5384 5.95262 14.9289 6.34315L20.5858 12L14.9289 17.6569C14.5384 18.0474 14.5384 18.6805 14.9289 19.0711C15.3195 19.4616 15.9526 19.4616 16.3431 19.0711L22.7071 12.7071ZM7 13L22 13L22 11L7 11L7 13Z" fill="#0EBE6A"/>*/}
            {/*        </svg>*/}

            {/*    </div>*/}
            {/*    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
            {/*        <path d="M16.875 7.125L7.125 16.875M7.125 7.125L16.875 16.875" stroke="#00274C" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>*/}
            {/*    </svg>*/}

            {/*</div>*/}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewTutorHero;
