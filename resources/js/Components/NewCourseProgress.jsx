import greenBall from "../images/Tutors/greenBall.png";
import greyBall from "../images/Tutors/greyBall.png";
export const NewCourseProgress = (props) => {
    console.log("course progress ran");
    return (
        <>
            <style>{`


      .ubuntu {
        color: var(--body-grey);
      }



      ul {
        padding-left: 13px;
      }
      span {
        position: relative;
        left: 10px;
      }
      .new-course-progress-list {
        list-style: url(${greyBall});
        border-left: 1px solid var(--grey-5);
      }
      .current {
        color: var(--product-dark-blue);
      }
      .new-course-progress-list .current {
        list-style: url(${greenBall});
      }

      @media (min-width: 768px) {
        #progress-container {
          position: fixed;
        }
      }
    `}</style>
            <div
                id="progress-container"
                className="p-0 ubuntu mx-auto mr-md-auto col col-md-3 mb-5"
            >
                <h3 className="h4 fw-bold new-course-progress-heading ps-4">
                    New Course
                </h3>
                <ul className="h4 fw-bold new-course-progress-list py-1">
                    <li
                        className={
                            props.current === 1 ? "my-5 current" : "my-5"
                        }
                    >
                        <span>Course Details</span>
                    </li>
                    <li
                        className={
                            props.current === 2 ? "my-5 current" : "my-5"
                        }
                    >
                        <span>Syllabus</span>
                    </li>
                    <li
                        className={
                            props.current === 3 ? "my-5 current" : "my-5"
                        }
                    >
                        <span>Course preview video</span>
                    </li>
                    <li
                        className={
                            props.current === 4 ? "my-5 current" : "my-5"
                        }
                    >
                        <span>Set course calendar</span>
                    </li>
                    <li
                        className={
                            props.current === 5 ? "my-5 current" : "my-5"
                        }
                    >
                        <span>Pricing</span>
                    </li>
                </ul>
            </div>
        </>
    );
};
