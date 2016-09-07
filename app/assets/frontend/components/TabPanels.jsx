import React from 'react';
import HostForm from './HostForm';
import {TabPanel } from 'react-tabs';

export default class TabPanels extends React.Component {
  handleHostSubmit(host) {
    let newHostsList = this.state.hostsList;
    let that = this
    $.post('/hosts', { host: host }, function(data){
      newHostsList.unshift(data);
      that.setState({hostsList: newHostsList});
    });
  }

  changeTab(index) {
    this.setState({selectedIndex: index});
  }

  render() {
    return (
      <div>
        <TabPanel>
          <h2>About Meow</h2>
          <HostForm onHostSubmit={this.handleHostSubmit.bind(this)} />
          <button onClick={this.changeTab.bind(this, 1)}>Next Section: Booking Policy</button>
        </TabPanel>
        <TabPanel>
          <h2>Booking Policy</h2>
          <button onClick={this.changeTab.bind(this, 2)}>Next Section: My Cat Tree</button>
        </TabPanel>
        <TabPanel>
          <h2>My Cat Tree</h2>
        </TabPanel>
      </div>
    );
  }
}
