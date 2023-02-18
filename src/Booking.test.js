
import { generateXDays, initializeTimes, updateTimes } from "./components/booking/booking";

describe('Test bookings page fuctions', () => {


  const days = generateXDays(new Date("Feb 18, 2023 00:00:00"), 2);
  const initializedTimes = initializeTimes(days);


  test('Test initialize time', () => {

    const expected = {
      '2023-02-18': {
        '17:00': false,
        '18:00': false,
        '19:00': false,
        '20:00': false,
        '21:00': false,
        '22:00': false
      },
      '2023-02-19': {
        '17:00': false,
        '18:00': false,
        '19:00': false,
        '20:00': false,
        '21:00': false,
        '22:00': false
      }
    };

    expect(initializedTimes).toStrictEqual(expected);

  });



  test('Test update times', () => {

    const result = updateTimes(initializedTimes, {
      type : "BOOK",
      date : "2023-02-18",
      time : "20:00"
    });


    const expected = {
      '2023-02-18': {
        '17:00': false,
        '18:00': false,
        '19:00': false,
        '20:00': true,
        '21:00': false,
        '22:00': false
      },
      '2023-02-19': {
        '17:00': false,
        '18:00': false,
        '19:00': false,
        '20:00': false,
        '21:00': false,
        '22:00': false
      }
    };


    expect(result).toStrictEqual(expected);

  });


});

