import React from "react";
import HostsList from "./HostsList";
import BecomeHost from "./BecomeHost";
import {Link} from 'react-router';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hostsList: [] };
  }

  componentDidMount() {
    $.ajax("/hosts")
    .success(data => this.setState({ hostsList: data }))
    .error(error => console.log(error))
  }

  render() {
    return (
      <div>
        <Link to ="/become-host">
          <button type="button" name="button">Become a Host</button>
        </Link>
        <HostsList hosts={this.state.hostsList} />
      </div>
    );
  }
}
