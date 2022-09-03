import courses from "../../../images/Tutors/charm_book.png";
import tlancers from "../../../images/Tutors/charm_people.png";
import tutors from "../../../images/Tutors/charm_id.png";
const TutorDashboard = (props) => {
  return (
    <>
      <style>{`
        .dboard-card {
            border: 1px solid #D1D5DB; 
            border-radius: 6px;
            box-shadow: 0px 0px 60px rgba(100,100,100,0.07);
        }
      `}</style>
      <section
        id="tutor-dashboard-section"
        className="container-fluid mb-5 p-lg-5"
      >
        <div className="container d-flex flex-column flex-md-row justify-content-center my-5">
          <div className="dboard-card col col-md-3 d-flex flex-column align-items-center pb-3 mx-lg-4 mb-5 mb-lg-0">
            <img
              className="img-fluid my-4"
              src={courses}
              alt="courses"
              width="100"
              height="100"
            />
            <p className="dboard-card-amount account-form-label fw-bold h5">
              30k+
            </p>
            <p className="dboard-card-type h5 account-heading">Courses</p>
          </div>
          <div className="dboard-card col col-md-3 d-flex flex-column align-items-center pb-3 mx-lg-4 mb-5 mb-lg-0">
            <img
              className="img-fluid my-4"
              src={tlancers}
              alt="tlancers"
              width="100"
              height="100"
            />
            <p className="dboard-card-amount account-form-label fw-bold h5">
              239403
            </p>
            <p className="dboard-card-type h5 account-heading">tlancers</p>
          </div>
          <div className="dboard-card col col-md-3 d-flex flex-column align-items-center pb-3 mx-lg-4 mb-5 mb-lg-0">
            <img
              className="img-fluid my-4"
              src={tutors}
              alt="tutors"
              width="100"
              height="100"
            />
            <p className="dboard-card-amount account-form-label fw-bold h5">
              12839
            </p>
            <p className="dboard-card-type h5 account-heading">Tutors</p>
          </div>
        </div>
      </section>
    </>
  );
};
export default TutorDashboard;
