class Reservations extends React.Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentWillMount(){
    var userId = $('#user-id').text();
    $.getJSON(`/users/${userId}.json`, (data) => {
      console.log('DATA HEREERERER');
      console.log(data);
      this.setState({
        reservations: data
      })
    })
  }


  render() {
    var reservations = this.state.reservations.map((reservation) => {
      return (
        <div key ={reservation.id} >
          <ul>
            <li>{reservation.beginning_date}</li>
            <li>{reservation.ending_date}</li>
            <li>{reservation.host_id}</li>
            <li>{reservation.rate}</li>
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

let documentReady = () => {
  ReactDOM.render(
    <Reservations />, document.getElementById('reservations')
    );
};


$(documentReady);
