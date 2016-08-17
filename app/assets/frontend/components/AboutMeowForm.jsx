import React from 'react';

export default class AboutMeowForm extends React.Component {
  constructor(props){
    super(props);
  }

  handleNameChange() {
    var name = this.refs.first_name.value;
    console.log(this);
    this.props.updateName(name);
  }
  checkName() {
    console.log(this.refs.first_name.value);
  }
  render() {
    return (
      <div>
        <form>
          <p>
            <input ref="first_name" placeholder="Enter Your First Name" onChange={this.handleNameChange.bind(this)}/>
          </p>
          <p>
            <input ref="last_name" placeholder="Enter Your Last Name" />
          </p>
          <p>
            <input ref="email" placeholder="Enter Your Email" />
          </p>
          <button onClick={this.checkName}></button>
          { /*
          <p>
            <Calendar format='DD/MM/YYYY' placeholder="Choose Your Availability" ref="availability" />
          </p>
          */}
        </form>
      </div>
    );
  }
}
