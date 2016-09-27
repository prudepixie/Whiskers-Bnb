class ReservationButton extends React.Component {

  handleBooking(id) {
    console.log('incomponent ');
    console.log(id);
    var userId = $('#user-id').text();

    $.ajax({
      url: `/users/${userId}/bookings.json`,
      type: 'POST',
      data: { booking: {guest_id: userId, reservation_id: id} },
      success: (booking) => {
        console.log('Save new booking', booking);
      }
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleBooking.bind(this, reservation)}>Reservation Button</button>
      </div>
    )
  }
}

module.exports = ReservationButton;
