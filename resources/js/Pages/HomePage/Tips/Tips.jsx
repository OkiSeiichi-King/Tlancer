import TipsCard from "./TipsCard";
import { tipData } from "./TipsData";
const Tips = () => {
  const tipsRow = tipData.map((tip, index) => {
    return (
      <TipsCard key={index} src={tip.src} title={tip.title} text={tip.text} />
    );
  });
  return (
    <>
      <style>{`
    #tips-heading {
                font-family: 'Ubuntu', san-serif;
            }
    `}</style>
      <section>
        <div
          id="tips-heading"
          className="container d-flex flex-column flex-md-row align-items-center justify-content-between mt-5 mb-md-5"
        >
          <h2 className="h4 fw-bold pb-4">Tips & Updates</h2>
          <button className="more-courses-btn h5">
            See more tips
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
        <div className="d-flex flex-column flex-md-row container pt-5 px-0">
          {tipsRow}
        </div>
      </section>
    </>
  );
};

export default Tips;
