import data, { data2 } from "./CoursesData";
const ExploreCourses = (props) => {
  const courses = data.map((course, index) => {
    return (
      <div
        className="course-container px-2 py-4 my-2 d-flex flex-column align-items-center justify-content-center text-center"
        key={index}
      >
        <img src={course.image} alt={course.alt} width="60" height="60" />
        <p className="popular-course-title">{course.course}</p>
      </div>
    );
  });

  const courses2 = data2.map((course, index) => {
    return (
      <div
        className="course-container px-2 py-4 my-2 d-flex flex-column align-items-center justify-content-center text-center"
        key={index}
      >
        <img src={course.image} alt={course.alt} width="60" height="60" />
        <p className="popular-course-title">{course.course}</p>
      </div>
    );
  });

  return (
    <>
      <style>{`
        .popular-course-title {
          font-family: 'Work Sans', sans-serif;
          font-weight: 500;
          margin-top: .5rem;
        }
        .course-container {
          max-width: 200px;
          width: 100%;
          height: 180px;
          border-radius: 20px;
          transition: .3s ease-in-out;
        }
        .course-container:hover {
          transform: scale(1.15);
          background: rgba(50,50,50,.05);
        }
        #explore-courses-heading {
          font-family: 'Ubuntu', san-serif;
        }
        `}</style>
      <section id="explore-courses-section" className="container-fluid">
      <div id={props.id}></div>
        <div className="container pb-5 mb-5 px-0">
          <h2
            id="explore-courses-heading"
            className="h3 fw-bold py-5 text-center text-md-start"
          >
            Explore Course Library
          </h2>
          <div className="d-flex flex-md-column justify-content-center">
            <div className="d-flex flex-column align-items-center flex-md-row justify-content-evenly px-2">
              {courses}
            </div>
            <div className="d-flex flex-column align-items-center flex-md-row justify-content-evenly px-2">
              {courses2}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExploreCourses;
