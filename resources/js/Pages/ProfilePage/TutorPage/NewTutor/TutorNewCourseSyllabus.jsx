import { Link } from '@inertiajs/inertia-react';
import { NewCourseProgress } from "../../../../Components/NewCourseProgress";
const TutorNewCourseSyllabus = () => {
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

        .add-syllabus {
          border: 1px solid rgba(150,150,150,.5);
          background: #fff;
          transition: .3s ease-in-out;
        }

        .add-syllabus:hover {
          background: #808080;
          color: #fff;
        }

        .account-heading-p {
          font-weight: 400;
        }



      `}</style>
      <section
        id="tutor-new-syllabus-section"
        className="container-fluid px-lg-5"
      >
        <div className="container d-flex flex-column flex-md-row">
          <NewCourseProgress current={2} />
          <form className="col col-md-8 ms-auto">
            <h3 className="account-heading h5">Course Syllabus</h3>
            <div className="course-description-input d-flex align-items-center col col-md-8 my-4 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-file-earmark-text m-3"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
              </svg>
              <p className="m-0 me-auto account-heading h4">UX Design.dox</p>
              <button className="fw-bold bg-transparent border-0 email-accent text-nowrap">
                Change file
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-folder m-3"
                  viewBox="0 0 16 16"
                >
                  <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z" />
                </svg>
              </button>
            </div>
            <div className="course-description-input d-flex flex-column align-items-center p-5 my-5 col col-md-8">
              <p className="account-heading account-heading-p h4">
                Upload course syllabus.
              </p>
              <p className="account-heading account-heading-p h4">
                PDF, docx, PPT, and text
              </p>
              <input type="file" name="upload" accept="application/pdf,application/vnd.ms-excel"/>
              <button className="add-syllabus account-heading rounded-2 my-4 p-3 w-75 h5">
                + Add more
              </button>
            </div>
            <Link to={"/tutor/course-preview-video"}>
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

export default TutorNewCourseSyllabus;
