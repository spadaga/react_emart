import React from 'react'
import { useParams } from 'react-router-dom';
// import { mobileData } from '../data/mobiles'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../Pages/CartContext'
const ProductDetails = () => {

    // const { id } = useParams();

    // console.log({mobileData})
    // const image = mobileData.find(img => img.id ===id);

    const location = useLocation();
  const { image } = location.state || {}; // Retrieve the passed image object

  const navigate = useNavigate();
    console.log(image)
    const { addToCart } = useCart();
    if (!image) {
        return <div>Image not found</div>;
    }

    const handleBackClick = () => {
        navigate(-1); // Go back to the previous page
      };
    
    //   const addToCart = () => {
    //     // Add to cart logic here
    //     addToCart(); // Increase cart count
    //     alert('Product added to cart!');
    //   };


    return (
        <div className='imagedetails__container'>
            <div className='image__container'>
                <img src={image.image} alt={image.model} style={{ width: '100%', height: 'auto' }} />
        </div>
            <div className='imgdet__container'>
                <h2>{image.model}</h2>
                <p style={{fontStyle:"normal",fontSize:"12px"}}>{image.description}</p>
                <p><strong>Company:</strong> {image.company}</p>
                <p><strong>Price:</strong> ${image.price}</p>
                <p><strong>Category:</strong> ${image.category}</p>
                <div className="button-container">
                <button className="back-button" onClick={handleBackClick}>Back</button>
                <button className='addtocart' onClick={() => addToCart(image)}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
