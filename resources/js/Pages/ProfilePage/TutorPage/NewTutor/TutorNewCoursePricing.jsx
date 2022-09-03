// import { Link } from '@inertiajs/inertia-react';
import { NewCourseProgress } from "../../../../Components/NewCourseProgress";
const TutorNewCoursePricing = () => {
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


      `}</style>
      <section
        id="tutor-new-syllabus-section"
        className="container-fluid px-lg-5"
      >
        <div className="container d-flex flex-column flex-md-row">
          <NewCourseProgress current={5} />
          <form className="col col-md-8 ms-auto">
            <h1>New Course Pricing goes here.</h1>
          </form>
        </div>
      </section>
    </>
  );
};

export default TutorNewCoursePricing;
