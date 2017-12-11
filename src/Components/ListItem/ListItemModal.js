import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import ListItem from './ListItem'
import MdAddBox from 'react-icons/lib/md/add-box'

class ListItemModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,

    }
    this.toggle = this.toggle.bind(this)
    this.post = this.post.bind(this)
    this.upload = this.upload.bind(this)
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    })
  }

  upload(formSelector = '.listItemForm', url = 'https://mgx-api.herokuapp.com/api/v1/items') {
    const formData = new FormData(document.querySelector(formSelector))
    var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://mgx-api.herokuapp.com/api/v1/items', true)
        xhr.onload = function () {
          if (xhr.status === 200) {
            console.log('The file uploaded successfully...')
            alert('Your item was added successfull!')
          } else {
            console.log('An error occurred while uploading the file. Try again')
          }
        };
        xhr.send(formData);
  }

  post() {
    this.upload()
    this.toggle()
  }

  render() {
    const labelText = "Would you like your item to be featured on the home page? Featured items sell faster than others! We charge an additional 2.5% for this service, but you won't be charged the fee if your item sells from it's standard category listing."
    return (
      <div>
        <Button
          onClick={this.toggle}
          style={{ backgroundColor: 'black', padding: '0px', margin: '0px', borderColor: 'black' }}
        >
          <MdAddBox size={68} style={{ color: '#00FF00' }} />
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>List an item for sale:</ModalHeader>

          <ModalBody>
            <ListItem
              genderLabel="Gender:"
              categoryLabel="Gear category:"
              brandLabel="Brand:"
              modelLabel="Model:"
              sizeLabel="Size:"
              conditionLabel="Condition:"
              priceLabel="Price:"
              cityLabel="City:"
              stateLabel="State:"
              fileButtonLabel="Upload a photo:"
              formText="Choose a photo with good lighting that highlights the features of your item."
              featuredLabel={labelText}

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
