var ReservationsList = require('./ReservationsList.jsx');
var OpenModal = require('./OpenModal.jsx');
var Booking = require('./Booking.jsx');

class Reservation extends React.Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }
  loadReservationsFromServer() {
    var hostId = $('#host-id').text();
    $.getJSON(`/users/${hostId}.json`, (data) => {
      this.setState({reservations: data})
    })
  }

  getNewReservation(reservation) {
    var reservations = this.state.reservations;
    var newReservation = reservations.concat([reservation]);
    this.setState({reservations: newReservation});
  }

  handleDelete(id) {
    $.ajax({
      url: `/reservations/${id}.json`,
      type: 'DELETE',
      success: () => {
        console.log('succesfully removed reservation');
        var newReservations = this.state.reservations.filter((reservation) => {
          return reservation.id != id
        });

        this.setState({reservations: newReservations});
      }
    })
  }

  componentDidMount() {
    this.loadReservationsFromServer();
  }

  render() {
    var userId = $('#user-id').text();
    var hostId = $('#host-id').text();
    var guestId = $('#guest-id').text();

    var displayList;
    var showModal = <OpenModal onReservationSubmit={this.getNewReservation.bind(this)}/>;

    if (userId === hostId) {
      console.log('host area');
      displayList = <ReservationsList reservations={this.state.reservations} handleDelete={this.handleDelete.bind(this)}/>;
    } else if (userId === guestId) {
      console.log('guest area');
      displayList = <Booking />
      showModal = false;
    } else {
      console.log('Guest visiting Host reservations/ not logged in ');
      displayList = <ReservationsList reservations={this.state.reservations} handleDelete={this.handleDelete.bind(this)}/>;
      showModal = false;
    }
    return (
      <div>
        {displayList}
        {showModal}
      </div>
    )
  }
}

let documentReady = () => {
  ReactDOM.render(
    <Reservation />, document.getElementById('reservation')
    );
};


$(documentReady);
