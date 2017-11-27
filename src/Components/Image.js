import React from 'react'
import './Components.css'

const Image = props => {
  return (
    <div>
      <img src={props.url} alt="MotoGX Logo" />
    </div>
  )
}

export default Image
