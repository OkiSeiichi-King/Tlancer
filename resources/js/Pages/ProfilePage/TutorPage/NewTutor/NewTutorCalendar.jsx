import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
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
            <h2 className="">Course calendar</h2>           
              <Calendar onChange={setDate} value={date}/>           
          </div>
          <div className="col col-lg-5 ms-lg-5">
            <div className="d-flex flex-column flex-lg-row my-5">
              <div className="btn btn-new-tutor-calendar mx-lg-5 my-2 ms-lg-0">
                July 3, 2022
              </div>
              <div className="btn btn-new-tutor-calendar mx-lg-5 my-2">
                9:30 am
              </div>
            </div>
            <div className="add-course-container container text-center p-5">
              <p className="account-heading fw-bold">No class on this date</p>
              <button className="btn btn-new-course btn-lg fw-bold h5">
                + Add new course
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default NewTutorCalendar;
