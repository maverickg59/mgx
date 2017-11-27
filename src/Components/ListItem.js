import React from 'react'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap'

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleSelect">{this.props.categoryLabel}</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">{this.props.fileButtonLabel}</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">{this.props.formText}</FormText>
        </FormGroup>
      </Form>
    )
  }
}
