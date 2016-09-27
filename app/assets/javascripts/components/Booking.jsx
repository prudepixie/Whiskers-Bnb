class Booking extends React.Component {
  constructor() {
    super();
    this.state = {
      bookings: []
    }
  }
  loadBookingsFromServer() {
    var userId = $('#user-id').text();

    $.ajax({
      url: `/users/${userId}/bookings.json`,
      type: 'GET',
      success: (data) => {
        this.setState({bookings: data})
      }
    });
  }
  componentDidMount() {
    this.loadBookingsFromServer();
  }

  render() {
    var bookings = this.state.bookings.map((booking) => {
      return (
        <div key ={booking.id}>
          <h6>Booking #{booking.id}</h6>
          <p>Reservation Id: {booking.reservation_id}</p>
        </div>
      )
    });
    return (
      <div>
        <h6>Manage My Bookings</h6>
        {bookings}
      </div>
    )
  }
}

module.exports = Booking;
