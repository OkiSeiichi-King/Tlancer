const JoinRightWrapper = (props) => {
  return (
    <>
      <div className="container d-flex">
        <img
          src={props.src}
          alt={props.alt}
          className="img-fluid ms-auto mb-0"
        />
      </div>
    </>
  );
};
export default JoinRightWrapper;
