const PageNotFound = () => {
  return (
    <>
      <style>{`
      #page-not-found-section {
        margin-top: 5rem;
      }
      `}</style>
      <section id="page-not-found-section" className="container-fluid p-lg-5">
        <div className="container p-5 text-center account-form-label my-5">
          <h1>
            <span className="email-accent">404</span> Page Not Found
          </h1>
        </div>
      </section>
    </>
  );
};
export default PageNotFound;
