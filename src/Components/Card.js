import React from 'react'
import { Button } from 'reactstrap'
import './Components.css'
import MdAddShoppingCart from 'react-icons/lib/md/add-shopping-cart'

const CardComponent = props => {
  return (
    <div className="card">
      <img className="cardImage" src={props.src} alt="An item for sale." />

      <div className="cardInfo">
        <div className="cardLineOne">
          <p className="cardTextBold">{props.name}</p>
          <p className="cardTextBold">{props.price}</p>
        </div>
        <div className="cardLineTwo">
          <p className="cardTextBold">{props.city}</p>
          <p className="cardTextLight">{props.rating}</p>
        </div>
      </div>
      <Button>
        <div className="addCartButton" style={{ color: 'white' }}>
          <MdAddShoppingCart size={50} />
        </div>
        Add to Cart
      </Button>
    </div>
  )
}

export default CardComponent
