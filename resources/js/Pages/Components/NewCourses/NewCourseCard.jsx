// import starFull from "../../images/star_full.png";
// import starEmpty from "../../images/star_empty.png";
const NewCourseCard = (props) => {
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
    `}</style>

      <div className="card new-course-card col col-12 col-lg-3 mb-5 mx-4 px-0">
        <img
          className="card-img-top img-fluid"
          src={props.src}
          alt={props.alt}
          width="350"
          height="223"
        />
        <div className="card-body p-lg-4">
          <p className="new py-2 px-3">New</p>
          <h5 className="course-title mb-3">{props.courseTitle}</h5>
          <div className="d-flex">
            <img
              className="instructor-img me-2"
              src={props.instructorImg}
              alt="instructor"
              width={"30"}
              height={"30"}
            />
            <p className="instructor-name">{props.instructorName}</p>
          </div>
          <div className="d-flex">
            {/* <img
            className="star img-fluid"
            src={starFull}
            width="20"
            height="20"
            alt="gold star"
          /> */}
            ⭐⭐⭐⭐⭐ 5/5
          </div>
          <div className="d-flex course-prices mt-2">
            <p className="course-price fw-bold me-3">{props.price}</p>
            <p className="course-price-before">{props.priceBefore}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewCourseCard;
