import React from "react";
import image4 from './carosal1.jpg';
import image6 from "./carosal2.jpg";
import image7 from "./carosal3.jpg";
export function Imageslider() {
    const carouselItemStyle = {
        height: "600px", // Adjust the height as needed

    };
    return (
        <div id="carouselExample" class="carousel slide" data-ride="carousel" style="width:100%;">
            <div class="carousel-inner">
                <div class="carousel-item" style="{carouselItemStyle}">
                    <img src={image4} class="d-block w-100" alt="First slide"/>
                        <div class="carousel-caption">
                            <h3>Welcome to PiZZaria</h3>
                        </div>
                </div>
                <div class="carousel-item" style="{carouselItemStyle}">
                    <img src={image6} class="d-block w-100" alt="Second slide"/>
                        <div class="carousel-caption">
                            <h3>Welcome to PiZZaria</h3>
                        </div>
                </div>
                <div class="carousel-item" style="{carouselItemStyle}">
                    <img src={image7} class="d-block w-100" alt="Third slide"/>
                        <div class="carousel-caption">
                            <h3>Welcome to PiZZaria</h3>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Imageslider;