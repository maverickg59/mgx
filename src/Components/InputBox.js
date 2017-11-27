import React from 'react'
import { InputGroup, Input } from 'reactstrap'

const SearchBox = props => {
  return (
    <div>
      <InputGroup>
        <Input placeholder={props.placeholder} />
      </InputGroup>
    </div>
  )
}

export default SearchBox
