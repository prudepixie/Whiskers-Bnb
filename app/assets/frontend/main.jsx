import React from 'react';
import ReactDOM from 'react-dom';

import HostsList from './components/HostsList'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hostsList: [] };
  }

  // addHost(hostToAdd) {
  //   let newHostsList = this.state.hostsList;
  //   newHostsList.unshift({ id: Date.now, first_name: 'Guest', email: hostToAdd });
  //
  //   this.setState({ hostsList: newHostsList });
  // }

  componentDidMount() {
    $.ajax("/hosts")
    .success(data => this.setState({ hostsList: data }))
    .error(error => console.log(error))
  }

  render() {
    return (
      <div>
        <HostsList hosts={this.state.hostsList} />
      </div>
    );
  }
}

let documentReady = () => {
  ReactDOM.render (
    <Main />,
    document.getElementById('react')
  )
}

$(documentReady);
