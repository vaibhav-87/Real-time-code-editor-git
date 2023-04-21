import React from "react";
import HeroSectionImage from "../Images/HeroSectionImage.png";

const HeroSection = () => {
    return (
        <>
            <div class="border">
                <div class="tag_image">
                    <div class="tagLine">
                        <h1 class="line1">Code is like humor. When you have to explain it, it’s bad.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aut hic praesentium illo minus at.</p>

                        <button class="content_btn">Sign-up</button>
                    </div>

                    <div class="image">
                        <img src={HeroSectionImage} alt="Vector Image" class="home-vectorImage"/>
                    </div>

                </div>
            </div>
        </>
    );
};

export default HeroSection;