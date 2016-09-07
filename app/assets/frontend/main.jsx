import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/Index';
import BecomeHost from './components/BecomeHost';

import { Router, Route, Link } from 'react-router';
import { hashHistory } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

let documentReady = () => {
  ReactDOM.render(
    <Router history={hashHistory}>
      <Route component={App}>
        <Route path="/become-host" component={BecomeHost} />
        <Route path="/" component={Index} />
      </Route>
    </Router>
    , document.getElementById('react')
  );
};

$(documentReady);
