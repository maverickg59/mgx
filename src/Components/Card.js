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
          <div className="cardTextBold">{props.name}</div>
          <div className="cardTextBold">{props.price}</div>
        </div>
        <div className="cardLineTwo">
          <div className="cardTextBold">{props.city}</div>
          <div className="cardTextLight">{props.rating}</div>
        </div>
      </div>
      <Button>
        <div className="addCartButton" style={{ color: 'white' }}>
          <MdAddShoppingCart size={30} />
          <div>
            <p className="cardButtonText">Add to Cart</p>
          </div>
        </div>
      </Button>
    </div>
  )
}

export default CardComponent
