import React from 'react'
// import {watchData} from '../data/watch'
const TopWatches = () => {
  return (
    <div className="image-gallery">
    {watchData.map((image) => (
      <div key={image.id} className="image-item">
        <img src={image.image} alt={image.description} />
        <p>{image.model}</p>
      </div>
    ))}
  </div>
  )
}

export default TopWatches
