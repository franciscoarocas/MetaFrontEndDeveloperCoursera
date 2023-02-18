
import Template from "../template/template";

import Banner from "../banner/banner";

import BookingForm from "../bookingForm/bookingForm";

import { useState, useReducer } from "react";

const AVAILABLE_TIMES = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

// https://beta.reactjs.org/reference/react/useReducer

const deepCopy = (object) => {
  return JSON.parse(JSON.stringify(object));
};

const initializeTimes = () => {

  let result = {};
  let date = new Date();

  const addZeroIfOneDigit = (digit) => {
    return digit < 10 ? "0" + digit : String(digit);
  }

  for (let i = 0; i < 7; ++i) {
    const parserDate = `${date.getFullYear()}-${addZeroIfOneDigit(date.getMonth()+1)}-${addZeroIfOneDigit(date.getDate())}`;
    result[parserDate] = {};
    AVAILABLE_TIMES.forEach((time) => {
      result[parserDate][time] = false;
    });
    date.setDate(date.getDate() + 1);
  }

  return result;

}


const updateTimes = (state, action) => {

  let copyState = deepCopy(state);

  if (action.type === "BOOK") {
    const date = action.date;
    const time = action.time;
    console.log("VALUE", copyState[date][time])
    copyState[date][time] = true;
  };

  return copyState;
}

const BookingPage = () => {

  const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, {}, initializeTimes);

  return (
    <Template>
      <Banner/>
      <BookingForm availableTimes={availableTimes} updateTimes={dispatchAvailableTimes}/>
    </Template>
  );

};

export default BookingPage;