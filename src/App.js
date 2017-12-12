import React, { Component } from 'react'
import './App.css'

import SearchBox from './Components/SearchBox'
import Image from './Components/Image'
import ListItemModal from './Components/ListItem/ListItemModal'
import MyCart from './Components/MyCart/MyCartModal'
import MyAccount from './Components/MyAccount/MyAccountModal'
import Banner from './Components/Banner'
import Featured from './Components/HomePage/Featured'
import MegaNavBar from './Components/MegaNavBar'
import Footer from './Components/HomePage/Footer'

require('dotenv').config()

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <div className="top-header">
            <div className="header-side">
              <div>
                <Image
                  className="logo"
                  url="https://s3-us-west-2.amazonaws.com/mgx-photos/MotoGXLogo.png"
                  alt="MotoGX Logo"
                />
              </div>
            </div>
            <div className="search">
              <div className="banner">
                <Banner />
              </div>
              <div className="search-input">
                <div className="search-box">
                  <SearchBox />
                </div>
              </div>
            </div>
            <div className="account">
              <div className="account-buttons">
                <div>
                  <MyCart />
                  <p style={{ color: 'white' }}>My Cart</p>
                </div>

                <div>
                  <MyAccount />
                  <p style={{ color: 'white' }}>My Account</p>
                </div>

                <div>
                  <ListItemModal />
                  <p style={{ color: 'white' }}>List Item</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-header">
            <MegaNavBar />
          </div>
        </header>
        <Featured />
        <Footer />
      </div>
    )
  }
}
