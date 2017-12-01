import React from 'react'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap'

export default class ListItem extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleSelect">{this.props.categoryLabel}</Label>
          <Input type="select" name="select" id="exampleSelect" value={this.props.value} onChange={this.props.onChange}>
            <option>Helmets</option>
            <option>Gloves</option>
            <option>Boots</option>
            <option>Jackets</option>
            <option>Pants</option>
            <option>Suits</option>
            <option>Stunt</option>
            <option>Layers</option>
            <option>Casual</option>
            <option>Eyewear</option>
            <option>Heated</option>
            <option>Rain</option>
            <option>Protection</option>
            <option>Electronics</option>
            <option>Accesories</option>
            <option>Parts</option>
          </Input>
          <Label for="brand">{this.props.brandLabel}</Label>
          <Input id="brand" placeholder="Item brand:" />
          <Label for="model">{this.props.modelLabel}</Label>
          <Input id="model" placeholder="Item model:" />
          <Label for="size">{this.props.sizeLabel}</Label>
          <Input id="size" type="select" name="size">
            <option>2XS</option>
            <option>XS</option>
            <option>SM</option>
            <option>MD</option>
            <option>LG</option>
            <option>XL</option>
            <option>2XL</option>
            <option>3XL</option>
            <option>4XL</option>
          </Input>
          <Label for="condition">{this.props.conditionLabel}</Label>
          <Input id="condition" type="select" name="condition">
            <option>1 Star</option>
            <option>1.5 Stars</option>
            <option>2 Stars</option>
            <option>2.5 Stars</option>
            <option>3 Stars</option>
            <option>3.5 Stars</option>
            <option>4 Stars</option>
            <option>4.5 Stars</option>
            <option>5 Stars</option>
          </Input>
          <Label for="city">{this.props.cityLabel}</Label>
          <Input id="city" placeholder="City:" />
          <Label for="state">{this.props.stateLabel}</Label>
          <Input id="state" type="select" name="state">
            <option>Alabama</option>
            <option>Alaska</option>
            <option>Arizona</option>
            <option>Arkansas</option>
            <option>California</option>
            <option>Colorado</option>
            <option>Connecticut</option>
            <option>Delaware</option>
            <option>Florida</option>
            <option>Georgia</option>
            <option>Hawaii</option>
            <option>Idaho</option>
            <option>Illinois</option>
            <option>Indiana</option>
            <option>Iowa</option>
            <option>Kansas</option>
            <option>Kentucky</option>
            <option>Louisiana</option>
            <option>Maine</option>
            <option>Maryland</option>
            <option>Massachusetts</option>
            <option>Michigan</option>
            <option>Minnesota</option>
            <option>Mississippi</option>
            <option>Missouri</option>
            <option>Montana</option>
            <option>Nebraska</option>
            <option>Nevada</option>
            <option>New Hampshire</option>
            <option>New Jersey</option>
            <option>New Mexico</option>
            <option>New York</option>
            <option>North Carolina</option>
            <option>North Dakota</option>
            <option>Ohio</option>
            <option>Oklahoma</option>
            <option>Oregon</option>
            <option>Pennsylvania</option>
            <option>Rhode Island</option>
            <option>South Carolina</option>
            <option>South Dakota</option>
            <option>Tennessee</option>
            <option>Texas</option>
            <option>Utah</option>
            <option>Vermont</option>
            <option>Virginia</option>
            <option>Washington</option>
            <option>West Virginia</option>
            <option>Wisconsin</option>
            <option>Wyoming</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">{this.props.fileButtonLabel}</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">{this.props.formText}</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">{this.props.featuredLabel}</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>Yes</option>
            <option>No</option>
          </Input>
        </FormGroup>
      </Form>
    )
  }
}
