
const Announcement = () => {
    return (
        <>
            <style>{`
                .announcement-card {
                    box-shadow: 0px 4px 60px rgba(1, 0, 0, 0.03);
                    border-radius: 12px;
                }
            `}</style>
            <div className='container'>
                <div className='announcement-card row w-50 justify-content-end'>
                    <div className=''>
                    <div className=" d-flex justify-content-around align-items-center">
                       <svg
                           width="43"
                           height="43"
                           viewBox="0 0 43 43"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                       >
                         <rect width="43" height="43" rx="10" fill="#FFE8EA"/>
                         <path d="M18.625 28.375C18.625 32.875 25.375 32.875 25.375 28.375M22 12.625C18.298 12.625 15.625 14.875 15.625 17.875V22.375L12.625 27.625H31.375L28.375 22.375V17.875C28.375 14.875 26.626 12.625 22 12.625Z" stroke="#FD4E5D" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
                       </svg>


                        <p className='pt-lg-3'>No announcements have been post yet. No announcements have been post yet.</p>

                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.875 7.625L7.125 17.375M7.125 7.625L16.875 17.375" stroke="#00274C" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Announcement
