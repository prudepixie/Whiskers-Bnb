import React from 'react';
import ReactDOM from 'react-dom';

export default class Reservations extends React.Component {

  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentWillMount(){
    $.get('/reservations', function(data){
      console.log('DATA HEREERERER');
      console.log(data);
    })
  }

  render() {
    return (
      <div>
        Hello
      </div>
    )
  }
}
