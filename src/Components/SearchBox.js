import React from 'react'
import { InputGroup, InputGroupButton, Input, Button } from 'reactstrap'

const SearchBox = props => {
  return (
    <div className="search-input">
      <InputGroup>
        <Input placeholder="What type of gear are you looking for?" />
        <InputGroupButton>
          <Button>Search</Button>
        </InputGroupButton>
      </InputGroup>
    </div>
  )
}

export default SearchBox
