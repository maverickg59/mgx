import React from 'react'
import '../Components.css'
import MdStarOutline from 'react-icons/lib/md/star-outline'
import MdStar from 'react-icons/lib/md/star'

const OneStar = props => {
  return (
    <div>
      <MdStar size={26} />
      <MdStarOutline size={26} />
      <MdStarOutline size={26} />
      <MdStarOutline size={26} />
      <MdStarOutline size={26} />
    </div>
  )
}

export default OneStar
