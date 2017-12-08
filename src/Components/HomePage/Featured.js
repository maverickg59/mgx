import React, { Component } from 'react'
import '../../App.css'
// import { MdChevronRight, MdChevronLeft } from '../../Components'

import Card from '../../Components/Card'
import OneStar from '../../Components/Ratings/OneStar'
import OneFiveStar from '../../Components/Ratings/OneFiveStar'
import TwoStar from '../../Components/Ratings/TwoStar'
import TwoFiveStar from '../../Components/Ratings/TwoFiveStar'
import ThreeStar from '../../Components/Ratings/ThreeStar'
import ThreeFiveStar from '../../Components/Ratings/ThreeFiveStar'
import FourStar from '../../Components/Ratings/FourStar'
import FourFiveStar from '../../Components/Ratings/FourFiveStar'
import FiveStar from '../../Components/Ratings/FiveStar'

class Featured extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apiData: '',
      featured: []
    }

    this.nothing = "this.nothing.bind(this)"
    this.fetchData = this.fetchData.bind(this)
  }

  componentDidUpdate() {
    console.log('Featured section has updated!')
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

  componentDidMount() {
    this.fetchData()
  }

  render() {
    // let features = this.state.featured.length > 0 ? this.state.featured[0].brand : '[initial]'
    return (
      <div>
        <div className="category-header">
          <h1 className="category-header-text">Featured Items</h1>
        </div>
        <div className="featured">
          <div className="featured-content">
            {this.state.featured.map(featureItem => <Card
              name={featureItem.brand}
              price={"$" + featureItem.price}
              city={featureItem.city}
              rating={featureItem.condition_id}
              src={featureItem.photo_url}
            />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Featured
