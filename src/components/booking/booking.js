
import Template from "../template/template";

import Banner from "../banner/banner";
import Button from "../button/button";

const Booking = () => {

  return (
    <Template>
      <Banner/>
      <h1 className="center">Book a table 👨‍🍳</h1>
      <div className="bookingFormAll">
        <div className="bookingForm">
          <div>
            <div>
              <label>Date</label>
              <input type="date"/>
            </div>
            <div className="mt-1">
              <label>Time</label>
              <input type="time"/>
            </div>
          </div>
          <div>
            <div>
              <label>Number Guests</label>
              <input type="number" step={1} min={1} max={16} value={1}/>
            </div>
            <div className="mt-1">
              <label>Occasion</label>
              <select>
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </div>
          </div>
        </div>
        <div className="center">
          <Button>
              Book Table
          </Button>
        </div>
      </div>
    </Template>
  );

};

export default Booking;