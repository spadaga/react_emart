import React from 'react'
import { useCart } from '../Pages/CartContext'

const CartDetails = () => {
    const { cart, removeFromCart } = useCart();
    console.log(cart)
    if (cart.length === 0) {
        return <div className="cart-empty">Your cart is empty.</div>;
    }
    return (
        <div>
            <div className="cart-details">
                <h2>Cart Details</h2>
                <ul>
                    {cart && cart.map(item => (
                        <li key={item.id} className="cart-item">
                            <img src={item.image} alt={item.title} className="cart-item-image" />
                            <div className="cart-item-info">
                                <h3>{item.model}</h3>
                                <p>${item.price}</p>
                                <p>{item.description}</p>
                            </div>
                            <button className="remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default CartDetails
