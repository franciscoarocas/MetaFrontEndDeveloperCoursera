
import Template from "../template/template";

import Banner from "../banner/banner";

import BookingForm from "../bookingForm/bookingForm";

import { useState, useReducer } from "react";

const AVAILABLE_TIMES = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

// https://beta.reactjs.org/reference/react/useReducer

const deepCopy = (object) => {
  return JSON.parse(JSON.stringify(object));
};

export const generateXDays = (date, numberNewDays) => {

  let result = [];
  let newDate = new Date(date);

  const addZeroIfOneDigit = (digit) => {
    return digit < 10 ? "0" + digit : String(digit);
  }

  for (let _ = 0; _ < numberNewDays; ++_) {
    const parserDate = `${newDate.getFullYear()}-${addZeroIfOneDigit(newDate.getMonth()+1)}-${addZeroIfOneDigit(newDate.getDate())}`;
    result.push(parserDate);
    newDate.setDate(newDate.getDate() + 1);
  }

  return result;

};

export const initializeTimes = (days) => {

  let result = {};

  for (const day of days) {
    result[day] = {};
    AVAILABLE_TIMES.forEach((time) => {
      result[day][time] = false;
    });
  }

  return result;

}


export const updateTimes = (state, action) => {

  let copyState = deepCopy(state);

  if (action.type === "BOOK") {
    const date = action.date;
    const time = action.time;
    copyState[date][time] = true;
  };

  return copyState;
}

const BookingPage = () => {

  const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, {}, () => initializeTimes(generateXDays(new Date, 7)));

  return (
    <Template>
      <Banner/>
      <BookingForm availableTimes={availableTimes} updateTimes={dispatchAvailableTimes}/>
    </Template>
  );

};

export default BookingPage;