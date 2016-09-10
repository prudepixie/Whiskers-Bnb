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
        <section className="col-lg-6">
            <div key={host.id} className="panel panel-default">
              <a href={"/users/"+ host.id}>
                <div className="panel-heading">
                  <h3>{host.first_name} {host.last_name}</h3>
                </div>
              </a>
              <div className="panel-body">
                <p>{host.email}</p>
                <p>{host.city}</p>
                <p>{host.summary}</p>
              </div>
            </div>
        </section>
      )
    });

    return(
      <div>{hosts}</div>
    )
  }
}
