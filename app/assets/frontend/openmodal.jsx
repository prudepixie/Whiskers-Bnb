import NewReservationForm from './NewReservationForm';

export default class OpenModal extends React.Component {

  handleClick() {
    console.log('hello');
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
                <NewReservationForm />
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
