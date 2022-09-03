const CourseCard = (props) => {
  return (
    <>
      <style>{`
    .popular-courses-card:hover {
      transform: translateY(-5px) scale(1.03);
      box-shadow: 0px 10px 15px 1px rgba(0,0,0,0.1);
    }
    .popular-courses-card {
        background: #f6fbe7;
        border-radius: 20px;
        border: none;
        transition: .3s ease-in-out;
    }
    .popular-courses-card-body {
        display: flex;
        flex-direction: column;   
        align-items: center;
        justify-content: space-between;     
    }    
    .popular-courses-card h3 {
        color: #00274c;
        font-family: 'Ubuntu', san-serif;
    }
    .popular-courses-card p {
        font-family: 'Work Sans', sans-serif;
        color: #6c757d;
        font-size: 15px;
    }
    `}</style>
      <div className="card popular-courses-card py-2 px-2 my-4 mx-2">
        <div className="card-body popular-courses-card-body">
          <img src={props.src} alt={props.alt} width={"60"} height={"60"} />
          <h3 className="card-title fw-bold my-3 text-center h5">
            {props.title}
          </h3>
          <p className="card-text lh-sm">{props.text}</p>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
