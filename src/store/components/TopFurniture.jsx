import React from 'react'
// import {furnitureData} from '../data/furniture'
const TopFurniture = () => {
  return (
    <div className="image-gallery">
    {furnitureData.map((image) => (
      <div key={image.id} className="image-item">
        <img src={image.image} alt={image.description} />
        <p>{image.model}</p>
      </div>
    ))}
  </div>
  )
}

export default TopFurniture
