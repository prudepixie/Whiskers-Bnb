import React from 'react';
import ReactDOM from 'react-dom';
// import Reservations from './reservations';
import Hosts from './hosts';
import Bootstrap from 'bootstrap';

let documentReady = () => {
  ReactDOM.render(
    <Hosts />
    , document.getElementById('hosts')
  );
};

$(documentReady);
