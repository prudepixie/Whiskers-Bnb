import React from 'react';
import ReactDOM from 'react-dom';
import Reservations from './reservations';
import Hosts from './hosts';

let documentReady = () => {
  ReactDOM.render(
    <Reservations />
    , document.getElementById('reservations')
  );
  ReactDOM.render(
    <Hosts />
    , document.getElementById('hosts')
  );
};

$(documentReady);
