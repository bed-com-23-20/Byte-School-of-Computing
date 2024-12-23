import React from "react";
import SearchBar from "../../others/searchBar";
import "./header.css"
import Logo from '../../images/Logo.jpeg'
import { NavLink } from "react-router-dom";

function Header(){
    return(
        <div className="header">

        <img className="logo" src={Logo} alt="My Logo" style={{ width: '80px', height: '80px', borderRadius:10 }}/>
        
            <SearchBar/>
            <ul>
                <li> <NavLink to="/" className="links" >Home</NavLink> </li>
                <li> <NavLink to="coursesPage" className="links" >Courses</NavLink> </li>
                <li> <NavLink to="aboutUsPage" className="links" >About Us</NavLink> </li>
            
            </ul>

        </div>
    )
}
export default Header