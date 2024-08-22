import React from 'react'
// import {menData} from '../data/men'
const TopMen = () => {
  return (
    <div className="image-gallery">
      {menData.map((image) => (
        <div key={image.id} className="image-item">
          <img src={image.image} alt={image.description} />
          <p>{image.model}</p>
        </div>
      ))}
    </div>
  )
}

export default TopMen
