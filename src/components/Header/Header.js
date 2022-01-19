import React from "react";
import logo from '../../assets/LOGO Copy 2.svg'
import './Header.css'

export const Header = () =>{
    return(
        <div className="header-container">
            <img src={logo}/>
        </div>
    )
}
export default Header