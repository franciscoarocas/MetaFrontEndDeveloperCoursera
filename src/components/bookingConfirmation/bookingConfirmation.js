
import Template from "../template/template";
import Banner from "../banner/banner";

const BookingConfirmation = () => {
  return (
    <Template>
      <Banner/>
      <h1 className="bookingConfirmation">The reservation has been confirmed!</h1>
    </Template>
  );
};

export default BookingConfirmation;