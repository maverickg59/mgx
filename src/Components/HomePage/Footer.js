import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import '../Components.css'

export default class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOne: false
    }
    this.toggleOne = this.toggleOne.bind(this)
  }

  toggleOne() {
    this.setState({
      dropdownOne: !this.state.dropdownOne
    })
  }

  render() {
    return (
      <footer>
        <div className="footer">
          <h5 className="copyright">
            Copyright &#x24B8; 2017 MotoGX.com
          </h5>
        </div>
      </footer>
    )
  }
}
