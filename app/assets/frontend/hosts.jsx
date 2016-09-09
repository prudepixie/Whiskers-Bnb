import React from 'react';
import ReactDOM from 'react-dom';

export default class Hosts extends React.Component {

  constructor() {
    super();
    this.state = {
      hosts: []
    }
  }

  componentWillMount(){
    $.get('/hosts', function(data){
      console.log('hosts HEREERERER');
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
