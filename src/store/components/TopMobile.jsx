import React from 'react'
import { useNavigate } from 'react-router-dom';


const TopMobile = ({headername,mobileData}) => {


    let topmobiles = mobileData.slice(0, 5);
    console.log(topmobiles)


    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleImageClick = (image) => {
    
      // navigate(`/image/${id}`);
      navigate('/image-details', { state: { image } });
    };

    return (
        <div>
            <h1 className='headersection'>{headername}</h1>


            <div className="image-gallery">
                {topmobiles.map((image) => (
                    <div key={image.id} className="image-item">
                        <img src={image.image} alt={image.description} onClick={() => handleImageClick(image)}/>
                        <p>{image.model}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopMobile
