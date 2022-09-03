import NewCourseCard from "./NewCourseCard";
import new1 from "../../images/New Courses/new1.png";
import new2 from "../../images/New Courses/new2.png";
import new3 from "../../images/New Courses/new3.png";
import new4 from "../../images/New Courses/new4.png";
import avatar1 from "../../images/New Courses/avatar1.png";
import avatar2 from "../../images/New Courses/avatar2.png";
import avatar3 from "../../images/New Courses/avatar3.png";
import avatar4 from "../../images/New Courses/avatar4.png";

const NewCourses = (props) => {
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
              See all
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
            <NewCourseCard
              src={new1}
              alt="instructor"
              courseTitle="User Research Pro-Level Course for Beginner"
              instructorImg={avatar1}
              instructorName="Nicole Savana"
              price="$15.99"
              priceBefore="$25.99"
            />
            <NewCourseCard
              src={new2}
              alt="instructor"
              courseTitle="Senior Level General Chemistry Course"
              instructorImg={avatar2}
              instructorName="Fiona Garbson"
              price="$15.99"
              priceBefore="$25.99"
            />
            <NewCourseCard
              src={new3}
              alt="instructor"
              courseTitle="Geometry from Beginner to Senior Level"
              instructorImg={avatar3}
              instructorName="Anina David"
              price="$15.99"
              priceBefore="$25.99"
            />
            <NewCourseCard
              src={new4}
              alt="instructor"
              courseTitle="Geometry from Beginner to Senior Level"
              instructorImg={avatar4}
              instructorName="Wade Warren"
              price="$15.99"
              priceBefore="$25.99"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default NewCourses;
