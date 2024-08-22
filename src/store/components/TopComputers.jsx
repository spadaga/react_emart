import React from 'react'
// import {computerData} from '../data/computers'
const TopComputers = () => {
  return (
    <div className="image-gallery">
    {computerData.map((image) => (
      <div key={image.id} className="image-item">
        <img src={image.image} alt={image.description} />
        <p>{image.model}</p>
      </div>
    ))}
  </div>
  )
}

export default TopComputers
