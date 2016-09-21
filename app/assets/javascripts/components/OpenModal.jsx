var NewReservationForm = require('./NewReservationForm.jsx');

class OpenModal extends React.Component {

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

  handleReservationSubmit(reservation) {
    var userId = $('#user-id').text();

    $.ajax({
      url: '/reservations.json',
      type: 'POST',
      data: { reservation: reservation },
      success: (reservation) => {
        console.log('it worked!', reservation);
        $('#myModal').modal('hide');
        $('.modal-body input').val('');
      }
    });

    this.props.onReservationSubmit(reservation)
  }


  render() {
    return (
      <div>
        <button type="button" className="btn btn-default" data-toggle="modal" data-target="#myModal">
          Add New Reservations
        </button>

        <div className="modal fade" id="myModal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 className="modal-title" id="myModalLabel">New Reservation</h4>
              </div>
              <NewReservationForm onReservationSubmit={this.handleReservationSubmit.bind(this)}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = OpenModal
