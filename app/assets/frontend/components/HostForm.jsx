import React from 'react';
import Calendar from 'react-input-calendar';

export default class HostForm extends React.Component {
  constructor(props){
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    var first_name = this.refs.first_name.value;
    var last_name = this.refs.last_name.value;
    var email = this.refs.email.value;

    this.props.onHostSubmit({first_name: first_name, last_name: last_name, email: email});
    this.refs.first_name.value  = "";
    this.refs.last_name.value  = "";
    this.refs.email.value  = "";
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <p>
            <input ref="first_name" placeholder="Enter Your First Name" />
          </p>
          <p>
            <input ref="last_name" placeholder="Enter Your Last Name" />
          </p>
          <p>
            <input ref="email" placeholder="Enter Your Email" />
          </p>
          { /*
          <p>
            <Calendar format='DD/MM/YYYY' placeholder="Choose Your Availability" ref="availability" />
          </p>
          */}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
