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
    var userId = $('#user-id').text();
    $.getJSON(`/users/${userId}.json`, (data) => {
      this.setState({reservations: data})
    })
  }

  getNewReservation(reservation) {
    var reservations = this.state.reservations;
    var newReservation = reservations.concat([reservation]);
    this.setState({reservations: newReservation});
  }


  componentDidMount() {
    this.loadReservationsFromServer();
  }

  render() {
    return (
      <div>
        <ReservationsList data={this.state.reservations}/>
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
