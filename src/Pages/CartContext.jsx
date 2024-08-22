import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();
export function useCart() {
    return useContext(CartContext);
}

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        // setCart(cart + 1);

        setCart((prevItems) => [...prevItems, item]);
    };
    const removeFromCart = (itemId) => {
        setCart((prevItems) => prevItems.filter(item => item.id !== itemId));
      };
    const getCartCount = () => {
        return cart.length;
      };
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, getCartCount }}>
            {children}
        </CartContext.Provider>
    );
}