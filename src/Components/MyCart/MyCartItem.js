import React from 'react'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import '../Components.css'

export default class MyCartItem extends React.Component {
  render() {
    return (
      <div className="cart-card">
        <img style={{height: '30%', width: '30%', borderRadius: 10 }} src='https://s3-us-west-2.amazonaws.com/mgx-photos/zx10wheelie.jpg' alt="An item for sale." />
        <div className="cart-card-info">

            <div>
              <p>Kawasaki ZX10R</p>
              <p>Wheelie</p>
            </div>

            <div>
              <p>$FREE</p>
            </div>

        </div>
      </div>
    )
  }
}
