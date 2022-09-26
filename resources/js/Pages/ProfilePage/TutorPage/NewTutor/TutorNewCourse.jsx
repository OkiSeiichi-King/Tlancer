import { Link } from '@inertiajs/inertia-react';
import pencil from "../../../../images/Tutors/pencil.png";
import {NewCourseProgress} from "@/Pages/Components/NewCourseProgress";
import Select from 'react-select';
import {useState} from "react";

const options = [
    { value: 'uxDesign', label: 'UX Design' },
    { value: 'design', label: 'Design' },
    { value: 'ux', label: 'UX' },
];

const TutorNewCourse = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const tagCourseStyles = {
        control: base => ({
            ...base,
            padding: '10px 10px 10px 20px',
            border: '1px solid rgba(100,100,100,0.3)',
            borderRadius: '20px'
        }),
        multiValue: base => ({
            ...base,
            marginRight: '15px',
            padding: '3px 6px',
            borderRadius: '10px',
            backgroundColor: '#F6FBE7',
            color: '#00274C'
        }),
        indicatorSeparator: base => ({
            ...base,
            marginRight: '7px'
        }),
    }
  return (
    <>
      <style>{`
        #tutor-new-course-section {
          margin-top: 8rem;
          margin-bottom: 10rem;
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

        .number-of-students-container{
            background: #FFFFFF;
            border-radius: 8px;
            border: 1px solid #d1d5db;
            display: flex;
            align-items: end;
            padding: 4px 13px;
            width: 220px;
        }

        .number-of-students-input{
            padding-bottom: 4px;
            padding-left: 5px;
        }

        .registration-name{
            width: 70%;
        }

        input[type='number']{
            width: 157px;
        }

        .number-of-students-input:focus-visible {
            outline: none;
        }

        .number-of-students-separator{
            margin-right: 10px;
        }

        .new-course-input-title{
            width: 67%;
        }


      `}</style>
      <section
        id="tutor-new-course-section"
        className="container-fluid px-lg-5"
      >
        <div className="container d-flex flex-column flex-md-row">
          <NewCourseProgress current={1} />
          <form className="col col-md-8 ms-auto">
            <h3 className="account-form-label fw-bold mb-4 h4">Student</h3>
            <div className="form-group">
              <div className="d-flex flex-column flex-sm-row align-items-start justify-content-evenly col">
                <div className="me-5">
                  <select
                    id="grouped-students"
                    className="form-select new-course-label"
                  >
                    <option>Grouped Student</option>
                    <option>Single Student</option>
                  </select>
                  <label
                    className="my-2 new-course-label"
                    htmlFor="grouped-students"
                  >
                    Select student type ?
                  </label>
                </div>

                <div className="me-auto">
                    <div className='number-of-students-container'>
                        <p className='mb-1 d-flex'>200 <span className='number-of-students-separator mr-3'>|</span></p>
                        <input size='1' type='number' className='number-of-students-input border-0' placeholder='Student' />
                    </div>
                  <label
                    className="my-2 new-course-label"
                    htmlFor="number-of-students"
                  >
                    Number of students
                  </label>
                </div>
              </div>

              <div className="p-3 registration-name d-flex align-items-center justify-content-around registration-input mt-4">
                <img
                  className="me-3"
                  src={pencil}
                  alt="person icon"
                  width="24"
                  height="24"
                />
                <input
                  id="new-course-title"
                  className="d-block text-input new-course-input-title mr-5"
                  type={"text"}
                  placeholder="Course title"
                />
                  <p className='mb-0 pl-1'>0/250 words</p>
              </div>
              <label
                className="mt-2 mb-5 new-course-label"
                htmlFor="new-course-title"
              >
                Input course title, keep it simple.
              </label>

              <div className="form-group col-md-10">
                <textarea
                  className="new-course-label p-3 rounded-4"
                  id="course-description"
                  name="course-description"
                  rows="6"
                  style={{ minWidth: "100%" }}
                  placeholder="Course description"
                />
              </div>

              <div className="form-row mt-5 col col-md-10">
                <h3 className="account-form-label fw-bold mb-3 h4">
                  Course categories
                </h3>
                <p className="new-course-label h5">
                  Select from our list of course categories for your new course
                </p>

                <select
                  id="course-category"
                  defaultValue={"DEFAULT"}
                  className="form-select new-course-label p-3 px-4 course-description-input"
                >
                  <option value="DEFAULT" disabled>
                    Choose course category
                  </option>
                  <option value="1">Web Development</option>
                  <option value="2">Video Games (General)</option>
                  <option value="3">PC Games</option>
                  <option value="4">Console Games</option>
                  <option value="5">Movie Trivia</option>
                </select>
                <label className="visually-hidden" htmlFor="course-category">
                  Choose Course Category
                </label>

                  <div className="form-row mt-5 col col-sm-6 w-75">
                      <h3 className="account-form-label fw-bold mb-3 h4">
                          Tag Course
                      </h3>
                      <Select
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          isMulti
                          styles={tagCourseStyles}
                          options={options}
                      />
                  </div>

                <div className="form-row mt-5 col col-sm-6">
                  <h3 className="account-form-label fw-bold mb-3 h4">
                    Class type
                  </h3>

                  <select
                    id="class-type"
                    defaultValue={"1"}
                    className="form-select new-course-label p-3 px-4 course-description-input"
                  >
                    <option value="1">Online</option>
                    <option value="2">Offline</option>
                  </select>
                  <label className="visually-hidden" htmlFor="class-type">
                    class type
                  </label>
                </div>
              </div>
            </div>
            <Link href={"/tutor/course-syllabus"}>
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
          </form>
        </div>
      </section>
    </>
  );
};
export default TutorNewCourse;
