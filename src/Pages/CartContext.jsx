import React, { createContext, useState, useContext } from 'react';
import { LoadingContext } from './LoadingContext';

const CartContext = createContext();
export function useCart() {
    return useContext(CartContext);
}

export function CartProvider({ children }) {
    const { setLoading } = useContext(LoadingContext);
    const [cart, setCart] = useState([]);

    const addToCart =async  (item) => {
        // setCart(cart + 1);
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setLoading(false);
        setCart((prevItems) => [...prevItems, item]);
    };
    const removeFromCart = async(itemId) => {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setLoading(false);
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