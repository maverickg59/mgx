import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import MyAccountItem from './MyAccountItem'
import MdAccountBox from 'react-icons/lib/md/account-box'

class MyAccountModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    })
  }

  render() {
    return (
      <div>
        <Button
          onClick={this.toggle}
          style={{ backgroundColor: 'black', padding: '0px', margin: '0px', borderColor: 'black' }}
        >
          {this.props.buttonLabel}
          <MdAccountBox size={68} style={{ color: '#00FF00' }} />
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Your Account Info:</ModalHeader>

          <ModalBody>
            <MyAccountItem
              email="Email"
              password="Password"
            />
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Login
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              Register
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default MyAccountModal
