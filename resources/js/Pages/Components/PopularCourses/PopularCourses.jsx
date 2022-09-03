import CourseCard from "./CourseCard";
import adobe from "../../images/adobe.png";
import dataAnalytics from "../../images/dataAnalytics.png";
import figma from "../../images/figma.png";
import python from "../../images/python.png";
const PopularCourses = (props) => {
  return (
    <>
      <style>{`
            #popular-courses-section h2 {
                font-family: 'Ubuntu', san-serif;
            }

            .more-courses-btn {
                background: none;
                border: none;
                font-family: 'Work Sans', sans-serif;
                font-weight: 500;
            }

            #more-courses-arrow {
                transform: rotate(235deg);
                margin-left: 0.25rem;
            }

            @media (max-width: 768px) {
              .more-courses-btn {
                display: none;
              }
            }
            `}</style>
      <section id='popular-courses-section'>
      <div id={props.id}></div>
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between mt-5 my-md-5">
          <h2 className="h4 fw-bold pb-4">Popular Courses</h2>
          <button className="more-courses-btn h5">
            See more courses
            <svg
              id="more-courses-arrow"
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
        <div className="container d-flex flex-column flex-md-row ">
          <div className="col col-md-3">
            <CourseCard
              src={adobe}
              alt="adobe xd"
              title="Adobe XD"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet nunc, integer leo sit non est sed dignissim. Sit quis erat eget ut. Porttitor non id morbi nibh nisl. "
            />
          </div>
          <div className="col col-md-3">
            <CourseCard
              src={python}
              alt="python"
              title="Python"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet nunc, integer leo sit non est sed dignissim. Sit quis erat eget ut. Porttitor non id morbi nibh nisl. "
            />
          </div>
          <div className="col col-md-3">
            <CourseCard
              src={figma}
              alt="figma"
              title="Figma"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet nunc, integer leo sit non est sed dignissim. Sit quis erat eget ut. Porttitor non id morbi nibh nisl. "
            />
          </div>
          <div className="col col-md-3">
            <CourseCard
              src={dataAnalytics}
              alt="data analytics"
              title="Data Analytics"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet nunc, integer leo sit non est sed dignissim. Sit quis erat eget ut. "
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default PopularCourses;
