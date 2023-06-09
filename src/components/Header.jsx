import React, { useState, useContext } from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu.jsx';
import MyOrder from '@containers/MyOrder.jsx';
import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import AppContext from '../context/AppContext';
import shoppingCart from "@icons/icon_shopping_cart.svg";

const Header = () =>{
    
    const [toggle, setToggle] = useState(false);
    const [toogleOrders, setToggleOrders] = useState(false);
    const { state } = useContext(AppContext); //Conectamos la aplicación
    
    const handleToogle = () => {
        setToggle(!toggle);
    }

    return(
        <nav>
            <img src={menu} alt="icono_menu" className="menu" width="50" />
            <div className="navbar-left">
                <img src={logo} alt="logo" className="nav-logo" />
                <ul>
                    <li><a href="">All</a></li>
                    <li><a href="">Clothes</a></li>
                    <li><a href="">Electronics</a></li>
                    <li><a href="">Furnitures</a></li>
                    <li><a href="">Toys</a></li>
                    <li><a href="">Others</a></li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToogle}>jhon.e.mantilla@gmail.com
                    </li>
                    <li className="navbar-shopping-cart" onClick={() => setToggleOrders(!toogleOrders)}> 
                        <img src={shoppingCart} alt="shopping cart" />
                        {state.cart.length > 0 ? <div>{ state.cart.length }</div>  : null }
                    </li>
                </ul>
            </div>
            {toggle && <Menu/>}
            {toogleOrders && <MyOrder/>}
        </nav>
    );
}

export default Header;