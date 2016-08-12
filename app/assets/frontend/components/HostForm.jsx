import React from 'react';

export default class HostForm extends React.Component {
  constructor(props){
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    var first_name = this.refs.first_name.value;
    var last_name = this.refs.last_name.value;
    var email = this.refs.email.value;
    var availability = this.refs.availability.value;

    this.props.onHostSubmit({first_name: first_name, last_name: last_name, email: email, availability: availability});
    this.refs.first_name.value  = "";
    this.refs.last_name.value  = "";
    this.refs.email.value  = "";
    this.refs.availability.value  = [];
  }

  render() {
    return (
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
        <p>
          <input ref="availability" placeholder="Enter Your Availability" />
        </p>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
