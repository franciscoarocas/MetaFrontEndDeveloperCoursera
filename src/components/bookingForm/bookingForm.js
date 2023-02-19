
import Button from "../button/button";

import { useState } from "react";

import { submitAPI } from '../../api';

import { redirect } from "react-router-dom";

// ADD DAYS
// https://stackoverflow.com/questions/563406/how-to-add-days-to-date

const TODAY = new Date().toISOString().split("T")[0];

const BookingForm = ({availableTimes, updateTimes}) => {

  const [date, setDate] = useState(TODAY)
  const [time, setTime] = useState(availableTimes[date ? date : TODAY])
  const [selectedTime, setSelectedTime] = useState('--');
  const [guests, setGuests] = useState(1)
  const [occassion, setOccasion] = useState("Birthday")

  const submitForm = () => {

    const response = submitAPI();

    if (response) {
      updateTimes({
        type : "BOOK",
        date   : date,
        time   : selectedTime
      });

      window.location.href = "/bookingConfirmed";

    }

  };


  const generateTimeInputValues = (values) => {

    let result = [];

    result.push(
      <option key={'--'}>--</option>
    )

    for (const time in values) {
      if (values[time] === false) {
        result.push(
          <option key={time}>{time}</option>
        );
      }
    }

    return result;

  };

  const generateMaxDate = (numberDays) => {

    let newDate = new Date();
    newDate.setDate(newDate.getDate() + numberDays);

    const addZeroIfOneDigit = (digit) => {
      return digit < 10 ? "0" + digit : String(digit);
    }

    const result = `${newDate.getFullYear()}-${addZeroIfOneDigit(newDate.getMonth()+1)}-${addZeroIfOneDigit(newDate.getDate())}`;

    return result;

  };

  const checkIfDisabled = () => {

    const userDate = Date.parse(`${date} ${selectedTime}`);

    if (userDate < new Date() || !(selectedTime !== '--')) {
      return true;
    }

    return false;

  }

  return (
    <>
      <h1 className="center">Book Now</h1>
      <div className="bookingFormAll">
        <div className="bookingForm">
          <div>
            <div>
              <label>Date</label>
              <input type="date" min={TODAY} max={generateMaxDate(6)} value={date} onChange={(e) => { setDate(e.target.value) }}/>
            </div>
            <div className="mt-1">
              <label>Time</label>
              <select onChange={(e) => { setSelectedTime(e.target.value) }}>
                {
                  generateTimeInputValues(availableTimes[date])
                }
              </select>
            </div>
          </div>
          <div>
            <div>
              <label>Number Guests</label>
              <input type="number" step={1} min={1} max={16} value={guests} onChange={(e) => { setGuests(e.target.value) }}/>
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
          <Button onClick={(e) => { submitForm() }} disabled={checkIfDisabled()}>
              Book Table
          </Button>
        </div>
      </div>
    </>
  );

};

export default BookingForm;