import React, { useEffect, useState } from 'react';
import Carousel from '../Carousel/Carousel';
import Dots from '../Dots/Dots';
import Arrows from '../Arrows/Arrows';
import ImagensCarousel from '../ImagensCarousel/ImagensCarousel';
import "../Slider/Slider.css"

const len = ImagensCarousel.length - 1;

function Slider(props) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
        }, 5000);

        return () => clearInterval(interval);

    }, [activeIndex]);

    return (

        <div className='slider-container'>
            < Carousel activeIndex={activeIndex} ImagensCarousel={ImagensCarousel} />
            <Arrows
                prevSlide={() =>
                    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
                nextSlide={() =>
                    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)} />
            <Dots
                activeIndex={activeIndex}
                ImagensCarousel={ImagensCarousel}
                onclick={(activeIndex) => setActiveIndex(activeIndex)} />
        </div>


    );
}


export default Slider;