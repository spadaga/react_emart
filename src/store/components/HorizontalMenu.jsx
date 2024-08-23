import React from 'react'

import { Link } from 'react-router-dom';


const HorizontalMenu = () => {
    
    return (
        <div>
            <nav className="menu">
                <ul className="menu-list">
                <Link  to="/mobiles">  <li className="menu-item"><a href="">Mobiles</a></li></Link  >
                <Link  to="/computers">   <li className="menu-item"><a href="">Computers</a></li></Link  >
                <Link  to="/watch">   <li className="menu-item"><a href="">Watches</a></li></Link  >
                <Link  to="/men">    <li className="menu-item"><a href="">Men Wear</a></li></Link  >

                <Link  to="/woman">   <li className="menu-item"><a href="">Women Wear</a></li></Link  >
                <Link  to="/furniture">   <li className="menu-item"><a href="">Furniture</a></li></Link  >
                <Link  to="/kitchen">   <li className="menu-item"><a href="">Kitchen</a></li></Link  >
                <Link  to="/fridge">    <li className="menu-item"><a href="">Fridge</a></li></Link  >
                <Link  to="/books">    <li className="menu-item"><a href="">Books</a></li></Link  >
                <Link  to="/speaker">    <li className="menu-item"><a href="">Speakers</a></li></Link  >
                <Link  to="/tv">   <li className="menu-item"><a href="">TVS</a></li></Link  >
                <Link  to="/ac">   <li className="menu-item"><a href="">AC</a></li></Link  >


                </ul>
            </nav>
        </div>
    )
}

export default HorizontalMenu
