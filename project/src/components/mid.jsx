import { useEffect, useRef, useState } from 'react';
import './mid.css';
import img1 from '../assets/hero5.png';
import img2 from '../assets/img2.jpg';

function Mid() {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const ref1 = useRef(null);
    const ref2 = useRef(null);

    const handleScroll = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target === ref1.current) {
                    setIsVisible1(true);
                    console.log('Component 1 is now visible'); // Debug log
                } else if (entry.target === ref2.current) {
                    setIsVisible2(true);
                    console.log('Component 2 is now visible'); // Debug log
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
                    <h3>Fundamental to our enduring spirit</h3>
                    <p>
                        The continuous involvement of our founding Directors, who encourage an 
                        open dialogue across the team and support a constructive feedback loop. 
                        We believe the respect this creates is highly valued and acknowledged as 
                        critical to the success of the business. People drive this business, not profit.
                    </p>
                </div>
                <img className="img1" src={img1} alt="Fivium Team Event" />
            </div>

            <div className={`mid2 ${isVisible2 ? 'fade-in' : ''}`} ref={ref2}>
                <img className="img2" src={img2} alt="Fivium Team Event" />
                <div className="text-container2">
                    <h3>It all comes back to team</h3>
                    <p>
                        The strength of our team lies in the powerful 
                        combination of expertise, integrity and authenticity. 
                        Our steady growth over the last two decades has meant 
                        the solid foundations on which it was built 
                        remain true and present today, 
                        with an exciting future landscape to explore and develop.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Mid;
