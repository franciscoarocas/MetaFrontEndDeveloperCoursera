import Button from "../button/button";

const Banner = () => {

  return (
    <div className="banner">
      <div>
        <h1>Little Lemon Restaurant</h1>
        <h2>Chicago</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <Button>
          Reserve a table
        </Button>
      </div>
      <img src="/icons_assets/Mario and Adrian A.jpg"/>
    </div>
  );

};

export default Banner;