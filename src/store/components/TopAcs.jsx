import React from 'react'
// import {acData} from '../data/ac'
const TopAcs = () => {
  return (
    <div className="image-gallery">
    {acData.map((image) => (
      <div key={image.id} className="image-item">
        <img src={image.image} alt={image.description} />
        <p>{image.model}</p>
      </div>
    ))}
  </div>
  )
}

export default TopAcs
