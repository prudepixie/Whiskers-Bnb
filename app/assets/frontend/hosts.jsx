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
    $.getJSON('/hosts.json', (data) => {
      console.log('hosts HEREERERER');
      console.log(data);
      this.setState({
        hosts: data
      })
    })
  }

  render() {
    var hosts = this.state.hosts.map((host) => {
      return (
        <div key={host.id} className="panel panel-default">
          <div>
            <h3>{host.first_name}</h3>
            <p>{host.email}</p>
          </div>
        </div>
      )
    });

    return(
      <div>{hosts}</div>
    )
  }
}
