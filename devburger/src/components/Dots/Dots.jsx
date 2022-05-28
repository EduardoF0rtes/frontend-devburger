import React from 'react'
import ImagensCarousel from '../ImagensCarousel/ImagensCarousel';

function Dots({ activeIndex, onclick, imagensCarousel}) {
    return (
        <div className='all-dots'>
            {ImagensCarousel.map((slide, index) => (
                <span
                key={index}
                className={`${activeIndex === index ? "dot active-dot": "dot"}`}
                onClick={() => onclick(index)}
                
                >
                </span>
            )

            
            
            )}
            </div>
    );
}

export default Dots;