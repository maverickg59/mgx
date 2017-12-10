import React, { Component } from 'react'
import '../../App.css'

class Section extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apiData: '',
      featured: []
    }

    this.nothing = "this.nothing.bind(this)"
  }

  componentDidMount() {
    const apiData = this.state.apiData
    return fetch('https://mgx-api.herokuapp.com/api/v1/items')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          apiData: responseJson
        })
        const apiData = this.state.apiData
        const featuredArray = []
        for (let i = 0; i < apiData.length; i++) {
          if (apiData[i].featured === false) {
            featuredArray.push(apiData[i])
            this.setState({
              featured: featuredArray
            })
            console.log(this.state.featured)
          } else {
          console.log("this is a console log")
          }
        }
      })
      .catch(error => {
        console.error(error)
      })
  }

  render() {
    let features = this.state.featured.length > 0 ? this.state.featured[0].brand : '[initial]'
    return (
      <div>
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

export default Section
