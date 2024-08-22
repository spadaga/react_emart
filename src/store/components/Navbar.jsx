import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { height, width } from '@fortawesome/free-brands-svg-icons/fa42Group';
import HorizontalMenu from './HorizontalMenu';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../Pages/CartContext'

const NavBar = () => {
    const { cart } = useCart();
    const [isCartOpen, setIsCartOpen] = useState(false);
    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleTitleClick = () => {
        navigate('/'); // Redirect to the home page
    };
    const handleCartClick = () => {
        navigate('/cart'); // Navigate to cart page
    };
    return (
        <>
            <div className='NavContainer'>
                <div className="title" onClick={handleTitleClick}>E-Mart</div>
                <div className="searchBar">
                    <input placeholder='Search here' type='text' sx={{ width: '200px', height: '58px' }}></input>

                </div>
                <div className='right__container'>
                    <div className="signandsignoutcontainer">

                        <FontAwesomeIcon icon={faUser} size="1x" />

                    </div>
                    <div className="cartcontainer" onClick={handleCartClick}>
                        <FontAwesomeIcon icon={faShoppingCart} size="1x" style={{ fontSize: '24px' }} />
                        {cart.length > 0 && (
                            <span className="cart-value">{cart.length}</span>
                        )}
                    </div>
                </div>

            </div>

            <HorizontalMenu />
        </>

    )
}

export default NavBar
