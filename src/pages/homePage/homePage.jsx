import React from "react"
import TextWriter from '../../others/TextWriter';
import '../../App.css';
import './homePage.css'
import CustomSlider from "../../others/CustomSlider";

function HomePage(){
    return(
        
            <div className="home">
                <div className="title">
                    <h1 className="mainHeader">Welcome to the Official Website for</h1>
                    <TextWriter /> 
                    <h3 className="motor">Once Computed, Always Computerized!!</h3>

                </div>
                <h2 className="overview">Take a Glance of Our Facilities</h2>
                <CustomSlider />
                <h3>This ends here</h3>
           
        </div>
    
        
    )
}
export default HomePage