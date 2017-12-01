import React from 'react'
import '../Components.css'
import MdStarOutline from 'react-icons/lib/md/star-outline'
import MdStarHalf from 'react-icons/lib/md/star-half'
import MdStar from 'react-icons/lib/md/star'

const OneFiveStar = props => {
  return (
    <div>
      <MdStar size={26} />
      <MdStarHalf size={26} />
      <MdStarOutline size={26} />
      <MdStarOutline size={26} />
      <MdStarOutline size={26} />
    </div>
  )
}

export default OneFiveStar
