
import Template from "../template/template";

import Banner from "../banner/banner";

import BookingForm from "../bookingForm/bookingForm";

import { useReducer } from "react";

import { fetchAPI } from '../../api';

const AVAILABLE_TIMES = ["17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"];

// https://beta.reactjs.org/reference/react/useReducer



const deepCopy = (object) => {
  return JSON.parse(JSON.stringify(object));
};


export const getSelectedDays = (dates) => {

  let result = {};

  for (const day of dates) {
    const parsedDate = Date.parse(day)
    const daysFromAPI = fetchAPI(new Date(parsedDate));
    result[day] = daysFromAPI;
  }

  return result;

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



export const initializeTimes = (days, selectedDays) => {

  let result = {};

  for (const day of days) {
    result[day] = {};
    const parsedDate = Date.parse(day)
    const daysFromAPI = fetchAPI(new Date(parsedDate));
    AVAILABLE_TIMES.forEach((time) => {
      const isAvailable = daysFromAPI.indexOf(time) > 0;
      result[day][time] = isAvailable;
    });
  }

  return result;

};


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

  const dates = generateXDays(new Date, 7);

  const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, {}, () => initializeTimes(dates, getSelectedDays(dates)));

  return (
    <Template>
      <Banner/>
      <BookingForm availableTimes={availableTimes} updateTimes={dispatchAvailableTimes}/>
    </Template>
  );

};

export default BookingPage;