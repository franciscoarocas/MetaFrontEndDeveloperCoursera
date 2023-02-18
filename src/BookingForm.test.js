
import { render, screen } from "@testing-library/react";
import BookingForm from './components/bookingForm/BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={{"02-02-2023" : [{"17:00" : false}]}}/>);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
});