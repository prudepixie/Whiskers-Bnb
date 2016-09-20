class NewReservationForm extends React.Component {
  render() {
    return (
      <div>
        <p>
          <input type="date" ref="first_name" placeholder="Enter Your First Name" />
        </p>
        <p>
          <input type="date" ref="last_name" placeholder="Enter Your Last Name" />
        </p>
        <p>
          <input type="number" ref="rate" placeholder="Enter Your rate" />
        </p>
        <p>
          <input ref="host_id" placeholder="Host Id" />
        </p>
      </div>
    )
  }
}

module.exports = NewReservationForm
