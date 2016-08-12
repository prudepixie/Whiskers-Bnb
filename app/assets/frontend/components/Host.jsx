import React from 'react';

export default class Host extends React.Component {
  render() {
    return(
      <div >
        <li >
          {this.props.first_name}, {this.props.email}
        </li>
      </div>
    )
  }
}
