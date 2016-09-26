class Booking extends React.Component {
  constructor() {
    super();
    this.state = {
      bookings: []
    }
  }
  loadBookingsFromServer() {
    var userId = $('#user-id').text();
    $.getJSON(`/users/${userId}/bookings.json`, (data) => {
      this.setState({bookings: data})
    })
  }
  componentDidMount() {
    this.loadBookingsFromServer();
  }

  render() {
    var bookings = this.state.bookings.map((booking) => {
      return (
        <div key ={booking.id}>
          <h6>{booking.guest_id}</h6>
          <p>{booking.created_at}</p>
        </div>
      )
    });
    return (
      <div>
        <h6>List of My Bookings</h6>
        {bookings}
      </div>
    )
  }
}

let documentReady = () => {
  ReactDOM.render(
    <Booking />, document.getElementById('bookings')
    );
};


$(documentReady);
