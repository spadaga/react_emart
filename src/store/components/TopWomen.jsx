import React from 'react'

// import {womanData} from '../data/woman'

const TopWomen = () => {
  return (
    <div className="image-gallery">
      {womanData.map((image) => (
        <div key={image.id} className="image-item">
          <img src={image.image} alt={image.description} />
          <p>{image.model}</p>
        </div>
      ))}
    </div>
  )
}

export default TopWomen
