import tutorCourseGlance from '../images/tutorCourseGlance.png'
import student1 from '../images/student1.png'
import student2 from '../images/student2.png'
import student3 from '../images/student3.png'
import student4 from '../images/student4.png'
import student5 from '../images/student5.png'
import tutor1 from '../images/tutor1.png'
import {Link} from "@inertiajs/inertia-react";

const TutorCourseGlance = () => {
    return (
        <>
            <style>{`
                .course-glance-title{
                    font-family: 'Ubuntu';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 28px;
                    line-height: 32px;
                    display: flex;
                    align-items: center;
                    color: #00274C;
                    height: 64px;
                }

                .course-glance-price {
                    height: 37px;
                }

                .course-glance-current-price{
                    color: #00274C;
                }

                .course-glance-price {
                    width: 100px;
                    height: 37px;
                    font-family: 'Ubuntu';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 32px;
                    display: flex;
                    align-items: center;
                    line-height: 37px;
                }

                .course-glance-previous-price {
                    padding-left: 20px;
                    text-decoration-line: line-through;
                    color: #9CA3AF;
                }

                .course-glance-duration-title{
                    width: 127px;
                    height: 19px;
                    font-family: 'Work Sans';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 19px;
                    color: #6C757D;
                }

                .course-glance-duration-date {
                    width: 436px;
                    height: 20px;
                    font-family: 'Work Sans';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 24px;
                    line-height: 20px;
                    letter-spacing: 0.5px;
                    color: #6C757D;
                    margin-left: 15px;
                }

                .course-glance-rating{
                    margin-top: 15px;
                }

                .course-glance-rating-score {
                    width: 30px;
                    height: 23px;
                    font-family: 'Work Sans';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 20px;
                    line-height: 23px;
                    display: flex;
                    align-items: center;
                    color: #9CA3AF;
                }

                .course-glance-skills-card{
                    display: flex;
                    justify-content: center;
                    background: #F6FBE7;
                    border-radius: 8px;
                    text-align: center;
                    width: 115px;
                }

                .course-glance-skills-text{
                    font-family: 'Ubuntu';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 20px;
                    letter-spacing: -0.01em;
                    color: #00274C;
                }

                .course-glance-student-image{
                    border: 2px solid #FFFFFF;
                    border-radius: 50px;
                    background: #FFFFFF;
                }

                .course-glance-student-quantity{
                    font-family: 'Work Sans';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 19px;
                    color: #9CA3AF;
                    height: 19px;
                }

                .course-glance-tutor-container{
                    padding: 2px 0px 20px;
                    border-bottom: 1px solid #F3F4F6;
                }

                .course-glance-tutor-image{
                    width: 60px;
                    height: 60px;
                    border-radius: 50px;
                }

                .course-glance-tutor-title{
                    width: 42px;
                    height: 19px;
                    font-family: 'Work Sans';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 19px;
                    color: #6C757D;
                }

                .course-glance-tutor-full-name {
                    width: 165px;
                    height: 28px;
                    font-family: 'Work Sans';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 24px;
                    line-height: 28px;
                    color: #00274C;
                }

                .course-glance-tutor-view-profile {
                    width: 106px;
                    height: 21px;
                    font-family: 'Work Sans';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 21px;
                    color: #0EBE6A;
                }
            `}</style>
            <section className='container my-md-3'>
                <div className='row justify-content-between'>
                    <div className='col d-flex flex-column align-items-start'>
                        <img width='600' height='300' src={tutorCourseGlance} alt='tutor-course-glance-image'/>
                        <Link
                            to={"/tutor/create-assessment"}
                            className="btn create-assessment-button btn-lg mt-5 fw-bold h5"
                        >
                            Enroll for this course
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.5 11.5C5.94772 11.5 5.5 11.9477 5.5 12.5C5.5 13.0523 5.94772 13.5 6.5 13.5L6.5 11.5ZM22.2071 13.2071C22.5976 12.8166 22.5976 12.1834 22.2071 11.7929L15.8431 5.42893C15.4526 5.03841 14.8195 5.03841 14.4289 5.42893C14.0384 5.81946 14.0384 6.45262 14.4289 6.84315L20.0858 12.5L14.4289 18.1569C14.0384 18.5474 14.0384 19.1805 14.4289 19.5711C14.8195 19.9616 15.4526 19.9616 15.8431 19.5711L22.2071 13.2071ZM6.5 13.5L21.5 13.5L21.5 11.5L6.5 11.5L6.5 13.5Z" fill="white"/>
                            </svg>

                        </Link>
                    </div>

                    <div className='col d-flex flex-column'>
                        <h1 className='course-glance-title'>Professional Product Design Certificate Course</h1>

                        <div className='d-flex justify-content-start course-glance-price my-3'>
                            <p className='course-glance-price course-glance-current-price'>$15.99</p>
                            <p className='course-glance-price course-glance-previous-price'>$25.99</p>
                        </div>

                        <div>
                            <p className='course-glance-duration-title'>Course Duration</p>
                            <div className='d-flex align-items-center'>
                                <svg width="43"
                                     height="31"
                                     viewBox="0 0 43 31"
                                     fill="none"
                                     xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M3.9 1.48828V4.12464H2.6C1.157 4.12464 0 5.29783 0 6.76101V25.2156C0 25.9148 0.273928 26.5853 0.761522 27.0797C1.24912 27.5742 1.91044 27.8519 2.6 27.8519H10.53C12.168 29.4865 14.417 30.4883 16.9 30.4883C21.931 30.4883 26 26.3624 26 21.261C26 18.7433 25.012 16.4628 23.4 14.8019V6.76101C23.4 6.0618 23.1261 5.39123 22.6385 4.89682C22.1509 4.4024 21.4896 4.12464 20.8 4.12464H19.5V1.48828H16.9V4.12464H6.5V1.48828M2.6 6.76101H20.8V9.39737H2.6M2.6 12.0337H20.8V12.9169C19.617 12.3501 18.291 12.0337 16.9 12.0337C11.869 12.0337 7.8 16.1596 7.8 21.261C7.8 22.6715 8.112 24.016 8.671 25.2156H2.6M16.9 14.8678C20.384 14.8678 23.205 17.7283 23.205 21.261C23.205 24.7937 20.384 27.6542 16.9 27.6542C13.416 27.6542 10.595 24.7937 10.595 21.261C10.595 17.7283 13.416 14.8678 16.9 14.8678ZM15.6 17.3065V22.1706L19.747 24.596L20.722 22.8824L17.55 21.0237V17.3065H15.6Z" fill="#00274C"/>
                                    <path d="M42 1.48828C42 12.8135 42 19.1631 42 30.4883" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round"/>
                                </svg>

                                <svg width="2" height="31" viewBox="0 0 2 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1.48828C1 12.8135 0.999999 19.1631 0.999999 30.4883" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round"/>
                                </svg>


                                <p className='course-glance-duration-date py-2'>3 Month Course</p>
                            </div>
                        </div>

                        <div className='d-flex align-items-center course-glance-rating'>
                            <div className='d-flex justify-between'>
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 2.67578L7.1875 7.67578L2.1875 8.30078L5.9375 12.6758L4.6875 18.3008L10 15.8008L15.3125 18.3008L14.0625 12.6758L17.8125 8.30078L12.8125 7.67578L10 2.67578Z" fill="#FFCB05" stroke="#FFCB05" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 2.67578L7.1875 7.67578L2.1875 8.30078L5.9375 12.6758L4.6875 18.3008L10 15.8008L15.3125 18.3008L14.0625 12.6758L17.8125 8.30078L12.8125 7.67578L10 2.67578Z" fill="#FFCB05" stroke="#FFCB05" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 2.67578L7.1875 7.67578L2.1875 8.30078L5.9375 12.6758L4.6875 18.3008L10 15.8008L15.3125 18.3008L14.0625 12.6758L17.8125 8.30078L12.8125 7.67578L10 2.67578Z" fill="#FFCB05" stroke="#FFCB05" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 2.67578L7.1875 7.67578L2.1875 8.30078L5.9375 12.6758L4.6875 18.3008L10 15.8008L15.3125 18.3008L14.0625 12.6758L17.8125 8.30078L12.8125 7.67578L10 2.67578Z" fill="#FFCB05" stroke="#FFCB05" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 2.67578L7.1875 7.67578L2.1875 8.30078L5.9375 12.6758L4.6875 18.3008L10 15.8008L15.3125 18.3008L14.0625 12.6758L17.8125 8.30078L12.8125 7.67578L10 2.67578Z" stroke="#9CA3AF" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>

                            </div>
                            <p className='course-glance-rating-score m-2'>4.5</p>
                        </div>

                        <div className='d-flex align-items-center justify-content-between my-lg-5 pb-3' style={{ borderBottom: '1px solid #F3F4F6'}}>
                            <div className='course-glance-skills-card'>
                                <p className='course-glance-skills-text m-2'>UX Design</p>
                            </div>

                            <div className='course-glance-skills-card'>
                                <p className='course-glance-skills-text m-2'>UX Research</p>
                            </div>

                            <div className='course-glance-skills-card'>
                                <p className='course-glance-skills-text m-2'>Design</p>
                            </div>

                            <div className='course-glance-skills-card'>
                                <p className='course-glance-skills-text m-2'>Research</p>
                            </div>

                        </div>

                        <div class='d-flex align-items-center justify-content-between course-glance-tutor-container mb-3'>
                            <div className='d-flex align-items-center'>
                                <img alt='tutor-image' src={tutor1} className='course-glance-tutor-image'/>
                                <div className='d-flex flex-column mb-2' style={{ marginLeft: '15px'}}>
                                    <p className='mb-1 course-glance-tutor-title'>Tutor</p>
                                    <p className='mb-1 course-glance-tutor-full-name'>Nicole Savana</p>
                                </div>
                            </div>

                            <p className='mb-0 course-glance-tutor-view-profile'>View profile</p>
                        </div>

                        <div className='course-glance-students-card d-flex justify-content-start align-items-center'>
                            <div className='d-flex justify-content-center align-items-center'>
                                <img width='38' height='38' alt='student1-logo' src={student1} className='course-glance-student-image' />
                                <img width='38' height='38' alt='student1-logo' src={student2} className='course-glance-student-image' style={{ marginLeft: '-12px'}} />
                                <img width='38' height='38' alt='student1-logo' src={student3} className='course-glance-student-image' style={{ marginLeft: '-12px'}} />
                                <img width='38' height='38' alt='student1-logo' src={student4} className='course-glance-student-image' style={{ marginLeft: '-12px'}} />
                                <img width='38' height='38' alt='student1-logo' src={student5} className='course-glance-student-image' style={{ marginLeft: '-12px'}} />
                                <p className='m-2 course-glance-student-quantity'>+ 368</p>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default TutorCourseGlance
