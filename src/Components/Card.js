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
            <ModalHeader style={{ display: 'flex', justifyContent: 'center', margin: 0, padding: 5 }}>
              <div style={{ display: 'flex', width: '100%' }}>
                <p>
                  {this.props.itemModalBrand}
                </p>
                <p>&#160;&#160;</p>
                <p>
                  {this.props.itemModalModel}
                </p>
              </div>
            </ModalHeader>
            <ModalBody onClick={this.toggle} style={{ display: 'flex', justifyContent: 'center', height: 'auto', width: 500 }}>
              <div>
                <img style={{ height: 400, width: 'auto', borderRadius: 10 }} src={this.props.itemModalImage}/>
                <div>
                  <p>
                    Brand: {this.props.itemModalBrand}
                  </p>
                  <p>
                    Model: {this.props.itemModalModel}
                  </p>
                  <p>
                    Gender: {this.props.itemModalGender}
                  </p>
                  <p>
                    Size_id: {this.props.itemModalSize}
                  </p>
                  <p>
                    Condition: {this.props.itemModalCondition}
                  </p>
                  <p>
                    Price: {this.props.itemModalPrice}
                  </p>
                  <p>
                    Location: {this.props.itemModalCity}, {this.props.itemModalState}
                  </p>
                </div>
              </div>
            </ModalBody>
            <ModalFooter onClick={this.toggle} style={{ display: 'flex', justifyContent: 'space-around' }}>
              <Button color="primary" onClick={this.props.onModalButtonClick}>
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
