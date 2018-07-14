import React from 'react'
import '../Components.css'
import { Button } from 'reactstrap'
import MdHighlightRemove from 'react-icons/lib/md/highlight-remove'

export const MyCartItem = props => {
  return (
    <div>
      <div className="cart-card">
        <img style={{ height: '30%', width: '30%', padding: 0, borderRadius: 5, margin: '1%', border: '1px solid #D3D3D3' }} src={props.image} alt="An item for sale." />
        <div className="cart-card-info">
          <div>
            <p className="cart-text">{props.brand}</p>
            <p className="cart-text">{props.model}</p>
          </div>
          <div>
            <p className="cart-text">{props.price}</p>
          </div>
          <div>
            <Button style={{ marginTop: 25, paddingRight: 0, color: '#C0C0C0' }} color="link" onClick={props.deleteClick}>
              <MdHighlightRemove />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
