class NewReservationForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    var userId = $('#user-id').text();
    var beginning_date = this.refs.beginning_date.value;
    var ending_date = this.refs.ending_date.value;
    var rate = this.refs.rate.value;

    this.props.onReservationSubmit({beginning_date: beginning_date, ending_date: ending_date, rate: rate, host_id: userId})

  }

  render() {
    return (
      <div>
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
          <p className="hide">
            <input ref="host_id" placeholder="Host Id" />
          </p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button onClick={this.handleSubmit.bind(this)} className="btn btn-default">Add</button>
        </div>
      </div>
    )
  }
}

module.exports = NewReservationForm
