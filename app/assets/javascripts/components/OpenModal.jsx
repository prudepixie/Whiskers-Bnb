var NewReservationForm = require('./NewReservationForm.jsx');

class OpenModal extends React.Component {

  constructor() {
    super();
    this.state = {

    }
  }

  handleClick() {
    var userId = $('#user-id').text();
    var beginning_date = this.refs.beginning_date.value;
    var ending_date = this.refs.ending_date.value;
    var rate = this.refs.rate.value;
    $.post(`/users/${userId}.json`, () => {
      console.log('reservation');
      this.setState({
        new_reservation: { beginning_date: beginning_date } 
      })
    })
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
              <div className="modal-body">
                  <p>
                    <input type="date" ref="beginning_date" />
                  </p>
                  <p>
                    <input type="date" ref="ending_date"/>
                  </p>
                  <p>
                    <input type="number" ref="rate" placeholder="Enter Your rate" />
                  </p>
                  <p>
                    <input ref="host_id" placeholder="Host Id" />
                  </p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button onClick={this.handleClick} className="btn btn-default">Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

let documentReady = () => {
  ReactDOM.render(
    <OpenModal />, document.getElementById('open-modal')
    );
};

$(documentReady);
