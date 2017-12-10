import React, { Component } from 'react'
import '../../App.css'

import Card from '../Card'
import OneStar from '../Ratings/OneStar'
import OneFiveStar from '../Ratings/OneFiveStar'
import TwoStar from '../Ratings/TwoStar'
import TwoFiveStar from '../Ratings/TwoFiveStar'
import ThreeStar from '../Ratings/ThreeStar'
import ThreeFiveStar from '../Ratings/ThreeFiveStar'
import FourStar from '../Ratings/FourStar'
import FourFiveStar from '../Ratings/FourFiveStar'
import FiveStar from '../Ratings/FiveStar'

export default class Featured extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apiData: '',
      featured: [],
    }
    this.fetchData = this.fetchData.bind(this)
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    return fetch('https://mgx-api.herokuapp.com/api/v1/items')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          apiData: responseJson
        })
        const apiData = this.state.apiData
        const featuredArray = []
        for (let i = 0; i < apiData.length; i++) {
          if (apiData[i].featured === true) {
            featuredArray.push(apiData[i])
            this.setState({
              featured: featuredArray
            })
          } else {
            console.log('This one does not belong to the category pulled up.')
          }
        }
      })
      .catch(error => {
        console.error(error)
      })
  }

  render() {
    // let features = this.state.featured.length > 0 ? this.state.featured[0].brand : '[initial
    const featuredCart = sessionStorage.getItem('cartData')
    let parsedFeatureCart = JSON.parse(featuredCart)
    return (
      <div>
        <div className="category-header">
          <h1 className="category-header-text">Featured Items</h1>
        </div>
        <div className="featured">
          <div className="featured-content">
            {this.state.featured.map(featureItem => <Card
              key={featureItem.id}
              name={featureItem.brand}
              price={"$" + featureItem.price}
              city={featureItem.city}
              rating={featureItem.condition_id}
              src={featureItem.photo_url}
              onClick={() => {
                if (parsedFeatureCart[0].id === 'cartFakie') {
                  sessionStorage.setItem('cartData', JSON.stringify([featureItem]))
                } else {
                  let addToCart = parsedFeatureCart.concat([featureItem])
                  sessionStorage.setItem('cartData', JSON.stringify(addToCart))
                }
              }}
              onMouseOut={() => {
                let myCart = sessionStorage.getItem('cartData')
                console.log(myCart)
              }}
            />
            )}
          </div>
        </div>
      </div>
    )
  }
}
