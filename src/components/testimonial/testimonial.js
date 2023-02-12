
const Testimonial = ({rating, name, text}) => {

  return (
    <div className="testimonial">
      <h6 className="stars">
        {
          [1,2,3,4,5].map((item) => {
            return (
              item > rating ? <span>☆</span> : <span>★</span>
            )
          })
        }
      </h6>
      <div className="user">
        <div className="avatar"/>
        <h3>{name}</h3>
      </div>
      <p>{text}</p>
    </div>
  );

};

export default Testimonial;