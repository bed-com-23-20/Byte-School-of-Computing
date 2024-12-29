import React from "react"
import TextWriter from '../../others/TextWriter';
//import SearchBar from "../../others/searchBar";
import '../../App.css';
import './homePage.css'

function HomePage(){
    return(
        
            <div className="home">
                <div className="title">
                    <h1 className="mainHeader">Welcome to the Official Website for</h1>
                    <TextWriter /> 
                    <h2 className="motor">Once Computed, Always Computerized!!</h2>
                </div>
           
        </div>
    
        
    )
}
export default HomePage