import React from 'react';
import Host from './Host';

export default class HostsList extends React.Component {

  render() {
    let hosts = this.props.hosts.map(host => <Host key={host.id} {...host} />);

    return(
      <div>
        <ul>
          {hosts}
        </ul>
      </div>
    )
  }
}
