import { Link } from '@inertiajs/inertia-react';
import { NewCourseProgress } from "../../../../Components/NewCourseProgress";
import {  useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
const NewTutorCourseCalendar = () => {
  const [date, setDate] = useState(new Date());
  let selectedDates = []
  const dateHandler = (e) => {
    setDate(e);
    selectedDates = [...selectedDates,e.toDateString()]
    console.log("E: " + e.toDateString())
  }

  console.log("selecteDates: " + selectedDates)
  console.log("course calander page ran " + date)
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

@media (max-width: 600px) {
  .react-calendar {
    padding: 0rem;
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
          <div className="col col-md-8 ms-md-auto">
          <Calendar onChange={e=>dateHandler(e)} value={date} />
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
