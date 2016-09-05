import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
  render() {
    return (
      <div></div>
    )
  }
}

let documentReady = () => {
  ReactDOM.render (
    <Main />,
    document.getElementById('react')
  )
}

$(documentReady);
