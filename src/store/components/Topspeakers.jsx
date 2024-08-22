import React from 'react'

// import {speakerData} from '../data/speaker'

const Topspeakers = () => {
  return (
    <div className="image-gallery">
      {speakerData.map((image) => (
        <div key={image.id} className="image-item">
          <img src={image.image} alt={image.description} />
          <p>{image.model}</p>
        </div>
      ))}
    </div>
  )
}

export default Topspeakers
