import React from 'react';

import HostForm from "./HostForm";
import HostsList from "./HostsList";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default class BecomeHost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hostsList: [],
      first_name: '',
      last_name: '',
      email: '',
      availability: [],
      selectedIndex: 0
     };
  }

  componentDidMount() {
    $.ajax("/hosts")
    .success(data => this.setState({ hostsList: data }))
    .error(error => console.log(error))
  }

  handleHostSubmit(host) {
    let newHostsList = this.state.hostsList;
    let that = this
    $.post('/hosts', { host: host }, function(data){
      newHostsList.unshift(data);
      that.setState({hostsList: newHostsList});
    });

  }

  handleSelect(index, last) {
    console.log('Selected tab: ' + index + ', Last tab: ' + last);

  }

  changeTab(index) {
    this.setState({selectedIndex: index});
  }



  render() {
    return(
      <div>
        <h4>Become a Host</h4>
        <Tabs
         onSelect={this.handleSelect.bind(this)}
         selectedIndex={this.state.selectedIndex}
       >
       <TabList>
         <Tab>About Meow</Tab>
         <Tab>Booking Policy</Tab>
         <Tab>My Cat Tree</Tab>
       </TabList>

       <TabPanel>
          <h2>About Meow</h2>
          <button onClick={this.changeTab.bind(this, 1)}>Next Section</button>
          <HostForm onHostSubmit={this.handleHostSubmit.bind(this)} />
        </TabPanel>
        <TabPanel>
          <h2>Booking Policy</h2>
          <button onClick={this.changeTab.bind(this, 2)}></button>
        </TabPanel>
        <TabPanel>
          <h2>My Cat Tree</h2>
        </TabPanel>
      </Tabs>


        <HostsList hosts={this.state.hostsList} />
      </div>
    );
  }
}
