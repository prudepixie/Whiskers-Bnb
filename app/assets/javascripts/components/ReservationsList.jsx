class ReservationsList extends React.Component {

  render() {
    var reservations = this.props.data.map((reservation) => {
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

module.exports = ReservationsList
