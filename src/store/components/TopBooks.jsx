import React from 'react'
// import {booksData} from '../data/books'
const TopBooks = () => {
  return (
    <div className="image-gallery">
      {booksData.map((image) => (
        <div key={image.id} className="image-item">
          <img src={image.image} alt={image.description} />
          <p>{image.model}</p>
        </div>
      ))}
    </div>
  )
}

export default TopBooks
