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

  handleDelete(id) {
    var userId = $('#user-id').text();

    $.ajax({
      url: `/users/${userId}/bookings/${id}.json`,
      type: 'DELETE',
      success: () => {
        console.log('succesfuly removed booking');
        var newBookings = this.state.bookings.filter((booking) => {
          return booking.id != id
        });
        this.setState({bookings: newBookings});
      }
    })
  }

  componentDidMount() {
    this.loadBookingsFromServer();
  }

  render() {
    var bookings = this.state.bookings.map((booking) => {
      return (
        <div key ={booking.id}>
          <h6>Booking Id: {booking.id}</h6>
          <p>Reservation Id: {booking.reservation_id}</p>
          <button onClick={this.handleDelete.bind(this, booking.id)} className="btn btn-default">Delete</button>
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
