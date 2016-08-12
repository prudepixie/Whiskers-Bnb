import React from 'react';

import HostForm from "./HostForm";
import HostsList from "./HostsList";

export default class BecomeHost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hostsList: [],
      first_name: '',
      last_name: '',
      email: '',
      availability: []
     };
  }

  componentDidMount() {
    $.ajax("/hosts")
    .success(data => this.setState({ hostsList: data }))
    .error(error => console.log(error))
  }

  handleHostSubmit(host) {
    let newHostsList = this.state.hostsList;
    let that = this
    $.post('/hosts', { host: host }, function(data){
      console.log('data')
      newHostsList.unshift(data);
      that.setState({hostsList: newHostsList});
    })
  }


  render() {
    return(
      <div>
        <h4>Become a Host</h4>
        <HostForm onHostSubmit={this.handleHostSubmit.bind(this)} />
        <HostsList hosts={this.state.hostsList} />
      </div>
    );
  }
}
