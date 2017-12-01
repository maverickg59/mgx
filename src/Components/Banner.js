import React from 'react'
import { Button } from 'reactstrap'
import './Components.css'
import MdPlaylistAdd from 'react-icons/lib/md/playlist-add'
import MdAttachMoney from 'react-icons/lib/md/attach-money'
import MdDirectionsBike from 'react-icons/lib/md/directions-bike'

const Banner = props => {
  return (
    <div className="bannerContainer">
      <div className="banner">
        <h1>List.</h1>
        <h1>Sell.</h1>
        <h1>Ride Happy.</h1>
      </div>
    </div>
  )
}

export default Banner
