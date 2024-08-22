import React from 'react'
// import {tvData} from '../data/tv'

const Toptvs = () => {
  return (
    <div className="image-gallery">
    {tvData.map((image) => (
      <div key={image.id} className="image-item">
        <img src={image.image} alt={image.description} />
        <p>{image.model}</p>
      </div>
    ))}
  </div>
  )
}

export default Toptvs
