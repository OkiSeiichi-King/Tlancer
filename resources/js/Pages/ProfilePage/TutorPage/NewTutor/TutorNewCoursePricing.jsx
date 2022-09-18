// import { Link } from '@inertiajs/inertia-react';
import {NewCourseProgress} from "@/Pages/Components/NewCourseProgress";
import Select from "react-select";
import {useState} from "react";
import {Link} from "@inertiajs/inertia-react";

const currencyOptions = [
    { value: 'usd', label: 'USD'},
    { value: 'gel', label: 'GEL'},
    { value: 'eur', label: 'EUR'}
]

const TutorNewCoursePricing = () => {
    const [selectedCurrencyOption, setSelectedCurrencyOption] = useState({ value: 'usd', label: 'USD'});
    const currencySelectStyles = {
        control: base => ({
            ...base,
            padding: '5px 10px',
            borderRadius: '15px'
        }),
        indicatorSeparator: base => ({
            ...base,
            display: 'none'
        })
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

        .tutor-course-pricing-title {
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

        .tutor-course-pricing-description{
            font-family: 'Work Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 29px;
            color: #808080;
        }

        .tutor-course-price-container {
            background: #FFFFFF;
            border: 1px solid #D1D5DB;
            border-radius: 15px;
            padding: 11px 5px 11px 7px;
            outline: none;
            margin-left: 20px;
            z-index: 9999999999;
        }

        .tutor-course-price-whole {
            width: 105px;
        }

        .tutor-course-price-whole-input {
            outline: none;
            width: 85px;
        }

        .tutor-course-price-decimal {
            width: 75px;
        }

        .tutor-course-price-decimal-input {
            outline: none;
            width: 56px;
        }


      `}</style>
      <section
        id="tutor-new-syllabus-section"
        className="container-fluid px-lg-5"
      >
        <div className="container d-flex flex-column flex-md-row">
          <NewCourseProgress current={5} />
          <form className="col col-md-8 ms-md-auto d-flex flex-column">
              
              <h3 className="h4 fw-bold new-course-progress-heading ps-4 align-self-end">
                  New Course
              </h3>
              <h5 className='tutor-course-pricing-title'>
                Course Price
              </h5>
              <p className='mb-0 tutor-course-pricing-description'>Select price currency you want to sell your course</p>

              <div className='d-flex justify-content-start align-items-center mx-2 my-3'>
                  <Select
                      defaultValue={selectedCurrencyOption}
                      onChange={setSelectedCurrencyOption}
                      styles={currencySelectStyles}
                      options={currencyOptions}
                  />
                  <div className='tutor-course-price-container tutor-course-price-whole'>
                    <input className='tutor-course-price-whole-input border-0' type='number' value='39' onChange={() => ({})}/>
                  </div>

                  <div className='tutor-course-price-container tutor-course-price-decimal'>
                      <input className='tutor-course-price-decimal-input border-0' type='number' value='.99' onChange={() => ({})}/>
                  </div>
              </div>

              <span>
                  <Link to={"/tutor/course-pricing"}>
                  <button className="btn-registration btn btn-lg my-5">
                      Done{" "}
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
              </span>

          </form>
        </div>
      </section>
    </>
  );
};

export default TutorNewCoursePricing;
