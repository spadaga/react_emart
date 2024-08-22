import React from 'react'
// import {kitchenData} from '../data/kitchen'
const TopKitchen = () => {
  return (
    <div className="image-gallery">
      {kitchenData.map((image) => (
        <div key={image.id} className="image-item">
          <img src={image.image} alt={image.description} />
          <p>{image.model}</p>
        </div>
      ))}
    </div>
  )
}

export default TopKitchen
