
import Template from "../template/template";
import Banner from "../banner/banner";
import Button from "../button/button";

import data from "../../data.json";
import Special from "../special/special";
import Testimonial from "../testimonial/testimonial";

const Home = () => {

  return (
    <Template>
      <Banner/>
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
    </Template>
  );

};

export default Home;