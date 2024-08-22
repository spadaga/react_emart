import React from 'react'
// import {speakerData} from '../data/speaker'
const TopAircondition = () => {
  return (
    <div className="image-gallery">
      {mobileData.map((image) => (
        <div key={image.id} className="image-item">
          <img src={image.image} alt={image.description} />
          <p>{image.model}</p>
        </div>
      ))}
    </div>
  )
}

export default TopAircondition
