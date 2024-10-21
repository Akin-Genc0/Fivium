import { useEffect, useRef, useState } from 'react';
import './lower.css';
import img3 from '../assets/fivium-team1.jpg';
import img4 from '../assets/fivium-team2.jpg';

function Lower() {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const ref1 = useRef(null);
    const ref2 = useRef(null);

    const handleScroll = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target === ref1.current) {
                    setIsVisible1(true);
                } else if (entry.target === ref2.current) {
                    setIsVisible2(true);
                }
            }
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleScroll);
        if (ref1.current) observer.observe(ref1.current);
        if (ref2.current) observer.observe(ref2.current);

        return () => {
            if (ref1.current) observer.unobserve(ref1.current);
            if (ref2.current) observer.unobserve(ref2.current);
        };
    }, []);

    return (
        <>
            <div className={`mid1 ${isVisible1 ? 'fade-in' : ''}`} ref={ref1}>
                <div className="text-container">
                    <h3>Benefits</h3>
                    <p>
                        People are the most important part of our business, so we do our 
                        best to ensure this is a great place to work. We believe that we are 
                        able to offer all those who come to work for us an attractive benefits 
                        package and a great environment in which to work.
                    </p>
                </div>
                <img className="img1" src={img3} alt="Fivium Team Event" />
            </div>

            <div className={`mid2 ${isVisible2 ? 'fade-in' : ''}`} ref={ref2}>
                <img className="img2" src={img4} alt="Fivium Team Event" />
                <div className="text-container3">
                    <h3>Suite of benefits, including:</h3>
                    <p>
                        <ol>
                            <li>Bupa private health insurance*</li>
                            <li>Simplyhealth Cash Plan</li>
                            <li>Income protection cover</li>
                            <li>Life assurance and critical illness cover</li>
                            <li>Enhanced pension scheme</li>
                            <li>Ride2Work scheme*</li>
                            <li>Interest-free season ticket loan*</li>
                        </ol>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Lower;


