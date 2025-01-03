import React, { useState, useEffect } from "react";
import pic2 from "../images/pic2.webp";
import pic4 from "../images/pic4.jpeg";
import pic1 from "../images/pic1.jpg";
import pic5 from "../images/pic5.webp";
import pic6 from "../images/pic6.jpg";
import pic7 from "../images/pic7.webp";
import pic8 from "../images/pic8.jpg";
import pic9 from "../images/pic9.jpg";

const CustomSlider = () => {
    const images = [pic2, pic4, pic1, pic5, pic6, pic7, pic8, pic9];
    const [currentIndex, setCurrentIndex] = useState(0);

   
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext(); 
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    // Handlers for navigation
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div
            style={{
                position: "relative",
                width: "80%",
                margin: "0 auto",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    display: "flex",
                    transition: "transform 0.5s ease-in-out",
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Slide ${index + 1}`}
                        style={{
                            width: "100%",
                            flexShrink: 0,
                            height: "500px",
                            objectFit: "cover",
                            borderRadius: "15px",
                        }}
                    />
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={handlePrev}
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "10px",
                    transform: "translateY(-50%)",
                    backgroundColor: "green",
                    color: "white",
                    border: "none",
                    borderRadius: "50%",
                    padding: "10px",
                    cursor: "pointer",
                }}
            >
                &#8592;
            </button>
            <button
                onClick={handleNext}
                style={{
                    position: "absolute",
                    top: "50%",
                    right: "10px",
                    transform: "translateY(-50%)",
                    backgroundColor: "green",//"rgba(0, 0, 0, 0.5)",
                    color: "white",
                    border: "none",
                    borderRadius: "50%",
                    padding: "10px",
                    cursor: "pointer",
                }}
            >
                &#8594;
            </button>
        </div>
    );
};

export default CustomSlider;
