import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import '../Components.css'
import MyCartItem from './MyCartItem'
import MdShoppingCart from 'react-icons/lib/md/shopping-cart'

export default class MyCartModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      cart: []
    }
    this.toggle = this.toggle.bind(this)
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this)
  }

  componentWillMount() {
    const cartObject = [{
      id: 'cartFakie',
      category_id: 0,
      price: "0.00",
      brand: "",
      model: "",
      city: "",
      size_id: 0,
      state_id: 0,
      condition_id: 0,
      photo_url: "https://s3-us-west-2.amazonaws.com/mgx-photos/empty_cart+(1).png",
      featured: true,
      gender: 0
    },]
    sessionStorage.setItem('cartData', JSON.stringify(cartObject))
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    })
  }

  forceUpdateHandler(){
    this.forceUpdate();
  }

  render() {
    const myCart = sessionStorage.getItem('cartData')
    let myParsedCart = JSON.parse(myCart)
    let totalPrice = 0
    let addPrice = myParsedCart.forEach(item => {
      totalPrice = (parseInt(totalPrice, 10) + parseInt(item.price, 10) + ".00")
    })
    return (
      <div>
        <Button
          onClick={this.toggle}
          style={{ backgroundColor: 'black', padding: '0px', margin: '0px', borderColor: 'black' }}
        >
          {this.props.buttonLabel}
          <MdShoppingCart size={68} style={{ color: '#00FF00' }} />
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Items in your cart:</ModalHeader>

          <ModalBody>
            <div>
              {myParsedCart.map(item => <MyCartItem
                itemId={item.id}
                key={item.id}
                image={item.photo_url}
                brand={item.brand}
                model={item.model}
                price={'$' + item.price}
                deleteClick={() => {
                  const cartObject = [{
                    id: 'cartFakie',
                    category_id: 0,
                    price: "0.00",
                    brand: "",
                    model: "",
                    city: "",
                    size_id: 0,
                    state_id: 0,
                    condition_id: 0,
                    photo_url: "https://s3-us-west-2.amazonaws.com/mgx-photos/empty_cart+(1).png",
                    featured: true,
                    gender: 0
                  },]
                  const featuredCart = sessionStorage.getItem('cartData')
                  let parsedFeatureCart = JSON.parse(featuredCart)
                  let newCart = parsedFeatureCart.filter(object => object.id !== item.id)
                  if (parsedFeatureCart.length <= 1) {
                    sessionStorage.setItem('cartData', JSON.stringify(cartObject))
                    this.forceUpdateHandler()
                  } else {
                    sessionStorage.setItem('cartData', JSON.stringify(newCart))
                    this.forceUpdateHandler()
                  }
                }}
              />
              )}
            </div>
            <div className="cart-total">
              <h5>
                Total Price:
              </h5>
              <h5>
                ${totalPrice}
              </h5>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Proceed to Checkout
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
