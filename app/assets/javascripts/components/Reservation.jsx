var ReservationsList = require('./ReservationsList.jsx');
var OpenModal = require('./OpenModal.jsx');

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
    return (
      <div>
        <ReservationsList reservations={this.state.reservations} handleDelete={this.handleDelete.bind(this)}/>
        <OpenModal onReservationSubmit={this.getNewReservation.bind(this)}/>
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
