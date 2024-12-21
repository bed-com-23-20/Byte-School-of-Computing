import React from "react";
import SearchBar from "../../others/searchBar";
import "./header.css"
import Logo from '../../images/Logo.jpeg'

function Header(){
    return(
        <div className="header">

        <img className="logo" src={Logo} alt="My Logo" style={{ width: '80px', height: '80px', borderRadius:10 }}/>
        
            <SearchBar/>
            <ul>
                <li>Home</li>
                <li>Courses</li>
                <li>About Us</li>
            </ul>

        </div>
    )
}
export default Header