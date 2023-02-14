
import Template from "../template/template";
import Banner from "../banner/banner";
import Button from "../button/button";

import data from "../../data.json";
import Special from "../special/special";
import Testimonial from "../testimonial/testimonial";

const HomePage = () => {

  return (
    <Template>
      <Banner showButton/>
      <div className="spaceBetween">
        <h2>Specials</h2>
        <Button>
          Book a table
        </Button>
      </div>
      <div className="specials">
        {
          data['specials'].map((special, key) => <Special key={key} {...special}/>)
        }
      </div>
      <div className="testimonials">
        <h1>Testimonials</h1>
        <div className="spaceBetween">
          {
            data['testimonials'].map((testimonial, key) => <Testimonial key={key} {...testimonial}/>)
          }
        </div>
      </div>
      <div className="secondCover spaceBetween">
        <div>
          <h1>Little Lemon Restaurant</h1>
          <h2>Chicago</h2>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
        <div className="beforeFooter">
          <img src="/icons_assets/restaurant.jpg" className="imgA" />
          <img src="/icons_assets/restaurant chef B.jpg" className="imgB" />
        </div>
      </div>
    </Template>
  );

};

export default HomePage;