import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import ListItem from './ListItem'
import MdAddBox from 'react-icons/lib/md/add-box'

class ListItemModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      category_id: 0,
      brand: '',
      model: '',
      city: '',
      size_id: 0,
      state_id: 0,
      condition_id: 0,
      photo_url: 'https://images-na.ssl-images-amazon.com/images/I/71OXnW5NlAL._SL1200_.jpg',
      file: '',
      featured: true
    }

    this.toggle = this.toggle.bind(this)
    this.post = this.post.bind(this)
    this.handleChangeCat = this.handleChangeCat.bind(this)
    this.handleChangeBrand = this.handleChangeBrand.bind(this)
    this.handleChangeModel = this.handleChangeModel.bind(this)
    this.handleChangeSize = this.handleChangeSize.bind(this)
    this.handleChangeCondition = this.handleChangeCondition.bind(this)
    this.handleChangeCity = this.handleChangeCity.bind(this)
    this.handleChangeState = this.handleChangeState.bind(this)
    this.handleChangeFile = this.handleChangeFile.bind(this)
    this.handleChangeFeatured = this.handleChangeFeatured.bind(this)
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    })
  }

  post() {
    const listItem = {
      category_id: this.state.category_id,
      brand: this.state.brand,
      model: this.state.model,
      city: this.state.city,
      size_id: this.state.size_id,
      state_id: this.state.state_id,
      condition_id: this.state.condition_id,
      photo_url: this.state.photo_url,
      featured: this.state.featured
    }
    console.log("here is your object: " + JSON.stringify(listItem))
    fetch('https://mgx-api.herokuapp.com/api/v1/items', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(listItem)
    }).then(this.toggle)
  }

  handleChangeCat(event) {
    this.setState({ category_id: parseInt(event.target.value, 10) })
  }
  handleChangeBrand(event) {
    this.setState({ brand: event.target.value })
  }
  handleChangeModel(event) {
    this.setState({ model: event.target.value })
  }
  handleChangeSize(event) {
    this.setState({ size_id: parseInt(event.target.value, 10) })
  }
  handleChangeCondition(event) {
    this.setState({ condition_id: parseInt(event.target.value, 10) })
  }
  handleChangeCity(event) {
    this.setState({ city: event.target.value })
  }
  handleChangeState(event) {
    this.setState({ state_id: parseInt(event.target.value, 10) })
  }
  handleChangeFile(event) {
    this.setState({ file: event.target.value })
  }
  handleChangeFeatured(event) {
    this.setState({ featured: !this.state.featured })
  }
  render() {
    const labelText = "Would you like your item to be featured on the home page? Featured items sell faster than others! We charge an additional 2.5% for this service, but you won't be charged the fee if your item sells from it's standard category listing."
    return (
      <div>
        <Button
          onClick={this.toggle}
          style={{ backgroundColor: 'black', padding: '0px', margin: '0px', borderColor: 'black' }}
        >
          {this.props.buttonLabel}
          <MdAddBox size={68} style={{ color: '#00FF00' }} />
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>List an item for sale:</ModalHeader>

          <ModalBody>
            <ListItem
              categoryLabel="Choose a gear category:"
              brandLabel="Brand:"
              modelLabel="Model:"
              sizeLabel="Size:"
              conditionLabel="Condition:"
              cityLabel="City:"
              stateLabel="State:"
              fileButtonLabel="Upload a photo:"
              formText="Choose a photo with good lighting that highlights the features of your item."
              featuredLabel={labelText}

              catValue={this.state.category_id}
              onChangeCat={this.handleChangeCat}

              brandValue={this.state.brand}
              onChangeBrand={this.handleChangeBrand}

              modelValue={this.state.model}
              onChangeModel={this.handleChangeModel}

              sizeValue={this.state.size_id}
              onChangeSize={this.handleChangeSize}

              conditionValue={this.state.condition_id}
              onChangeCondition={this.handleChangeCondition}

              cityValue={this.state.city}
              onChangeCity={this.handleChangeCity}

              stateValue={this.state.state_id}
              onChangeState={this.handleChangeState}

              fileValue={this.state.file}
              onChangeFile={this.handleChangeFile}

              featuredValue={this.state.featured}
              onChangeFeatured={this.handleChangeFeatured}

            />
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={this.post}>
              Submit
            </Button>{' '}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default ListItemModal
