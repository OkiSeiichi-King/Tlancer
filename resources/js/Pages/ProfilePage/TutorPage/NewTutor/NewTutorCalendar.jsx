import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import tutorCalendarImage1 from '../images/tutorCalendarImage1.png'
const NewTutorCalendar = () => {
  const [date, setDate] = useState(new Date());
  console.log("date: " + date )

  return (
    <>
      <style>{`
        #new-tutor-calendar-section p {
            font-family: 'Work Sans', sans-serif;
            color: #808080;
            font-weight: 500;
        }
        .add-course-container {
            border-radius: 20px;
            box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
        }
        .btn-new-tutor-calendar {
            border: 1px solid rgba(0,0,0,0.15);
            border-radius: 10px;
            font-family: 'Work Sans', sans-serif;
            color: var(--dark-blue);
            font-weight: 500;
            width: 135px;
        }
        .temp-cal {
            height: 300px;
            border: 1px solid var(--dark-blue);
        }

        /* React Calendar Custom Properties Start*/


        .react-calendar__tile {
          height: 100%;
        }

        .react-calendar__tile--active {
          background: var(--active-link);
        }

        .react-calendar__tile react-calendar__month-view__days__day {
          flex: 0 0 1 !important;
        }

        .react-calendar__tile--range,
        .react-calendar__tile--rangeStart,
        .react-calendar__tile--rangeEnd,
        .react-calendar__tile--rangeBothEnds {
          background: rgba(14, 190, 106, .9) !important;
        }

        .react-calendar__month-view__days {
          width: 100%;
        }

        .react-calendar__navigation__label {
          font-size: 1.5rem;
        }

        .react-calendar__viewContainer {
          width: 100%;
        }

        .react-calendar {
          width: 100vw;
          padding: 2rem;
          border: none;
          margin: 0 auto;
          font-family: 'Ubuntu', san-serif;
        }

        .react-calendar button {
          border-radius: 30px;
          border: 1px solid #D1D5DB;
          padding: 1.5rem .75rem;
          transition: .1s ease-in;
          margin-bottom: .5rem;
        }

        .react-calendar__navigation button {
          padding: 0;
        }

        .react-calendar__month-view__weekdays {
          margin-bottom: 2rem;
        }

        .react-calendar__month-view__weekdays__weekday abbr[title] {
          text-decoration: none !important;
        }

        .react-calendar__month-view__days__day--neighboringMonth {
          background: rgba(100, 100, 100, 0.1);
        }

        .react-calendar__navigation>* {
          border: none !important;
        }

        .tutor-calendar-image {
            border-radius: 10px 0 0 10px;
        }

        .tutor-calendar-card-title {
            ont-family: 'Work Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #6C757D;
        }

        .tutor-calendar-description-title {
            font-family: 'Ubuntu';
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 23px;
            display: flex;
            align-items: center;
            color: #00274C;
        }

        .tutor-calendar-start-date-title{
            font-family: 'Work Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            display: flex;
            align-items: center;
            color: #6C757D;
        }

        .tutor-calendar-date-time {
            margin-left: 5px;
            font-family: 'Work Sans';
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 28px;
            display: flex;
            align-items: center;
            color: #00274C !important;
        }

        .tutor-calendar-published-text {
            border: 1px solid #6C757D;
            border-radius: 5px;
            font-family: 'Ubuntu';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            display: flex;
            align-items: center;
            text-align: center;
            letter-spacing: -0.01em;
            color: #6C757D;
        }

        .tutor-calendar-take-class-text{
            font-family: 'Ubuntu';
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 20px;
            display: flex;
            align-items: flex-end;
            text-align: center;
            letter-spacing: -0.01em;
            color: #0EBE6A !important;
        }

        button:hover,
        button:focus {
          font-weight: bold;
          background: rgba(14, 190, 106, .8) !important;
          color: white;
        }

        @media (max-width: 600px) {
          .react-calendar {
            padding: 0rem;
          }
        }

        /* React Calendar Custom Properties End*/


      `}</style>
      <section id="new-tutor-calendar-section" className="container-fluid py-5">
        <div className="container d-flex flex-column flex-lg-row align-items-center">
          <div className="col col-lg-7">
            <h2 className="mt-5">Course calendar</h2>
              <Calendar onChange={setDate} value={date}/>
          </div>
          <div className="col col-lg-5 ms-lg-5">
            <div className="d-flex flex-column flex-lg-row align-items-center my-5">
              <div className="btn btn-new-tutor-calendar my-2 ms-lg-0 p-2" style={{width: '160px'}}>
                  <span className='p-2'>
                      <svg  width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.875 3.125V5.375M7.125 3.125V5.375M3.375 11.375H20.625M2.625 6.125H21.375V21.875H2.625V6.125Z" stroke="#00274C" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  </span>
                  July 3, 2022
              </div>
              <div className="d-flex align-items-center btn btn-new-tutor-calendar justify-content-center mx-lg-5 my-2">
                  <span style={{ marginRight: '5px'}}>
                      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 21.875C17.1777 21.875 21.375 17.6777 21.375 12.5C21.375 7.32233 17.1777 3.125 12 3.125C6.82233 3.125 2.625 7.32233 2.625 12.5C2.625 17.6777 6.82233 21.875 12 21.875Z" stroke="#00274C" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12.375 7.625V12.875L8.625 15.875" stroke="#00274C" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                  </span>
                9:30 am
              </div>
            </div>
            {/*<div className="add-course-container container text-center p-5">*/}
            {/*  <p className="account-heading fw-bold">No class on this date</p>*/}
            {/*  <button className="btn btn-new-course btn-lg fw-bold h5">*/}
            {/*    + Add new course*/}
            {/*  </button>*/}
            {/*</div>*/}
            {/*  div card with no courses*/}

            <div className="container d-flex justify-content-between">
                    <img alt='tutorCalendarImage1' src={tutorCalendarImage1} width='250' height='250' className='tutor-calendar-image'/>

                <div className='d-flex flex-column w-50 justify-content-evenly'>
                    <div className='d-flex justify-content-between mx-2'>
                        <p className='mb-0 tutor-calendar-card-title'>Online course</p>

                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 4.875C12.6213 4.875 13.125 4.37132 13.125 3.75C13.125 3.12868 12.6213 2.625 12 2.625C11.3787 2.625 10.875 3.12868 10.875 3.75C10.875 4.37132 11.3787 4.875 12 4.875Z" stroke="#00274C" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 13.125C12.6213 13.125 13.125 12.6213 13.125 12C13.125 11.3787 12.6213 10.875 12 10.875C11.3787 10.875 10.875 11.3787 10.875 12C10.875 12.6213 11.3787 13.125 12 13.125Z" stroke="#00274C" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 21.375C12.6213 21.375 13.125 20.8713 13.125 20.25C13.125 19.6287 12.6213 19.125 12 19.125C11.3787 19.125 10.875 19.6287 10.875 20.25C10.875 20.8713 11.3787 21.375 12 21.375Z" stroke="#00274C" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>


                    </div>

                    <h5 className='tutor-calendar-description-title mb-3 mx-2'>Geometry from beginner to senior level</h5>

                    <div className='d-flex justify-content-between align-items-center mx-2'>
                        <p className='mb-0 tutor-calendar-start-date-title'>Class starts in:</p>

                        <div className='d-flex justify-content-between align-items-center'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 21.375C17.1777 21.375 21.375 17.1777 21.375 12C21.375 6.82233 17.1777 2.625 12 2.625C6.82233 2.625 2.625 6.82233 2.625 12C2.625 17.1777 6.82233 21.375 12 21.375Z" stroke="#0EBE6A" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12.375 7.125V12.375L8.625 15.375" stroke="#0EBE6A" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                            <p className='mb-0 tutor-calendar-date-time'>20:40</p>
                        </div>
                    </div>

                    <div className='d-flex justify-content-around mx-2'>
                        <p className='mb-0 tutor-calendar-published-text px-2'>Published</p>

                        <svg width="1" height="29" viewBox="0 0 1 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="29" stroke="#D1D5DB"/>
                        </svg>

                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='mb-0 tutor-calendar-take-class-text'>Take class</p>

                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.5 11.5C5.94772 11.5 5.5 11.9477 5.5 12.5C5.5 13.0523 5.94772 13.5 6.5 13.5L6.5 11.5ZM22.2071 13.2071C22.5976 12.8166 22.5976 12.1834 22.2071 11.7929L15.8431 5.42893C15.4526 5.03841 14.8195 5.03841 14.4289 5.42893C14.0384 5.81946 14.0384 6.45262 14.4289 6.84315L20.0858 12.5L14.4289 18.1569C14.0384 18.5474 14.0384 19.1805 14.4289 19.5711C14.8195 19.9616 15.4526 19.9616 15.8431 19.5711L22.2071 13.2071ZM6.5 13.5L21.5 13.5L21.5 11.5L6.5 11.5L6.5 13.5Z" fill="#0EBE6A"/>
                            </svg>

                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default NewTutorCalendar;
