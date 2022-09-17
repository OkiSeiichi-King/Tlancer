import { Link } from '@inertiajs/inertia-react';

const TutorNoCourses = () => {
  return (
    <>
      <style>{`
        .btn-new-course {
            background: var(--active-link);
            color: #fff;
        }
      `}</style>
      <section className="container-fluid ">
        <div className="container">
          <h2 className="account-form-label fw-bold h3 my-5 mt-lg-0">
            Course Library
          </h2>
        </div>

        <div className="container text-center p-5 my-5">
          <Link
            href={route('tutor-new-course')}
            className="btn btn-new-course btn-lg fw-bold h5"
          >
            + Add new course
          </Link>
          <h3 className="account-form-label fw-bold h5 my-3">
            You have not created a course yet.
          </h3>
          <p className="account-heading">
            Find the help you need on <br /> the{" "}
            <span className="email-accent">support page</span>
          </p>
        </div>
      </section>
    </>
  );
};
export default TutorNoCourses;
