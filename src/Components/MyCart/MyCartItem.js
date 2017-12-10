import React from 'react'
import '../Components.css'
import { Button } from 'reactstrap'

const MyCartItem = props => {
  return (
    <div>
      <div className="cart-card">
        <img style={{ height: '25%', width: '25%', borderRadius: 10, marginLeft: 20, border: '1px solid #D3D3D3' }} src={props.image} alt="An item for sale." />
        <div className="cart-card-info">
            <div>
              <p className="cart-text">{props.brand}</p>
              <p className="cart-text">{props.model}</p>
            </div>
            <div>
              <p className="cart-text">{props.price}</p>
            </div>
            <div>
              <Button color="danger" onClick={props.deleteClick}>
                Delete
              </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyCartItem
