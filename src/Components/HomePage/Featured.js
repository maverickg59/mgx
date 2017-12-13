import React, { Component } from 'react'
import '../../App.css'
import { Alert, Modal, ModalHeader } from 'reactstrap';

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
      modal: false,
      addedModal: false,
    }
    this.fetchData = this.fetchData.bind(this)
    this.toggle = this.toggle.bind(this)
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this)
    this.toggleAddedModal = this.toggleAddedModal.bind(this)
  }

  componentDidMount() {
    this.fetchData()
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    })
  }

  forceUpdateHandler(){
    this.forceUpdate();
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

  toggleAddedModal(){
    this.setState({ addedModal: !this.state.addedModal })
  }

  render() {
    const addedToCartModalFunction = () => {
      const docElem = document.getElementsByClassName("addedToCartModal")
      console.log(docElem)
    }
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
              itemModalImage={featureItem.photo_url}
              itemModalCategory={featureItem.category_id}
              itemModalBrand={featureItem.brand}
              itemModalModel={featureItem.model}
              itemModalGender={featureItem.gender}
              itemModalSize={featureItem.size_id}
              itemModalCondition={featureItem.condition_id}
              itemModalPrice={featureItem.price}
              itemModalState={featureItem.state_id}
              itemModalCity={featureItem.city}
              onModalButtonClick={() => {
                const featuredCart = sessionStorage.getItem('cartData')
                let parsedFeatureCart = JSON.parse(featuredCart)
                const result = parsedFeatureCart.filter(item => item.id === featureItem.id)
                if (parsedFeatureCart[0].id === 'cartFakie') {
                  sessionStorage.setItem('cartData', JSON.stringify([featureItem]))
                  this.toggleAddedModal()
                } else if (result.length === 0) {
                  let addToCart = parsedFeatureCart.concat([featureItem])
                  sessionStorage.setItem('cartData', JSON.stringify(addToCart))
                  this.toggleAddedModal()
                } else {
                  console.log('This item is already in your cart bud!')
                }
              }}
              onClick={() => {
                const featuredCart = sessionStorage.getItem('cartData')
                let parsedFeatureCart = JSON.parse(featuredCart)
                const result = parsedFeatureCart.filter(item => item.id === featureItem.id)
                if (parsedFeatureCart[0].id === 'cartFakie') {
                  sessionStorage.setItem('cartData', JSON.stringify([featureItem]))
                  this.toggleAddedModal()
                } else if (result.length === 0) {
                  let addToCart = parsedFeatureCart.concat([featureItem])
                  sessionStorage.setItem('cartData', JSON.stringify(addToCart))
                  this.toggleAddedModal()
                } else {
                  console.log('This item is already in your cart bud!')
                }
              }}
              onMouseOut={() => {
                console.log("Aww, tks for scratching my back :)")
              }}
            />
            )}
            <Modal onClick={this.toggleAddedModal}  toggle={this.toggleAddedModal} isOpen={this.state.addedModal}>
              <ModalHeader toggle={this.toggleAddedModal}>
                Added to cart!
              </ModalHeader>
            </Modal>
          </div>
        </div>
      </div>
    )
  }
}
