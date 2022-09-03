import { Link } from '@inertiajs/inertia-react';

const AssesmentCourseCard = (props) => {
  const bgColor =
    props.assesmentProgress === "Failed" ? "rgba(253, 78, 93, 0.15)" : "#fff";

  return (
    <>
      <style>{`
        .instructor-name {
            color: #9CA3AF;
            font-family: 'Work Sans', sans-serif;
        }
        .course-title, .new {
            font-family: 'Ubuntu', san-serif;
            font-weight: 500;
        }
        .card-img-top {
            border-radius: 20px 20px 0px 0px;
        }
        .new-course-card {
            max-width: 275px;
            border: none;
            border-radius: 20px;
            box-shadow: 0px 0px 40px rgba(100,100,100,0.15);
        }
        .course-prices {
            font-family: 'Ubuntu', san-serif;
        }
        .course-price-before {
            color: #9CA3AF;
            text-decoration: line-through;
        }
        .new {
            background: #0EBE6A;
            color: #fff;
            display: inline-block;
            border-radius: 6px;
        }


        .score-properties{
            color: #00274c;
            font-family: 'Ubuntu';
        }

        .text_color{
            color: #00274c;
        }
        .btn-get-started_new {
            background: #fff;;
            color: var(--dark-blue);
            font-family: 'Ubuntu', san-serif;
            font-weight: 500;
            display: flex;
            align-items: center;
            justify-content: space-between;
            max-width: 275px;
            border: 1px solid var(--dark-blue);
        }

        .pending {
            color: #FFCB05;
        }

        .failed {
            color: #FD4E5D;
        }
    `}</style>

      <div
        style={{ backgroundColor: bgColor }}
        className="card new-course-card col col-12 col-lg-3 mb-5 mx-4 px-0"
      >
        <img
          className="card-img-top img-fluid"
          src={props.src}
          alt={props.alt}
          width="350"
          height="223"
        />
        <div className="card-body p-lg-3 d-flex flex-column justify-content-between">
          <h5 className="course-title mb-3 text_color">{props.courseTitle}</h5>
          <div className="d-flex">
            <img
              className="instructor-img me-2"
              src={props.instructorImg}
              alt="instructor"
              width={"30"}
              height={"30"}
            />
            <p className="instructor-name ">{props.instructorName}</p>
          </div>

          <div className="d-flex justify-content-between">
            <div
              className={
                props.assesmentProgress === "Failed"
                  ? "d-flex align-items-center failed"
                  : props.assesmentProgress === "Completed"
                  ? "d-flex align-items-center email-accent"
                  : "d-flex align-items-center pending"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill={
                  props.assesmentProgress === "Failed"
                    ? "#FD4E5D"
                    : props.assesmentProgress === "Completed"
                    ? "#0ebe6a"
                    : "#FFCB05"
                }
                className="bi bi-hourglass"
                viewBox="0 0 16 16"
              >
                <path d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5zm2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702c0 .7-.478 1.235-1.011 1.491A3.5 3.5 0 0 0 4.5 13v1h7v-1a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351v-.702c0-.7.478-1.235 1.011-1.491A3.5 3.5 0 0 0 11.5 3V2h-7z" />
              </svg>
              <p className="mb-0 ms-2">{props.assesmentProgress}</p>
            </div>

            <div className="d-flex align-items-center score-properties">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fillRule="currentColor"
                className="bi bi-mortarboard"
                viewBox="0 0 16 16"
              >
                <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z" />
                <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z" />
              </svg>
              <p className="mb-0 ms-2">Score {props.score}/10</p>
            </div>
          </div>
        </div>
        <div className="p-3">
          <Link
            to={"/parent/assesment"}
            style={{ backgroundColor: bgColor }}
            className="btn-get-started_new btn text-nowrap"
          >
            {props.assesmentAction}{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-right-short"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AssesmentCourseCard;
