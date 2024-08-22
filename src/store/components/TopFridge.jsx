import React from 'react'
// import {fridgeData} from '../data/fridge'
const TopFridge = () => {
  return (
    <div className="image-gallery">
    {fridgeData.map((image) => (
      <div key={image.id} className="image-item">
        <img src={image.image} alt={image.description} />
        <p>{image.model}</p>
      </div>
    ))}
  </div>
  )
}

export default TopFridge
