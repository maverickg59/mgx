import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import './Components.css'
import MdAddShoppingCart from 'react-icons/lib/md/add-shopping-cart'

export default class CardComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      hover: false,
    }
    this.toggle = this.toggle.bind(this)
    this.toggleHover = this.toggleHover.bind(this)
  }

  toggle() {
    this.setState({ modal: !this.state.modal })
  }

  toggleHover(){
    this.setState({ hover: !this.state.hover })
  }

  render() {
    const hoverItemStyle = () => {
      if (this.state.hover === false) {
        return {backgroundColor: 'white', border: '0', margin: '0', padding: '0', color: 'black'}
      } else {
        return {backgroundColor: 'white', border: '0', margin: '0', padding: '0', color: 'black', opacity: '.8' }
      }
    }

    return (
      <div className="card">
        <Button style={hoverItemStyle()} onClick={this.toggle} onMouseOver={this.toggleHover} onMouseOut={this.toggleHover}>
          <img className="cardImage" src={this.props.src} alt="An item for sale." />
          <div className="cardInfo">
            <div className="cardLineOne">
              <div className="cardTextBold">{this.props.name}</div>
              <div className="cardTextBold">{this.props.price}</div>
            </div>
            <div className="cardLineTwo">
              <div className="cardTextBold">{this.props.city}</div>
              <div className="cardTextLight">{this.props.rating}</div>
            </div>
          </div>
        </Button>
        <Button color='success' onClick={this.props.onClick}>
          <div className="addCartButton" style={{ color: 'white' }}>
            <MdAddShoppingCart size={30} />
            <div>
              <p className="cardButtonText">Add to Cart</p>
            </div>
          </div>
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader>

          </ModalHeader>
          <ModalBody>

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Add To Cart
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              Continue Shopping
            </Button>
          </ModalFooter>
        </Modal>
      </div>
      )
    }
  }
