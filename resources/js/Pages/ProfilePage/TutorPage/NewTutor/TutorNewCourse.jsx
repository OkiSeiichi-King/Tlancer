import { Link } from '@inertiajs/inertia-react';
import pencil from "../../../../images/Tutors/pencil.png";
import { NewCourseProgress } from "../../../../Components/NewCourseProgress";

const TutorNewCourse = () => {
  return (
    <>
      <style>{`
        #tutor-new-course-section {
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
                  <input
                    type="number"
                    className="form-control text-end"
                    id="number-of-students"
                    placeholder="| Student"
                  />
                  <label
                    className="my-2 new-course-label"
                    htmlFor="number-of-students"
                  >
                    Number of students
                  </label>
                </div>
              </div>

              <div className="p-3 registration-name d-flex flex-row align-items-center registration-input mt-4 w-50">
                <img
                  className="me-3"
                  src={pencil}
                  alt="person icon"
                  width="24"
                  height="24"
                />
                <input
                  id="new-course-title"
                  className="d-block text-input"
                  type={"text"}
                  placeholder="Course title"
                />
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
                  defaultValue="Course description"
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
            <Link to={"/tutor/course-syllabus"}>
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
