import { Link } from '@inertiajs/inertia-react';
// import tutorCalendarImage1 from "@/Pages/ProfilePage/TutorPage/images/tutorCalendarImage1.png";
// import tutorCourseGlance from '../images/tutorCourseGlance.png'

const TutorNoCourses = () => {
  return (
    <>
      <style>{`
        .btn-new-course {
            background: var(--active-link);
            color: #fff;
        }

        .tutor-with-courses-image{
            border-radius: 15px 15px 0 0;
        }

        .published-course-title{
            font-family: 'Ubuntu';
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            line-height: 64px;
            /* identical to box height, or 267% */
            font-feature-settings: 'salt' on, 'liga' off;
            color: #6C757D;
        }

        .tutor-course-date-time {
            font-family: 'Work Sans';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 19px;
            display: flex;
            align-items: center;
            color: #00274C;
        }

        .tutor-with-courses-set-up-container {
            background: #F6FBE7;
            border-top: 1px solid #D1D5DB;
            padding: 5px 27px;
            border-radius: 0 0 15px 15px;
        }
      `}</style>
      <section className="container-fluid ">
        <div className="container">
            <div className='d-flex justify-content-between align-items-center'>
              <h2 className="account-form-label fw-bold h3 my-5 mt-lg-0">
                Course Library
              </h2>
                <Link
                    href={route('tutor-new-course')}
                    className="btn btn-new-course btn-lg fw-bold h5"
                >
                    + Add new course
                </Link>
            </div>
        </div>

        <div className="container text-center p-5 my-5">
          <Link
            href={route('tutor-new-course')}
            className="btn btn-new-course btn-lg fw-bold h5"
          >
            + Add new course
          </Link>
          <h3 className="account-form-label fw-bold h5 my-3">
            You have not created a course yet.
          </h3>
          <p className="account-heading">
            Find the help you need on <br /> the{" "}
            <span className="email-accent">support page</span>
          </p>
        </div>


          {/*TUTOR WITH COURSE COMPONENT*/}
        {/*  <div className='container'>*/}
        {/*      <div className='row'>*/}
        {/*          <div className="col col-lg-5 ms-lg-5">*/}
        {/*              <div className="d-flex flex-column flex-lg-row align-items-center my-5">*/}
        {/*                  <h5 className='published-course-title'>Published Course</h5>*/}
        {/*              </div>*/}

        {/*              <div className="container d-flex justify-content-between">*/}
        {/*                  <img alt='tutorCalendarImage1' src={tutorCalendarImage1} width='250' height='250' className='tutor-calendar-image'/>*/}

        {/*                  <div className='d-flex flex-column w-50 justify-content-evenly'>*/}
        {/*                      <div className='d-flex justify-content-between mx-2'>*/}
        {/*                          <p className='mb-0 tutor-calendar-card-title'>Online course</p>*/}

        {/*                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
        {/*                              <path d="M12 4.875C12.6213 4.875 13.125 4.37132 13.125 3.75C13.125 3.12868 12.6213 2.625 12 2.625C11.3787 2.625 10.875 3.12868 10.875 3.75C10.875 4.37132 11.3787 4.875 12 4.875Z" stroke="#00274C" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>*/}
        {/*                              <path d="M12 13.125C12.6213 13.125 13.125 12.6213 13.125 12C13.125 11.3787 12.6213 10.875 12 10.875C11.3787 10.875 10.875 11.3787 10.875 12C10.875 12.6213 11.3787 13.125 12 13.125Z" stroke="#00274C" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>*/}
        {/*                              <path d="M12 21.375C12.6213 21.375 13.125 20.8713 13.125 20.25C13.125 19.6287 12.6213 19.125 12 19.125C11.3787 19.125 10.875 19.6287 10.875 20.25C10.875 20.8713 11.3787 21.375 12 21.375Z" stroke="#00274C" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>*/}
        {/*                          </svg>*/}


        {/*                      </div>*/}

        {/*                      <h5 className='tutor-calendar-description-title mb-3 mx-2'>Geometry from beginner to senior level</h5>*/}

        {/*                      <div className='d-flex justify-content-between align-items-center mx-2'>*/}
        {/*                          <p className='mb-0 tutor-calendar-start-date-title'>Class starts in:</p>*/}

        {/*                          <div className='d-flex justify-content-between align-items-center'>*/}
        {/*                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
        {/*                                  <path d="M12 21.375C17.1777 21.375 21.375 17.1777 21.375 12C21.375 6.82233 17.1777 2.625 12 2.625C6.82233 2.625 2.625 6.82233 2.625 12C2.625 17.1777 6.82233 21.375 12 21.375Z" stroke="#0EBE6A" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>*/}
        {/*                                  <path d="M12.375 7.125V12.375L8.625 15.375" stroke="#0EBE6A" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>*/}
        {/*                              </svg>*/}

        {/*                              <p className='mb-0 tutor-calendar-date-time'>20:40</p>*/}
        {/*                          </div>*/}
        {/*                      </div>*/}

        {/*                      <div className='d-flex justify-content-around mx-2'>*/}
        {/*                          <p className='mb-0 tutor-calendar-published-text px-2'>Published</p>*/}

        {/*                          <svg width="1" height="29" viewBox="0 0 1 29" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
        {/*                              <line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="29" stroke="#D1D5DB"/>*/}
        {/*                          </svg>*/}

        {/*                          <div className='d-flex justify-content-between align-items-center'>*/}
        {/*                              <p className='mb-0 tutor-calendar-take-class-text'>Take class</p>*/}

        {/*                              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
        {/*                                  <path d="M6.5 11.5C5.94772 11.5 5.5 11.9477 5.5 12.5C5.5 13.0523 5.94772 13.5 6.5 13.5L6.5 11.5ZM22.2071 13.2071C22.5976 12.8166 22.5976 12.1834 22.2071 11.7929L15.8431 5.42893C15.4526 5.03841 14.8195 5.03841 14.4289 5.42893C14.0384 5.81946 14.0384 6.45262 14.4289 6.84315L20.0858 12.5L14.4289 18.1569C14.0384 18.5474 14.0384 19.1805 14.4289 19.5711C14.8195 19.9616 15.4526 19.9616 15.8431 19.5711L22.2071 13.2071ZM6.5 13.5L21.5 13.5L21.5 11.5L6.5 11.5L6.5 13.5Z" fill="#0EBE6A"/>*/}
        {/*                              </svg>*/}

        {/*                          </div>*/}
        {/*                      </div>*/}
        {/*                  </div>*/}
        {/*              </div>*/}
        {/*          </div>*/}
        {/*          <div className="col col-lg-6 ms-lg-6" style={{ marginLeft: '5px'}}>*/}
        {/*              <div className="d-flex flex-column flex-lg-row align-items-center my-5">*/}
        {/*                  <h5 className='published-course-title'>Draft</h5>*/}
        {/*              </div>*/}

        {/*              <div className="container d-flex justify-content-between">*/}
        {/*                  <div className='d-flex flex-column'>*/}
        {/*                  <div className='d-flex'>*/}
        {/*                      <img alt='tutorCalendarImage1' src={tutorCourseGlance} width='270' height='230' className='tutor-with-courses-image'/>*/}

        {/*                      <div className='d-flex flex-column w-50 justify-content-evenly'>*/}
        {/*                          <div className='d-flex justify-content-between mx-2'>*/}
        {/*                              <p className='mb-0 tutor-calendar-card-title'>Online course</p>*/}

        {/*                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
        {/*                                  <path d="M12 4.875C12.6213 4.875 13.125 4.37132 13.125 3.75C13.125 3.12868 12.6213 2.625 12 2.625C11.3787 2.625 10.875 3.12868 10.875 3.75C10.875 4.37132 11.3787 4.875 12 4.875Z" stroke="#00274C" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>*/}
        {/*                                  <path d="M12 13.125C12.6213 13.125 13.125 12.6213 13.125 12C13.125 11.3787 12.6213 10.875 12 10.875C11.3787 10.875 10.875 11.3787 10.875 12C10.875 12.6213 11.3787 13.125 12 13.125Z" stroke="#00274C" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>*/}
        {/*                                  <path d="M12 21.375C12.6213 21.375 13.125 20.8713 13.125 20.25C13.125 19.6287 12.6213 19.125 12 19.125C11.3787 19.125 10.875 19.6287 10.875 20.25C10.875 20.8713 11.3787 21.375 12 21.375Z" stroke="#00274C" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>*/}
        {/*                              </svg>*/}


        {/*                          </div>*/}

        {/*                          <h5 className='tutor-calendar-description-title mb-3 mx-2'>Professional Product Design Certificate Course</h5>*/}

        {/*                          <div className='d-flex justify-content-between align-items-center mx-2'>*/}
        {/*                              <p className='mb-0 tutor-calendar-start-date-title'>Class starts in:</p>*/}

        {/*                              <div className='d-flex justify-content-between align-items-center'>*/}
        {/*                                  <p className='mb-0 tutor-course-date-time'>Not publish yet</p>*/}
        {/*                              </div>*/}
        {/*                          </div>*/}

        {/*                          <div className='d-flex justify-content-around mx-2'>*/}
        {/*                              <p className='mb-0 tutor-calendar-published-text px-2'>Drafted</p>*/}

        {/*                              <svg width="1" height="29" viewBox="0 0 1 29" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
        {/*                                  <line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="29" stroke="#D1D5DB"/>*/}
        {/*                              </svg>*/}

        {/*                              <div className='d-flex justify-content-between align-items-center'>*/}
        {/*                                  <p className='mb-0 tutor-calendar-take-class-text'>Edit course</p>*/}

        {/*                                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
        {/*                                      <path d="M6.5 11.5C5.94772 11.5 5.5 11.9477 5.5 12.5C5.5 13.0523 5.94772 13.5 6.5 13.5L6.5 11.5ZM22.2071 13.2071C22.5976 12.8166 22.5976 12.1834 22.2071 11.7929L15.8431 5.42893C15.4526 5.03841 14.8195 5.03841 14.4289 5.42893C14.0384 5.81946 14.0384 6.45262 14.4289 6.84315L20.0858 12.5L14.4289 18.1569C14.0384 18.5474 14.0384 19.1805 14.4289 19.5711C14.8195 19.9616 15.4526 19.9616 15.8431 19.5711L22.2071 13.2071ZM6.5 13.5L21.5 13.5L21.5 11.5L6.5 11.5L6.5 13.5Z" fill="#0EBE6A"/>*/}
        {/*                                  </svg>*/}

        {/*                              </div>*/}
        {/*                          </div>*/}
        {/*                      </div>*/}
        {/*                  </div>*/}

        {/*                      <div className='d-flex justify-content-around align-items-center tutor-with-courses-set-up-container'>*/}
        {/*                          <p className='mb-0'>Complete setting up your course</p>*/}
        {/*                          <p className='mb-0 text-success'>70 %</p>*/}
        {/*                      </div>*/}
        {/*                  </div>*/}
        {/*              </div>*/}
        {/*          </div>*/}
        {/*      </div>*/}
        {/*  </div>*/}
      </section>
    </>
  );
};
export default TutorNoCourses;
