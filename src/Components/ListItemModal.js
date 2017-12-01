import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import ListItem from './ListItem'
import MdAddBox from 'react-icons/lib/md/add-box'

class ListItemModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false
    }

    this.toggle = this.toggle.bind(this)
    this.post = this.post.bind(this)
  }

  toggle() {
    console.log('hello')
    this.setState({
      modal: !this.state.modal
    })
  }

  post() {
    fetch('https://mgx-api.herokuapp.com/api/v1/item', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        category_id: 2,
        brand: 'Alpinestars',
        model: 'Gloves',
        city: 'Saskatchewan',
        size_id: 2,
        state_id: 2,
        condition_id: 2,
        photo_url:'https://www.alpinestars.com/media/catalog/product/cache/small_image/400x400/beff4985b56e3afdbeabfc89641a4582/3/5/3556017_12_supertech_glove_web.jpg',
        featured: false
      })
    }).then(this.toggle)
  }
  render() {
    const labeltext =
      "Would you like your item to be featured on the home page? Featured items sell faster than others! We charge an additional 2.5% for this service, but you won't be charged the fee if your item sells from it's standard category listing."
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
              featuredLabel={labeltext}
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
