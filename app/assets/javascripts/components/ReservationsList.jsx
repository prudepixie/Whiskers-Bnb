class ReservationsList extends React.Component {
  handleDelete(id) {
    this.props.handleDelete(id);
  }

  render() {
    var reservations = this.props.reservations.map((reservation) => {
      return (
        <div key ={reservation.id} >
          <ul>
            <li>{reservation.beginning_date}</li>
            <li>{reservation.ending_date}</li>
            <li>{reservation.host_id}</li>
            <li>{reservation.rate}</li>
            <button className="btn btn-default" onClick={this.handleDelete.bind(this, reservation.id)}>Delete</button>
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
