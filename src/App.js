import React, { Component } from 'react'
import './App.css'
import { MdChevronRight, MdChevronLeft } from './Components'

import SearchBox from './Components/SearchBox'
import NavBar from './Components/NavBar'
import Image from './Components/Image'
import ListItemModal from './Components/ListItem/ListItemModal'
import MyCart from './Components/MyCart/MyCartModal'
import MyAccount from './Components/MyAccount/MyAccountModal'
import Banner from './Components/Banner'
import Card from './Components/Card'
import OneStar from './Components/Ratings/OneStar'
import OneFiveStar from './Components/Ratings/OneFiveStar'
import TwoStar from './Components/Ratings/TwoStar'
import TwoFiveStar from './Components/Ratings/TwoFiveStar'
import ThreeStar from './Components/Ratings/ThreeStar'
import ThreeFiveStar from './Components/Ratings/ThreeFiveStar'
import FourStar from './Components/Ratings/FourStar'
import FourFiveStar from './Components/Ratings/FourFiveStar'
import FiveStar from './Components/Ratings/FiveStar'

class App extends Component {
  constructor(props) {
    super(props)

    this.nothing = 'nothing'
  }

  componentWillMount() {
    console.log('The home page has mounted')
  }

  render() {
    // return <div></div>
    return (
      <div className="app">
        <header className="header">
          <div className="top-header">
            <div className="header-side">
              <div>
                <Image
                  className="logo"
                  url={require('./Components/MotoGXLogo.png')}
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
            <NavBar />
          </div>
        </header>

        <div className="category-header">
          <h1 className="category-header-text">Featured Items</h1>
        </div>

        <div className="featured">
          <button className="side-button" style={{ color: '#A9A9A9' }}>
            <MdChevronLeft size={110} />
          </button>
          <div className="featured-content">
            <Card
              name="AGV Helmet"
              price="$80.00"
              city="Tucson, AZ"
              rating={<FourStar />}
              src="https://content.motosport.com/images/items/large/AGH/AGH005N/X001.jpg"
            />
            <Card
              name="Sedici Boots"
              price="$110.00"
              city="Bethlehem, PA"
              rating={<FourFiveStar />}
              src="https://images-na.ssl-images-amazon.com/images/I/61K8vuRuQpL._SL1000_.jpg"
            />
            <Card
              name="Alpinestars Gloves"
              price="$35.00"
              city="Denver, CO"
              rating={<ThreeStar />}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRviM_FqDw1Kf03wbVxjXlzCjYnh-W1_qT_DLUxjtpU8C51AtrY"
            />
          </div>
          <button className="side-button" style={{ color: '#A9A9A9' }}>
            <MdChevronRight size={110} />
          </button>
        </div>

        <div className="category-header">
          <h1 className="category-header-text">Category A</h1>
        </div>

        <div className="categories">
          <Card
            name="Alpinestars One Piece"
            price="$450.00"
            city="Longmont, CO"
            rating={<FourFiveStar />}
            src="https://www.alpinestars.com/media/catalog/product/cache/small_image/360x360/beff4985b56e3afdbeabfc89641a4582/3/1/3156017_1236_gp-tech-v2-tech-air-compatible_1pc_suit.jpg"
          />
          <Card
            name="Rev'It One Piece"
            price="$325.00"
            city="Phoenix, AZ"
            rating={<FourStar />}
            src="http://www.visordown.com/sites/default/files/revit%20replica.jpg"
          />
          <Card
            name="Bilt One Piece"
            price="$35.00"
            city="Temple, TX"
            rating={<ThreeStar />}
            src="https://www.cyclegear.com/_a/product_images/0189/5426/bilt_predator_one_piece_perforated_leather_motorcycle_suit_black_white.jpg"
          />
          <Card
            name="Dainese One Piece"
            price="$650.00"
            city="Salt Lake City, UT"
            rating={<FourFiveStar />}
            src="http://www.visordown.com/sites/default/files/revit%20replica.jpg"
          />
        </div>
      </div>
    )
  }
}

export default App
