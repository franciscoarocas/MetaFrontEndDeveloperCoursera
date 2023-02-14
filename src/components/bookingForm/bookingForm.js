
import Button from "../button/button";

import { useState } from "react";

const AVAILABLE_TIMES = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

const BookingForm = () => {

  const [date, setDate] = useState()
  const [time, setTime] = useState(AVAILABLE_TIMES[0])
  const [guests, setGuests] = useState()
  const [occassion, setOccasion] = useState("Birthday")

  const submitForm = () => {

  };

  return (
    <>
      <h1 className="center">Book a table 👨‍🍳</h1>
      <div className="bookingFormAll">
        <div className="bookingForm">
          <div>
            <div>
              <label>Date</label>
              <input type="date" onChange={(e) => { setDate(e.target.value) }}/>
            </div>
            <div className="mt-1">
              <label>Time</label>
              <select onChange={(e) => { setTime(e.target.value) }}>
                {
                  AVAILABLE_TIMES.map((time) => {
                    return <option key={time}>{time}</option>
                  })
                }
              </select>
            </div>
          </div>
          <div>
            <div>
              <label>Number Guests</label>
              <input type="number" step={1} min={1} max={16} value={1} onChange={(e) => { setGuests(e.target.value) }}/>
            </div>
            <div className="mt-1">
              <label>Occasion</label>
              <select onChange={(e) => { setOccasion(e.target.value) }}>
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </div>
          </div>
        </div>
        <div className="center">
          <Button onClick={(e) => { submitForm() }}>
              Book Table
          </Button>
        </div>
      </div>
    </>
  );

};

export default BookingForm;