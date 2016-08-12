import React from 'react';

export default class HostForm extends React.Component {
  constructor(props){
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    var firstName = this.refs.first_name.value;
    var email = this.refs.email.value;

    this.props.onHostSubmit({first_name: firstName, email: email});
    this.refs.first_name.value  = "";
    this.refs.email.value  = "";
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input ref="first_name" placeholder="Enter Your First Name" />
        <input ref="email" placeholder="Enter Your Email" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
