const RecommendedCourseCard = (props) => {
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
              max-width: 300px;
              border: none;
              border-radius: 20px;
              box-shadow: 0px 0px 40px rgba(0,0,0,0.05)
          }
          .course-prices {
              font-family: 'Ubuntu', san-serif;
          }
          .course-price-before {
              color: #9CA3AF;
              text-decoration: line-through;
          }
          
      `}</style>
      <div className="card new-course-card mx-lg-3 mb-5 col col-lg-4">
        <img
          className="card-img-top img-fluid"
          src={props.src}
          alt={props.alt}
          width="350"
          height="223"
        />
        <div className="card-body p-lg-4">
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

export default RecommendedCourseCard;
