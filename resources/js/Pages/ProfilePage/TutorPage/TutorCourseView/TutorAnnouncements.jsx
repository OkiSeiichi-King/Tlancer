

const TutorAnnouncements = () => {
    return (
        <>
            <style>{`
                .tutor-announcements-card{
                    background: #FFFFFF;
                    box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.03);
                    border-radius: 12px;
                }

                .tutor-announcements-card-text{
                    font-family: 'Work Sans';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 19px;
                    color: #6C757D;
                }
            `}</style>
            <div className='container'>
                <div className='row justify-content-end'>
                    <div className='col-md-6 d-flex align-items-center justify-content-between tutor-announcements-card'>
                        <div className='d-flex align-items-center p-2'>
                            <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="43" height="43" rx="10" fill="#FFE8EA"/>
                                <path d="M18.625 28.375C18.625 32.875 25.375 32.875 25.375 28.375M22 12.625C18.298 12.625 15.625 14.875 15.625 17.875V22.375L12.625 27.625H31.375L28.375 22.375V17.875C28.375 14.875 26.626 12.625 22 12.625Z" stroke="#FD4E5D" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <p className='m-2 tutor-announcements-card-text'>No announcements have been posted yet. No announcementsNo announcements...</p>
                        </div>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.875 7.625L7.125 17.375M7.125 7.625L16.875 17.375" stroke="#00274C" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                    </div>
                    <div className='col-xl-12'></div>
                </div>
            </div>
        </>
    )
}

export default TutorAnnouncements
