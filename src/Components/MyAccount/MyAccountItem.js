import React from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

export default class MyAccountItem extends React.Component {
  
render() {
  const displayStructure = function() {
    const userData = sessionStorage.getItem('userObject')
    let parsedUserData = JSON.parse(userData)
    if (parsedUserData === '') {
      return <div>You're not logged in.</div>
    } else {
      return  <div>
                <div>
                  Items for sale:
                </div>
                <div>
                  Order history:
                </div>
                <div>
                  Account info:
                </div>
              </div>
    }
  }
  return (
    <div>
    {displayStructure()}
  </div>
    )
  }
}
