
const Special = ({title, price, img}) => {

  return (
    <div className="special">
      <img src={img} alt={title}/>
      <div className="spaceBetween">
        <h2>{title}</h2>
        <p className="price">{price}</p>
      </div>
    </div>
  );

};

export default Special;