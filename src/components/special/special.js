import Button from "../button/button";

const Special = ({title, price, img}) => {

  return (
    <div className="special">
      <div className="specialCover" style={{backgroundImage : `url(${img})`}}/>
      <div className="specialContent">
        <div className="spaceBetween">
          <h2>{title}</h2>
          <p className="price">{price}</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <Button>
          Order a delivery
        </Button>
      </div>
    </div>
  );

};

export default Special;