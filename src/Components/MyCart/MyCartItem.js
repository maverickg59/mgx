import React from 'react'
import '../Components.css'
import { Button } from 'reactstrap'

const MyCartItem = props => {
  return (
    <div>
      <div className="cart-card">
        <img style={{ height: '30%', width: '30%', borderRadius: 10, margin: '2%', border: '1px solid #D3D3D3' }} src={props.image} alt="An item for sale." />
        <div className="cart-card-info">
          <div>
            <p className="cart-text">{props.brand}</p>
            <p className="cart-text">{props.model}</p>
          </div>
          <div>
            <p className="cart-text">{props.price}</p>
          </div>
          <div>
            <Button style={{ marginTop: 10 }} color="danger" onClick={props.deleteClick}>Remove</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyCartItem
