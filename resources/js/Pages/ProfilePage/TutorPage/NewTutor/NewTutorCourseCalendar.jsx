import { Link } from '@inertiajs/inertia-react';
import {  useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import {NewCourseProgress} from "@/Pages/Components/NewCourseProgress";
import Select from "react-select";

const monthOptions = [
    { value: '1', label: 'January'},
    { value: '2', label: 'February'},
    { value: '3', label: 'March'},
    { value: '4', label: 'April'},
    { value: '5', label: 'May'},
    { value: '6', label: 'June'},
    { value: '7', label: 'July'},
    { value: '8', label: 'August'},
    { value: '9', label: 'September'},
    { value: '10', label: 'October'},
    { value: '11', label: 'November'},
    { value: '12', label: 'December'},
];

const NewTutorCourseCalendar = () => {
    const [selectedDayOption, setSelectedDayOption] = useState({ value: null, label: 'Month'});
  const [date, setDate] = useState(new Date());
    const courseDurationMonthStyles = {
        container: base => ({
           ...base,
           marginLeft: '20px'
        }),
        control: base => ({
            ...base,
            padding: '5px 10px 5px 10px',
            borderRadius: '15px'
        }),
        singleValue: base => ({
            ...base,
            width: '80px'
        }),
    }
  let selectedDates = []
  const dateHandler = (e) => {
    setDate(e);
    selectedDates = [...selectedDates,e.toDateString()]
    console.log("E: " + e.toDateString())
  }

  return (
    <>
      <style>{`
        #tutor-new-syllabus-section {
          margin-top: 8rem;
        }

        .course-description-input {
          border: 1px solid rgba(100,100,100,0.3);
          border-radius: 20px;
        }

        #course-description {
          border-color: rgba(100,100,100,0.3);
        }

        .current {
          color: var(--product-dark-blue);
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

.tutor-course-calendar-set-time-title {
    height: 64px;
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 64px;
    font-feature-settings: 'salt' on, 'liga' off;
    color: #00274C;
}

.tutor-course-calendar-duration-title {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 64px;
    display: flex;
    align-items: center;
    font-feature-settings: 'salt' on, 'liga' off;
    color: #00274C;
}

.tutor-course-calendar-duration-description {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    color: #808080;
}

.tutor-course-calendar-time {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 29px;
    color: #808080;
}

.number-of-students-container {
    background: #FFFFFF;
    border-radius: 8px;
    border: 1px solid #d1d5db;
    display: flex;
    align-items: end;
    padding: 5px 10px;
}

.number-of-students-container-start {
    width: 75px;
}


.number-of-students-container-end {
    width: 60px;
    z-index: 9999999;
}

.tutor-course-calendar-clock{
    width: 40px;
    outline: none;
    margin-left: 5px;
}

.tutor-course-calendar-time-separator {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 16px;
    letter-spacing: 1.25px;
    color: #00274C;
}

.number-of-students-time-text {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 1.25px;
    color: #00274C;
    margin-left: 5px;
}

@media (max-width: 600px) {
  .react-calendar {
    padding: 0rem;
  }

  .tutor-course-calendar-time-container {
    flex-direction: column;
  }
}

/* React Calendar Custom Properties End*/


      `}</style>
      <section
        id="tutor-new-syllabus-section"
        className="container-fluid px-lg-5"
      >
        <div className="container d-flex flex-column flex-md-row">
          <NewCourseProgress current={4} />
          <div className="col col-md-8 ms-md-auto d-flex flex-column">
              <h3 className="h4 fw-bold new-course-progress-heading ps-4 align-self-end">
                  New Course
              </h3>
              <h5 className='tutor-course-calendar-duration-title'>
                  Course Duration
              </h5>
              <p className='mb-0 tutor-course-calendar-duration-description'>Select course duration by day, week, month, and year</p>
              <div className='d-flex justify-content-start align-items-center mx-2 my-3'>
                  <div className='number-of-students-container number-of-students-container-end'>
                      <p className='mb-0 d-flex'>
                          <input value='30' onChange={() => ({})} min='0' max='24' size='1' type='number' className='tutor-course-calendar-clock border-0' />
                      </p>
                  </div>

                  <Select
                      defaultValue={selectedDayOption}
                      onChange={setSelectedDayOption}
                      styles={courseDurationMonthStyles}
                      options={monthOptions}
                  />
              </div>
              <div className='d-flex col col-sm-12 tutor-course-calendar-time-container'>
              <Calendar onChange={e=>dateHandler(e)} value={date} />
                  <div className='row flex-column'>
                      <h5 className='tutor-course-calendar-set-time-title'>Set Time</h5>

                      <div className='mb-2'>
                          <p className='mb-0 tutor-course-calendar-time'>Course start time</p>
                              <div className='d-flex align-items-center'>
                                  <div className='number-of-students-container number-of-students-container-start'>
                                      <p className='mb-0 d-flex'>
                                          <svg className='align-self-center mr-2' width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M12 21.375C17.1777 21.375 21.375 17.1777 21.375 12C21.375 6.82233 17.1777 2.625 12 2.625C6.82233 2.625 2.625 6.82233 2.625 12C2.625 17.1777 6.82233 21.375 12 21.375Z" stroke="#00274C" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                                              <path d="M12.375 7.125V12.375L8.625 15.375" stroke="#00274C" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                                          </svg>
                                          <input value='9' onChange={() => ({})} min='0' max='24' size='1' type='number' className='tutor-course-calendar-clock border-0' />
                                      </p>
                                  </div>
                                  <p className='mb-0 tutor-course-calendar-time-separator px-2'>:</p>
                                  <div className='number-of-students-container number-of-students-container-end'>
                                      <p className='mb-0 d-flex'>
                                          <input value='30' onChange={() => ({})} min='0' max='24' size='1' type='number' className='tutor-course-calendar-clock border-0' />
                                      </p>
                                  </div>
                                  <p className='mb-0 number-of-students-time-text'>am</p>
                              </div>
                      </div>

                      <div className='mb-2'>
                          <p className='mb-0 tutor-course-calendar-time'>Course end time</p>
                          <div className='d-flex align-items-center'>
                              <div className='number-of-students-container number-of-students-container-start'>
                                  <p className='mb-0 d-flex'>
                                      <svg className='align-self-center mr-2' width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M12 21.375C17.1777 21.375 21.375 17.1777 21.375 12C21.375 6.82233 17.1777 2.625 12 2.625C6.82233 2.625 2.625 6.82233 2.625 12C2.625 17.1777 6.82233 21.375 12 21.375Z" stroke="#00274C" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                                          <path d="M12.375 7.125V12.375L8.625 15.375" stroke="#00274C" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                                      </svg>
                                      <input value='4' onChange={() => ({})} min='0' max='24' size='1' type='number' className='tutor-course-calendar-clock border-0' />
                                  </p>
                              </div>
                              <p className='mb-0 tutor-course-calendar-time-separator px-2'>:</p>
                              <div className='number-of-students-container number-of-students-container-end'>
                                  <p className='mb-0 d-flex'>
                                      <input value='30' onChange={() => ({})} min='0' max='24' size='1' type='number' className='tutor-course-calendar-clock border-0' />
                                  </p>
                              </div>
                              <p className='mb-0 number-of-students-time-text'>am</p>
                          </div>
                      </div>
                  </div>
              </div>
          <Link to={"/tutor/course-pricing"}>
              <button className="btn-registration btn btn-lg my-5">
                Next{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-down ms-5"
                  viewBox="0 0 16 16"
                  style={{ transform: "rotate(-90deg)" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  />
                </svg>
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default NewTutorCourseCalendar;
