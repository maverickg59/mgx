import React from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

export default class MyAccountItem extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup className="loginForm">
          <Label for="email">{this.props.email}</Label>
          <Input type="email" id="email" name="email" value={this.props.emailValue} onChange={this.props.onChangeEmail} placeholder="Enter your email:" />
          <Label for="password">{this.props.password}</Label>
          <Input type="password" id="password" name="password" value={this.props.passwordValue} onChange={this.props.onChangePassword} placeholder="Enter your password:" />
          <Button color="link" style={{ fontSize: 12 }} onClick={e => e.preventDefault}>Forgot Email?</Button>
          <Button color="link" style={{ fontSize: 12 }} onClick={e => e.preventDefault}>Forgot Password?</Button>
        </FormGroup>
      </Form>
    )
  }
}
