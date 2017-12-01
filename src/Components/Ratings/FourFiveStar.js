import React from 'react'
import '../Components.css'
import MdStarHalf from 'react-icons/lib/md/star-half'
import MdStar from 'react-icons/lib/md/star'

const FourFiveStar = props => {
  return (
    <div>
      <MdStar size={26} />
      <MdStar size={26} />
      <MdStar size={26} />
      <MdStar size={26} />
      <MdStarHalf size={26} />
    </div>
  )
}

export default FourFiveStar
