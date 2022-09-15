import {Link} from "@inertiajs/inertia-react";

const TutorCourseAssessment = () => {
    return (
        <>
            <style>{`
                .course-assessment{
                    font-family: 'Ubuntu';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 64px;
                    font-feature-settings: 'salt' on, 'liga' off;
                    color: #00274C;
                }

                .create-assessment-button{
                    background: #0EBE6A;
                    color: #FFFFFF;
                }

                .assessment-task-header {
                    font-family: 'Ubuntu';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 23px;
                    line-height: 28px;
                    color: #00274C;
                }

                .assessment-task-text{
                    font-family: 'Work Sans';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 20px;
                    line-height: 23px;
                    display: flex;
                    align-items: center;
                    color: #6C757D;
                }

                .assessment-view-task {
                    background: none;
                    margin: 0;
                    border: none;
                    color: var(--active-link);
                    font-family: 'Work Sans';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 20px;
                    line-height: 23px;
                    align-items: center;
                    font-feature-settings: 'salt' on, 'liga' off;
                }
            `}</style>
        <section className='container my-md-3'>
             <div className='container d-flex flex-column flex-md-row align-items-center justify-content-between mt-3 my-md-3'>
                <h2 className='course-assessment h4 fw-bold pb-4'>Course Assessment</h2>
                 <Link
                     to={"/tutor/create-assessment"}
                     className="btn create-assessment-button btn-lg fw-bold h5"
                 >
                     + Create assessment
                 </Link>
            </div>

             <div className='container d-flex flex-column flex-md-row'>
                <div className='col col-md-4'>
                    <div className='card py-2 px-2 my-4 mx-2 border-0'>
                        <h5 className='assessment-task-header'>Geometry beginner guide assessment</h5>
                        <p className='assessment-task-text '>Hackton is the leading online coding tutor for beginners join us today to take a step further.</p>
                        <button className="assessment-view-task fw-medium d-flex">
                            view task
                            <span className="ms-2 d-none d-md-inline">
                              <svg xmlns="http://www.w3.org/2000/svg"
                                   width="16"
                                   height="16"
                                   fill="currentColor"
                                   className="bi bi-chevron-compact-right"
                                   viewBox="0 0 16 16"
                              >
                                <path fillRule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>

                              </svg>
                </span>
                        </button>
                    </div>
                </div>


                <div className='col col-md-4'>
                    <div className='card py-2 px-2 my-4 mx-2 border-0'>
                        <h5 className='assessment-task-header'>User Experience Design foundation intro Assesment</h5>
                        <p className='assessment-task-text'>Hackton is the leading online coding tutor for beginners join us today to take a step further.</p>
                        <button className="assessment-view-task fw-medium d-flex">
                            view task
                            <span className="ms-2 d-none d-md-inline">
                              <svg xmlns="http://www.w3.org/2000/svg"
                                   width="16"
                                   height="16"
                                   fill="currentColor"
                                   className="bi bi-chevron-compact-right"
                                   viewBox="0 0 16 16"
                              >
                                <path fillRule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>

                              </svg>
                </span>
                        </button>
                    </div>
                </div>


                <div className='col col-md-4'>
                    <div className='card py-2 px-2 my-4 mx-2 border-0'>
                        <h5 className='assessment-task-header'>Task title</h5>
                        <p className='assessment-task-text'>Hackton is the leading online coding tutor for beginners join us today to take a step further.</p>
                        <button className="assessment-view-task fw-medium d-flex">
                            view task
                            <span className="ms-2 d-none d-md-inline">
                              <svg xmlns="http://www.w3.org/2000/svg"
                                   width="16"
                                   height="16"
                                   fill="currentColor"
                                   className="bi bi-chevron-compact-right"
                                   viewBox="0 0 16 16"
                              >
                                <path fillRule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>

                              </svg>
                </span>
                        </button>
                    </div>
                </div>

             </div>
        </section>
        </>
    )

}

export default TutorCourseAssessment
