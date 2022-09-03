const StudentHero = () => {
  return (
    <>
      <style>{`
    #student-hero-section h1 {
        font-family: 'Ubuntu', san-serif;
        font-weight: medium;
        color: var(--dark-blue);
    }

    #student-hero-search {
        border: none;
    }
    #student-hero-search:focus {
      outline: none;
    }

    #student-search-icon {
        opacity: .5;
    }

    #student-hero-search-container {
        border: 1px solid #d1d5db;
        border-radius: 20px;
        {/* width: 100%; */}
    }

    #student-hero-search-btn {
        background: none;
        padding: .25rem 1rem;
        margin: 0;
        border: none;
        color: var(--active-link);
    }
    #student-hero-section {
        margin-top: 8rem;
    }

    @media (min-width: 1024px) {
        #student-hero-search-container {
            max-width: 40vw;
        }
    }
`}</style>
      <section
        id="student-hero-section"
        className="container-fluid p-lg-5 text-center"
      >
        <div className="container my-lg-5 p-lg-5">
          <h1>Love to learn something new today?</h1>
          <div
            id="student-hero-search-container"
            className="my-5 d-flex justify-content-start align-items-center p-2 p-md-3 mx-auto"
          >
            <svg
              id="student-search-icon"
              className="mx-3 bi bi-search d-none d-md-block"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            <input
              id="student-hero-search"
              className="me-auto w-100"
              placeholder="Search for any course, tutors, categories"
              type={"text"}
            />
            <button id="student-hero-search-btn" className="fw-medium d-flex">
              Search
              <span className="ms-2 d-none d-md-inline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentHero;
