var ReservationButton = require('./ReservationButton.jsx');

class ReservationsList extends React.Component {

  handleDelete(id) {
    this.props.handleDelete(id);
  }

  handleBookingSubmit(reservation) {
    var userId = $('#user-id').text();


    $.ajax({
      url: `/users/${userId}/bookings.json`,
      type: 'POST',
      data: { booking: {guest_id: userId, reservation: reservation} },
      success: (data) => {
        console.log('Save new booking', reservation);
        setBookingId(reservation)
      }
    });


  }

  setBookingId(reservation) {
    $.ajax({
      url: `/reservations/${reservation.id}.json`,
      type: 'GET',
      success: (data) => {
        console.log(data);
      }
    });
  }

  render() {
    var hostId = $('#host-id').text();
    var userId = $('#user-id').text();
    var action;

    var reservations= this.props.reservations.map((reservation) => {
      if (hostId == userId) {
        action = <button className="btn btn-default" onClick={this.handleDelete.bind(this, reservation.id)}>Delete</button>;
        } else {
          action = <button className="btn btn-default" onClick={this.handleBookingSubmit.bind(this, reservation)}>Book</button>
        }
      return (
        <div key={reservation.id}>
          <ul>
            <li>{reservation.beginning_date}</li>
            <li>{reservation.ending_date}</li>
            <li>{reservation.host_id}</li>
            <li>{reservation.rate}</li>
            <li>{reservation.booking_id}</li>
            {action}
          </ul>
        </div>
      )
    });
    return (
      <div>
        <h6>List of available reservations </h6>
        {reservations}
      </div>
    )
  }
}

module.exports = ReservationsList
