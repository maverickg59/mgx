import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import MyAccountItem from './MyAccountItem'
import MdAccountBox from 'react-icons/lib/md/account-box'
import {provider, auth} from '../../Client';

class MyAccountModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      user: { displayName: '', photoURL: '' }
    }

    this.toggle = this.toggle.bind(this)
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this)
  }

  forceUpdateHandler(){
    this.forceUpdate();
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    })
  }

  componentWillMount() {
    sessionStorage.setItem('userObject', JSON.stringify(''))
  }

  render() {

    const login = async () => {
      const result = await auth().signInWithPopup(provider)
      this.setState({ user: result.user })
      sessionStorage.setItem('userObject', JSON.stringify(result.user))
      const userData = sessionStorage.getItem('userObject')
      let parsedUserData = JSON.parse(userData)
      this.forceUpdateHandler()
      console.log(parsedUserData)
    }

    const logout = async () => {
      await auth().signOut()
      this.setState({ user: {displayName: '', photoURL: ''} })
      sessionStorage.setItem('userObject', JSON.stringify(''))
      this.forceUpdateHandler()
      this.toggle()
    }

    const beforeLogin = () => {
      if (this.state.user.displayName === '') {
        return 'Please Login With Facebook'
      } else {
        return 'Welcome, ' + this.state.user.displayName + '!'
      }
    }
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
          <ModalHeader toggle={this.toggle}><img alt='' src={this.state.user.photoURL} style={{ height: 50, width: 'auto', borderRadius: '50%', marginRight: 15}} />{beforeLogin()}</ModalHeader>

          <ModalBody>
            <MyAccountItem />
          </ModalBody>

          <ModalFooter style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Button color="primary" onClick={login}>
              Login with Facebook
            </Button>
            <Button color="secondary" onClick={logout}>
              Logout
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default MyAccountModal
