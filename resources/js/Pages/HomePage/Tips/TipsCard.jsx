const TipsCard = (props) => {
  return (
    <>
      <style>{`
        .tip-card:hover {
          transform: scale(1.05);
          box-shadow: 0px 5px 60px rgba(0,0,0,0.15);
        }
        .tip-card {
            border: none;
            box-shadow: 0px 5px 30px rgba(0,0,0,0.06);
            margin-bottom: 2rem;
            color: #00274c;
            display: flex;
            transition: .3s ease-in-out;
        }
        .tricks {
            font-family: 'Work Sans', sans-serif;
            font-size: .9rem;
            color: #0ebe6a;
        }
        .tips-title {
            font-family: 'Ubuntu', san-serif;
        }
        .tips-text {
            font-family: 'Work Sans', sans-serif;
            color: #6c757d;
        }
        @media (max-width: 768px) {
          .tip-card {
            margin-bottom: 6rem;
          }
        }
    `}</style>
      <div className="col col-md-3 px-4">
        <div className="card tip-card p-4 my-3">
          <img
            className="card-img-top img-fluid"
            src={props.src}
            alt="Suggested Tip"
          />
          <div className="card-body p-0">
            <p className="my-3 tricks">Tips & Tricks</p>
            <h5 className="card-title mb-3 h6 fw-bold tips-title">
              {props.title}
            </h5>
            <p className="card-text tips-text">{props.text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TipsCard;
