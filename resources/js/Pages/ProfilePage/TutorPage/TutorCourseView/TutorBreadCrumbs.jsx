
const TutorBreadCrumbs = () => {
    return (
        <>
            <style>{`
                  .tutor-previous-bread-crumb{
                    font-family: 'Work Sans';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 36px;
                    color: #6C757D;
                  }

                  .tutor-current-bread-crumb{
                    font-family: 'Work Sans';
                    font-style: normal;
                    font-weight: 700;
                    line-height: 36px;
                    color: #0EBE6A;
                  }
            `}</style>
            <div className='container mt-2'>
                <div className='row'>
                    <div className='col-xl-12 d-flex align-items-center align-items-start'>
                        <h6 className='px-2 m-2 tutor-prev-bread-crumb'>Home</h6>

                        <svg width="37" height="9" viewBox="0 0 37 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M36.3536 4.85355C36.5488 4.65829 36.5488 4.34171 36.3536 4.14645L33.1716 0.964466C32.9763 0.769204 32.6597 0.769204 32.4645 0.964466C32.2692 1.15973 32.2692 1.47631 32.4645 1.67157L35.2929 4.5L32.4645 7.32843C32.2692 7.52369 32.2692 7.84027 32.4645 8.03553C32.6597 8.2308 32.9763 8.2308 33.1716 8.03553L36.3536 4.85355ZM0 5H1V4H0V5ZM3 5H5V4H3V5ZM7 5H9V4H7V5ZM11 5H13V4H11V5ZM15 5H17V4H15V5ZM19 5H21V4H19V5ZM23 5H25V4H23V5ZM27 5H29V4H27V5ZM31 5H33V4H31V5ZM35 5H36V4H35V5Z" fill="#9CA3AF"/>
                        </svg>

                        <h6 className='px-2 m-2 tutor-prev-bread-crumb'>My Courses</h6>

                        <svg width="37" height="9" viewBox="0 0 37 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M36.3536 4.85355C36.5488 4.65829 36.5488 4.34171 36.3536 4.14645L33.1716 0.964466C32.9763 0.769204 32.6597 0.769204 32.4645 0.964466C32.2692 1.15973 32.2692 1.47631 32.4645 1.67157L35.2929 4.5L32.4645 7.32843C32.2692 7.52369 32.2692 7.84027 32.4645 8.03553C32.6597 8.2308 32.9763 8.2308 33.1716 8.03553L36.3536 4.85355ZM0 5H1V4H0V5ZM3 5H5V4H3V5ZM7 5H9V4H7V5ZM11 5H13V4H11V5ZM15 5H17V4H15V5ZM19 5H21V4H19V5ZM23 5H25V4H23V5ZM27 5H29V4H27V5ZM31 5H33V4H31V5ZM35 5H36V4H35V5Z" fill="#9CA3AF"/>
                        </svg>

                        <h4 className='px-2 m-2 tutor-current-bread-crumb'>User Research Pro Level Course</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TutorBreadCrumbs
