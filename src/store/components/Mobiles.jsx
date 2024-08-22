import React, { useState } from 'react'
// import { mobileData } from '../data/mobiles'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const Mobiles = () => {

  const [selectedIds, setSelectedIds] = useState([]);

  const handleCheckboxChange = (id) => {
    setSelectedIds(prevState =>
      prevState.includes(id)
        ? prevState.filter(item => item !== id)
        : [...prevState, id]
    );

  };
  console.log(selectedIds)

  const { category } = useParams();

  console.log(category)
  const filteredImages = selectedIds.length
    ? mobileData.filter(image => selectedIds.includes(image.id))
    : mobileData;

    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleImageClick = (image) => {
    
      // navigate(`/image/${id}`);
      navigate('/image-details', { state: { image } });
    };

  return (

    <div className='products-flex'>

      <div className='checkbox-section'>
        {mobileData.map((item) => (
          <div key={item.id} className='checkboxdiv'>
            <label>
              <input type="checkbox" id={item.id} value={item.id}

                checked={selectedIds.includes(item.id)}
                onChange={() => handleCheckboxChange(item.id)}

              />
              {item.model}
            </label>
          </div>
        ))}
      </div>

      <div className="image-gallery">
        {filteredImages

          // .filter(image => selectedIds.includes(image.id))
          .map((image) => (
            <div key={image.id} className="image-item">
            <img src={image.image} alt={image.description} onClick={() => handleImageClick(image)} />
              <p>{image.model}</p>
            </div>
          ))}
      </div></div>
  )
}

export default Mobiles
