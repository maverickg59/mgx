import React from 'react'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap'

export default class ListItem extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleSelect">{this.props.categoryLabel}</Label>
          <Input type="select" name="select" id="exampleSelect" value={this.props.catValue} onChange={this.props.onChangeCat}>
            <option value={0}>Helmets</option>
            <option value={1}>Gloves</option>
            <option value={2}>Boots</option>
            <option value={3}>Jackets</option>
            <option value={4}>Pants</option>
            <option value={5}>Suits</option>
            <option value={6}>Stunt</option>
            <option value={7}>Layers</option>
            <option value={8}>Casual</option>
            <option value={9}>Eyewear</option>
            <option value={10}>Heated</option>
            <option value={11}>Rain</option>
            <option value={12}>Protection</option>
            <option value={13}>Electronics</option>
            <option value={14}>Accesories</option>
            <option value={15}>Parts</option>
          </Input>

          <Label for="brand">{this.props.brandLabel}</Label>
          <Input id="brand" placeholder="Item brand:" value={this.props.brandValue} onChange={this.props.onChangeBrand}/>

          <Label for="model">{this.props.modelLabel}</Label>
          <Input id="model" placeholder="Item model:" value={this.props.modelValue} onChange={this.props.onChangeModel}/>

          <Label for="size">{this.props.sizeLabel}</Label>
          <Input id="size" type="select" name="size" value={this.props.sizeValue} onChange={this.props.onChangeSize}>
            <option value={0}>2XS</option>
            <option value={1}>XS</option>
            <option value={2}>SM</option>
            <option value={3}>MD</option>
            <option value={4}>LG</option>
            <option value={5}>XL</option>
            <option value={6}>2XL</option>
            <option value={7}>3XL</option>
            <option value={8}>4XL</option>
          </Input>

          <Label for="condition">{this.props.conditionLabel}</Label>
          <Input id="condition" type="select" name="condition" value={this.props.conditionValue} onChange={this.props.onChangeCondition}>
            <option value={0}>1 Star</option>
            <option value={1}>1.5 Stars</option>
            <option value={2}>2 Stars</option>
            <option value={3}>2.5 Stars</option>
            <option value={4}>3 Stars</option>
            <option value={5}>3.5 Stars</option>
            <option value={6}>4 Stars</option>
            <option value={7}>4.5 Stars</option>
            <option value={8}>5 Stars</option>
          </Input>

          <Label for="city">{this.props.cityLabel}</Label>
          <Input id="city" placeholder="City:" value={this.props.cityValue} onChange={this.props.onChangeCity}/>

          <Label for="state">{this.props.stateLabel}</Label>
          <Input id="state" type="select" name="state" value={this.props.stateValue} onChange={this.props.onChangeState}>
            <option value={0}>Alabama</option>
            <option value={1}>Alaska</option>
            <option value={2}>Arizona</option>
            <option value={3}>Arkansas</option>
            <option value={4}>California</option>
            <option value={5}>Colorado</option>
            <option value={6}>Connecticut</option>
            <option value={7}>Delaware</option>
            <option value={8}>Florida</option>
            <option value={9}>Georgia</option>
            <option value={10}>Hawaii</option>
            <option value={11}>Idaho</option>
            <option value={12}>Illinois</option>
            <option value={13}>Indiana</option>
            <option value={14}>Iowa</option>
            <option value={15}>Kansas</option>
            <option value={16}>Kentucky</option>
            <option value={17}>Louisiana</option>
            <option value={18}>Maine</option>
            <option value={19}>Maryland</option>
            <option value={20}>Massachusetts</option>
            <option value={21}>Michigan</option>
            <option value={22}>Minnesota</option>
            <option value={23}>Mississippi</option>
            <option value={24}>Missouri</option>
            <option value={25}>Montana</option>
            <option value={26}>Nebraska</option>
            <option value={27}>Nevada</option>
            <option value={28}>New Hampshire</option>
            <option value={29}>New Jersey</option>
            <option value={30}>New Mexico</option>
            <option value={31}>New York</option>
            <option value={32}>North Carolina</option>
            <option value={33}>North Dakota</option>
            <option value={34}>Ohio</option>
            <option value={35}>Oklahoma</option>
            <option value={36}>Oregon</option>
            <option value={37}>Pennsylvania</option>
            <option value={38}>Rhode Island</option>
            <option value={39}>South Carolina</option>
            <option value={40}>South Dakota</option>
            <option value={41}>Tennessee</option>
            <option value={42}>Texas</option>
            <option value={43}>Utah</option>
            <option value={44}>Vermont</option>
            <option value={45}>Virginia</option>
            <option value={46}>Washington</option>
            <option value={47}>West Virginia</option>
            <option value={48}>Wisconsin</option>
            <option value={49}>Wyoming</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="exampleFile">{this.props.fileButtonLabel}</Label>
          <Input type="file" name="file" id="exampleFile" value={this.props.fileValue} onChange={this.props.onChangeFile}/>
          <FormText color="muted">{this.props.formText}</FormText>
        </FormGroup>

        <FormGroup>
          <Label for="featuredSelect">{this.props.featuredLabel}</Label>
          <Input type="select" name="select" id="featuredSelect" value={this.props.featuredValue} onChange={this.props.onChangeFeatured}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </Input>
        </FormGroup>

      </Form>
    )
  }
}
