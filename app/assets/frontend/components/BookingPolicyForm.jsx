import React from 'react';

export default class BookingPolicyForm extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <form >
          <p>
            <input ref="rates" placeholder="Enter your rate" />
          </p>
          { /*
          <p>
            <input ref="last_name" placeholder="Enter Your Last Name" />
          </p>
          <p>
            <input ref="email" placeholder="Enter Your Email" />
          </p>
          <p>
            <Calendar format='DD/MM/YYYY' placeholder="Choose Your Availability" ref="availability" />
          </p>
          */}
        </form>
      </div>
    );
  }
}
