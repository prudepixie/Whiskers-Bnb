import React from 'react';

import HostForm from "./HostForm";
import HostsList from "./HostsList";
import TabPanels from "./TabPanels";
import AboutMeowForm from "./AboutMeowForm";
import BookingPolicyForm from "./BookingPolicyForm";
import CatTreeForm from "./CatTreeForm";


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

  handleFirstNameUpdate(first_name) {
    this.setState({
      first_name: first_name
    });
  }

  componentDidMount() {
    $.ajax("/hosts")
    .success(data => this.setState({ hostsList: data }))
    .error(error => console.log(error))
  }

  handleSelect(index, last) {
    console.log('Selected tab: ' + index + ', Last tab: ' + last);
  }

  handleHostSubmit(host) {
    let newHostsList = this.state.hostsList;
    let that = this
    $.post('/hosts', { host: host }, function(data){
      newHostsList.unshift(data);
      that.setState({hostsList: newHostsList});
    });
  }
  showName() {
    console.log(this.state.first_name);
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
         {/*

           <HostForm onHostSubmit={this.handleHostSubmit.bind(this)} />
         */}
         <AboutMeowForm updateName={this.handleFirstNameUpdate} />
         <button onClick={this.changeTab.bind(this, 1)}>Next Section: Booking Policy</button>
         <button onClick={this.showName.bind(this)}>Click</button>
       </TabPanel>
       <TabPanel>
         <h2>Booking Policy</h2>
         <BookingPolicyForm />
         <button onClick={this.changeTab.bind(this, 2)}>Next Section: My Cat Tree</button>
       </TabPanel>
       <TabPanel>
         <h2>My Cat Tree</h2>
         <CatTreeForm onHostSubmit={this.handleHostSubmit.bind(this)} />
         <button type="submit">Submit</button>
       </TabPanel>
      </Tabs>
        <HostsList hosts={this.state.hostsList} />
      </div>
    );
  }
}
