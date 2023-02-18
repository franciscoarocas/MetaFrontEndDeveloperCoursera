
import { generateXDays, initializeTimes, updateTimes, getSelectedDays } from "./components/booking/booking";

describe('Test bookings page fuctions', () => {


  const days = generateXDays(new Date("Feb 18, 2023 00:00:00"), 2);
  const selectedDays = getSelectedDays(days);
  const initializedTimes = initializeTimes(days, selectedDays);


  test('Test initialize time', () => {

    for (let date in initializedTimes) {
      for (let hour in initializeTimes[date]) {
        if (selectedDays[date][hour] !== undefined) {
          expect(initializedTimes[date][hout]).toBe(false);
        } else {
          expect(initializedTimes[date][hout]).toBe(true);
        }
      }
    }

  });


  test('Test update times', () => {

    const date = "2023-02-18";
    let randomHour;

    for (let hour in initializeTimes[date]) {
      if (initializedTimes[date][hour] === false) {
        randomHour = hour;
        break;
      }
    }

    const result = updateTimes(initializedTimes, {
      type : "BOOK",
      date : date,
      time : randomHour
    });


    expect(result[date][randomHour]).toBe(true);

  });

});

