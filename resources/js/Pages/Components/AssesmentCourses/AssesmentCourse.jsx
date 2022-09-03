import AssesmentCourseCard from "./AssesmentCourseCard";
import new1 from "../../images/New Courses/new1.png";
// import new2 from "../../images/New Courses/new2.png";
import new3 from "../../images/New Courses/new3.png";
import new4 from "../../images/New Courses/new4.png";
import avatar1 from "../../images/New Courses/avatar1.png";
// import avatar2 from "../../images/New Courses/avatar2.png";
import avatar3 from "../../images/New Courses/avatar3.png";
import avatar4 from "../../images/New Courses/avatar4.png";

// import completed_icon from "../../images/AssesmentCourses/completed_icon.png";
// import failed_icon from "../../images/AssesmentCourses/failed_icon.png";
// import pending_icon from "../../images/AssesmentCourses/pending_icon.png";
// import score_icon from "../../images/AssesmentCourses/score_icon.png";

const AssesmentCourses = (props) => {
  return (
    <>
      <style>{`
      #new-courses-section {
        background: ${props.bgColor};
      }
    #new-courses-section h2 {
        font-family: 'Ubuntu', san-serif;
    }
    .new-courses-btn {
        background: none;
        border: none;
        font-family: 'Work Sans', sans-serif;
        font-weight: 500;
    }
    #new-courses-arrow {
        transform: rotate(235deg);
        margin-left: 0.25rem;
    }
    @media (max-width: 768px) {
      .new-courses-btn {
        display: none;
      }
    }
    `}</style>
      <section id="new-courses-section" className="container-fluid p-lg-5">
        <div className="container">
          <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between mt-5 my-md-5">
            <h2 className="h4 fw-bold my-5">{props.heading}</h2>
            <button className="new-courses-btn h5">
              Go to Assesment Page
              <svg
                id="new-courses-arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-down ms-2"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                />
              </svg>
            </button>
          </div>
          <div className="row justify-content-center">
            <AssesmentCourseCard
              src={new4}
              courseTitle="Geometry from Beginner to Senior Level"
              instructorImg={avatar4}
              instructorName="Wade Warren"
              assesmentProgress="Pending"
              score="0"
              assesmentAction="Complete Assesment"
            />
            <AssesmentCourseCard
              src={new1}
              courseTitle="User Experience Design foundation intro Assesment"
              instructorImg={avatar1}
              instructorName="Nicole Savana"
              assesmentProgress="Completed"
              score="10"
              assesmentAction="View Assesment"
            />

            <AssesmentCourseCard
              src={new3}
              courseTitle="Mathematic - Equation Assessment 2"
              instructorImg={avatar3}
              instructorName="Anina David"
              assesmentProgress="Failed"
              score="0"
              assesmentAction="Retake Assesment"
            />

            <AssesmentCourseCard
              src={new3}
              courseTitle="Mathematic - Equation Assessment 2"
              instructorImg={avatar3}
              instructorName="Anina David"
              assesmentProgress="Failed"
              score="0"
              assesmentAction="Retake Assesment"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default AssesmentCourses;
