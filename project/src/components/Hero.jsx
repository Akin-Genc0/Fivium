import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for validation
import './Hero.css';

function Hero({ heading1, heading2, paragraph1, paragraph2, imageSrc, imageStyle }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
    
            <div className={`hero-container ${isVisible ? 'fade-in' : ''}`}>
                <div className="left-hero">
                    <h3 className='sub-text1'>{heading1}</h3>
                    <h1 className='sub-text2'>{heading2}</h1>
                    <p>{paragraph1}</p>
                </div>
                <img 
                    className='hero-img' 
                    src={imageSrc} 
                    alt="Hero" 
                    style={imageStyle}  
                />
            </div>

          
            <div className={`hero-container2 ${isVisible ? 'fade-in' : ''}`}>
                <h1 className='sub-text3'>{heading2}</h1>
                <p className='sub-text5'>{paragraph2}</p>
            </div>
        </>
    );
}

Hero.propTypes = {
    heading1: PropTypes.string.isRequired,
    heading2: PropTypes.string.isRequired,
    paragraph1: PropTypes.string.isRequired,
    paragraph2: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    imageStyle: PropTypes.object,
};

export default Hero;
