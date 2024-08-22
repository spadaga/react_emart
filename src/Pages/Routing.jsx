import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Products from '../store/components/Products';

import ProductDetails from '../store/components/ProductDetails';
import { CartProvider } from './CartContext';
import CartDetails from './CartDetails';
import CommonProducts from '../store/components/CommonProducts';
import NavBar from '../store/Components/NavBar';
const Routing = () => {
    return (
        <div>
            <CartProvider>
            <Router>
                <NavBar />

                <div className="App">
                    <Routes>
                        <Route index element={<Products />} />
                        {/* <Route path="/:category" element={<Mobiles />} /> */}
                        <Route path="/:category" element={<CommonProducts />} />
                        {/* <Route path="/watches" element={<TopWatches />} />
                        <Route path="/men" element={<TopMen />} />
                        <Route path="/women" element={<TopWomen />} />
                        <Route path="/furniture" element={<TopFurniture />} />
                        <Route path="/kitchen" element={<TopKitchen />} />
                        <Route path="/fridge" element={<TopFridge />} />
                        <Route path="/books" element={<TopBooks />} />
                        <Route path="/speakers" element={<Topspeakers />} />
                        <Route path="/tvs" element={<Toptvs />} />
                        <Route path="/acs" element={<TopAcs />} /> */}

                        <Route path="/image-details" element={<ProductDetails />} />
                        <Route path="/cart" element={<CartDetails />} />
                    </Routes>
                </div>


            </Router>
            </CartProvider>

        </div>
    )
}

export default Routing
