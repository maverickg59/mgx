import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Components.css'

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOne: false,
      dropdownTwo: false,
      dropdownThree: false
    };
    this.toggleOne = this.toggleOne.bind(this);
    this.toggleTwo = this.toggleTwo.bind(this);
    this.toggleThree = this.toggleThree.bind(this);
  }

  toggleOne() {
    this.setState({
      dropdownOne: !this.state.dropdownOne
    });
  }
  toggleTwo() {
    this.setState({
      dropdownTwo: !this.state.dropdownTwo
    });
  }
  toggleThree() {
    this.setState({
      dropdownThree: !this.state.dropdownThree
    });
  }

  render() {
    return (
      <div className="meganavbar">
      <div className="thirds">
      <Dropdown isOpen={this.state.dropdownOne} toggle={this.toggleOne}>
        <DropdownToggle style={{ 'fontSize': '25px', 'fontWeight': '700' }}  className="dropdown" color="black" caret>
          GEAR
        </DropdownToggle>
        <DropdownMenu className="dropdownMenu">
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      </div>
      <div className="thirds">
      <Dropdown isOpen={this.state.dropdownTwo} toggle={this.toggleTwo}>
        <DropdownToggle style={{ 'fontSize': '25px', 'fontWeight': '700' }} className="dropdown" color="black" caret>
          PARTS
        </DropdownToggle>
        <DropdownMenu className="dropdownMenu">
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      </div>
      <div className="thirds">
      <Dropdown isOpen={this.state.dropdownThree} toggle={this.toggleThree}>
        <DropdownToggle style={{ 'fontSize': '25px', 'fontWeight': '700' }} className="dropdown" color="black" caret>
          MOTORCYCLES
        </DropdownToggle>
        <DropdownMenu className="dropdownMenu">
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      </div>
      </div>
    );
  }
}
