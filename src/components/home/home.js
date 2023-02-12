
import Template from "../template/template";
import Banner from "../banner/banner";
import Button from "../button/button";

import data from "../../data.json";
import Special from "../special/special";

const Home = () => {

  return (
    <Template>
      <Banner/>
      <div className="spaceBetween">
        <h2>Specials</h2>
        <Button text="Book a table"/>
      </div>
      <div className="specials">
        {
          data['specials'].map((special) => <Special {...special}/>)
        }
      </div>
    </Template>
  );

};

export default Home;