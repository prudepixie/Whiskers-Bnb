import React from 'react';
import ReactDOM from 'react-dom';
// import Reservations from './reservations';
import Hosts from './hosts';
import 'bootstrap/dist/css/bootstrap.css'

let documentReady = () => {
  ReactDOM.render(
    <Hosts />
    , document.getElementById('hosts')
  );
};

$(documentReady);
