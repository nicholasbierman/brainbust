import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
// import AwsSliderStyles from "react-awesome-slider/src/styles.scss";
import "react-awesome-slider/dist/styles.css";
import "./carousel.css"
import image1 from "./brainbust-image1.webp"
import image2 from "./brainbust-image2.webp"
import image3 from "./brainbust-image3.webp"


const Carousel = () => {

    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
      <AutoplaySlider
        className="slider"
        play={true}
        cancelOnInteraction={false}
        interval={6000}
        >
        <div data-src={image1} />
        <div data-src={image2} />
        <div data-src={image3} />
      </AutoplaySlider>
    );
}

export default Carousel;
